"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { X } from "lucide-react";
import { FormProgress } from "../from-progress";
import {
  additionalPersonalInfoSchema,
  basicPersonalInfoSchema,
  personalFileSchema,
  userRegisterSchema,
} from "@/app/schema/auth/user-register-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";
import { registerUser } from "@/app/_api/public/actions/auth-actions";
import { showErrorToasts } from "@/lib/utils";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const MAX_STEPS = 3;
export default function RegisterAsUser() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const formSteps = [
    "Basic Information",
    "Additional Information",
    "Upload Files",
  ];

  const [files, setFiles] = useState<{
    profilePic: File | null;
    cv: File | null;
  }>({
    profilePic: null,
    cv: null,
  });

  const basicForm = useForm<z.infer<typeof basicPersonalInfoSchema>>({
    resolver: zodResolver(basicPersonalInfoSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const additionalForm = useForm<z.infer<typeof additionalPersonalInfoSchema>>({
    resolver: zodResolver(additionalPersonalInfoSchema),
    defaultValues: {
      address: "",
      bio: "",
    },
  });

  const personalFileForm = useForm<z.infer<typeof personalFileSchema>>({
    resolver: zodResolver(personalFileSchema),
  });

  const handleNext = async () => {
    if (step < MAX_STEPS) {
      setStep(step + 1);
    }
    // store all data in one object
    if (step === MAX_STEPS) {
      const data = {
        ...basicForm.getValues(),
        ...additionalForm.getValues(),
        ...personalFileForm.getValues(),
      };

      // await userRegisterSchema.safeParseAsync(data);
      const formData = new FormData();
      for (const key in data) {
        // @ts-ignore
        formData.append(key, data[key]);
      }
      formData.append("confirmPassword", data.password);
      const response = await registerUser(formData);
      if (response.success === true) {
        toast.success(response.message);
        setStep(1);
        router.replace("/");
      } else {
        showErrorToasts(response.errorData);
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <>
      <FormProgress
        steps={MAX_STEPS}
        formSteps={formSteps}
        currentStep={step}
      />
      {step === 1 && (
        <Form {...basicForm}>
          <form
            onSubmit={basicForm.handleSubmit(handleNext)}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Basic Info</h1>

            <FormField
              control={basicForm.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={basicForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={basicForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your password"
                      {...field}
                      type="password"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between float-right">
              <Button type="submit">Next</Button>
            </div>
          </form>
        </Form>
      )}
      {step === 2 && (
        <Form {...additionalForm}>
          <form
            onSubmit={additionalForm.handleSubmit(handleNext)}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Additional Info</h1>
            <FormField
              control={additionalForm.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your address" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={additionalForm.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your bio" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={additionalForm.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your phone number" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-between float-right w-full">
              <Button onClick={handleBack}>Back</Button>
              <Button type="submit">Next</Button>
            </div>
          </form>
        </Form>
      )}

      {step === 3 && (
        <Form {...personalFileForm}>
          <form
            onSubmit={personalFileForm.handleSubmit(handleNext)}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Upload Files</h1>
            <FormField
              control={personalFileForm.control}
              name="profilePic"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    {files.profilePic ? (
                      <>
                        <div className="relative flex items-center justify-center">
                          <Image
                            width={200}
                            height={200}
                            src={URL.createObjectURL(files.profilePic)}
                            alt="logo"
                          />
                          <Button
                            type="submit"
                            size={"sm"}
                            className="absolute top-0 right-0"
                            onClick={() => {
                              field.onChange(null);
                              setFiles({ ...files, profilePic: null });
                            }}
                          >
                            <X />
                          </Button>
                        </div>
                      </>
                    ) : (
                      <>
                        <FormLabel>Profile Picture</FormLabel>

                        <Input
                          type="file"
                          onChange={(e) => {
                            setFiles({
                              ...files,
                              profilePic: e.target.files
                                ? e.target.files[0]
                                : null,
                            });
                            field.onChange(
                              e.target.files ? e.target.files[0] : null
                            );
                          }}
                        />
                      </>
                    )}
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={personalFileForm.control}
              name="cv"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    {files.cv ? (
                      <>
                        <div className="relative flex items-center justify-center">
                          <p>{files.cv.name}</p>
                          <Button
                            type="submit"
                            size={"sm"}
                            className="absolute top-0 right-0"
                            onClick={() => {
                              field.onChange(null);
                              setFiles({ ...files, cv: null });
                            }}
                          >
                            <X />
                          </Button>
                        </div>
                      </>
                    ) : (
                      <>
                        <FormLabel>CV</FormLabel>

                        <Input
                          type="file"
                          onChange={(e) => {
                            setFiles({
                              ...files,
                              cv: e.target.files ? e.target.files[0] : null,
                            });
                            field.onChange(
                              e.target.files ? e.target.files[0] : null
                            );
                          }}
                        />
                      </>
                    )}
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between float-right w-full">
              <Button onClick={handleBack}>Back</Button>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}

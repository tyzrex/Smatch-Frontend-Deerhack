"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  additionalInfoSchema,
  basicInfoSchema,
  companyInfoSchema,
  companyLogoSchema,
  companyRegisterSchema,
  hrInfoSchema,
} from "@/app/schema/auth/company-register-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormProgress } from "../from-progress";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const MAX_STEPS = 5;

export default function RegisterAsCompany() {
  const [step, setStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);
  const formSteps = [
    "Basic Info",
    "Company Info",
    "Company Logo",
    "Additional Info",
    "HR Info",
  ];

  const handleNext = async () => {
    if (step < MAX_STEPS) {
      setStep(step + 1);
    }
    // store all data in one object
    if (step === MAX_STEPS) {
      const basicInfo = basicInfoForm.getValues();
      const companyInfo = companyInfoForm.getValues();
      const companyLogo = companyLogoForm.getValues();
      const additionalInfo = additionalInfoForm.getValues();
      const hrInfo = hrForm.getValues();

      const data = {
        ...basicInfo,
        ...companyInfo,
        ...companyLogo,
        ...additionalInfo,
        ...hrInfo,
      };

      try {
        console.log("Data is being validated", data);
        await companyRegisterSchema.safeParseAsync(data);
        console.log("Data is valid", data);
      } catch (error) {
        console.error("Data is invalid", error);
      }
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const basicInfoForm = useForm<z.infer<typeof basicInfoSchema>>({
    resolver: zodResolver(basicInfoSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const companyInfoForm = useForm<z.infer<typeof companyInfoSchema>>({
    resolver: zodResolver(companyInfoSchema),
    defaultValues: {
      industry: "",
      address: "",
      founded: 2022,
    },
  });

  const companyLogoForm = useForm<z.infer<typeof companyLogoSchema>>({
    resolver: zodResolver(companyLogoSchema),
  });

  const additionalInfoForm = useForm<z.infer<typeof additionalInfoSchema>>({
    resolver: zodResolver(additionalInfoSchema),
    defaultValues: {
      employeeNumber: 1,
      description: "",
      website: "",
    },
  });

  const hrForm = useForm<z.infer<typeof hrInfoSchema>>({
    resolver: zodResolver(hrInfoSchema),
    defaultValues: {
      hrName: "",
      hrEmail: "",
    },
  });

  return (
    <>
      <FormProgress
        steps={MAX_STEPS}
        currentStep={step}
        formSteps={formSteps}
      />

      {step === 1 && (
        <Form {...basicInfoForm}>
          <form
            onSubmit={basicInfoForm.handleSubmit(handleNext)}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Basic Info</h1>

            <FormField
              control={basicInfoForm.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your company name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={basicInfoForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your company email" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={basicInfoForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your company password"
                      type="password"
                      {...field}
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
        <Form {...companyInfoForm}>
          <form
            onSubmit={companyInfoForm.handleSubmit(handleNext)}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Company Info</h1>

            <FormField
              control={companyInfoForm.control}
              name="industry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Industry</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your company industry"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={companyInfoForm.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your company adddress"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={companyInfoForm.control}
              name="founded"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Founded Year</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your company founded year"
                      type="number"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between">
              <Button type="button" onClick={handleBack}>
                Previous
              </Button>

              <Button type="submit">Next</Button>
            </div>
          </form>
        </Form>
      )}

      {step === 3 && (
        <Form {...companyLogoForm}>
          <form
            onSubmit={companyLogoForm.handleSubmit(handleNext)}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Company Logo</h1>

            <FormField
              control={companyLogoForm.control}
              name="logo"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    {file ? (
                      <>
                        <div className="relative flex items-center justify-center">
                          <Image
                            width={200}
                            height={200}
                            src={URL.createObjectURL(file)}
                            alt="logo"
                          />
                          <Button
                            type="submit"
                            size={"sm"}
                            className="absolute top-0 right-0"
                            onClick={() => {
                              field.onChange(null);
                              setFile(null);
                            }}
                          >
                            <X />
                          </Button>
                        </div>
                      </>
                    ) : (
                      <>
                        <FormLabel>Logo</FormLabel>
                        <Input
                          placeholder="Enter your company logo"
                          type="file"
                          onChange={(e) => {
                            field.onChange(
                              e.target.files ? e.target.files[0] : null
                            );
                            setFile(e.target.files ? e.target.files[0] : null);
                          }}
                        />
                      </>
                    )}
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between">
              <Button type="button" onClick={handleBack}>
                Previous
              </Button>

              <Button type="submit">Next</Button>
            </div>
          </form>
        </Form>
      )}

      {step === 4 && (
        <Form {...additionalInfoForm}>
          <form
            onSubmit={additionalInfoForm.handleSubmit(handleNext)}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Summary</h1>

            <FormField
              control={additionalInfoForm.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your company description"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={additionalInfoForm.control}
              name="employeeNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Size</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your company size" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={additionalInfoForm.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Website</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your company website"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-between">
              <Button type="button" onClick={handleBack}>
                Previous
              </Button>

              <Button type="submit">Next</Button>
            </div>
          </form>
        </Form>
      )}

      {step === 5 && (
        <Form {...hrForm}>
          <form
            onSubmit={hrForm.handleSubmit(handleNext)}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">HR Info</h1>

            <FormField
              control={hrForm.control}
              name="hrName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>HR Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your HR name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={hrForm.control}
              name="hrEmail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>HR Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your HR email" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-between">
              <Button type="button" onClick={handleBack}>
                Previous
              </Button>

              <Button type="submit">Next</Button>
            </div>
          </form>
        </Form>
      )}
    </>
  );
}

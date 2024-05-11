"use client";

import { Industry, addJobSchema, jobType } from "@/app/schema/company/add-job";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { cn, showErrorToasts } from "@/lib/utils";
import { createNewJob } from "@/app/_api/private/company-actions";
import { PlusCircleIcon } from "lucide-react";

export default function CreateJobPage() {
  const form = useForm<z.infer<typeof addJobSchema>>({
    resolver: zodResolver(addJobSchema),
    defaultValues: {
      title: "",
      jobCategory: Industry.IT,
      jobDescription: "",
      jobExperience: "",
      jobLocation: "",
      jobQualification: "",
      jobSalary: "",
      jobType: jobType.FullTime,
      requirements: [{ requirement: "" }],
      benefits: [
        {
          benefit: "",
        },
      ],
    },
  });

  const { fields, append } = useFieldArray({
    name: "requirements",
    control: form.control,
  });

  const addRequirement = () => {
    append({ requirement: "" });
  };

  const { fields: benefitsFields, append: appendBenefits } = useFieldArray({
    name: "benefits",
    control: form.control,
  });

  const addBenefit = () => {
    appendBenefits({ benefit: "" });
  };

  async function onSubmit(data: z.infer<typeof addJobSchema>) {
    console.log(data);
    const requirementsStrings = data.requirements.map(
      (item) => item?.requirement
    );

    // Convert benefits array of objects to array of strings
    const benefitsStrings = data.benefits.map((item) => item?.benefit);

    const newData = {
      ...data,
      requirements: requirementsStrings,
      benefits: benefitsStrings,
    };

    const response = await createNewJob(newData);
    console.log(response);
    if (response.success === true) {
      toast.success(response.message);
    } else {
      showErrorToasts(response.errorData);
    }
  }

  return (
    <>
      <main className="w-full container px-6 py-6 mx-auto">
        <h1 className="text-2xl font-bold mb-6">Create a new Job</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your job title" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="jobCategory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Category</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue>{field.value}</SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {Object.values(Industry).map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="jobDescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your job description"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="jobExperience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Experience</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue>{field.value}</SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {[
                          "1-2 years",
                          "2-3 years",
                          "3-5 years",
                          "5+ years",
                        ].map((experience) => (
                          <SelectItem key={experience} value={experience}>
                            {experience}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="jobLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Location</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your job location" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="jobQualification"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Qualification</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your job qualification"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="jobSalary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Salary</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your job salary" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="jobType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Type</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue>{field.value}</SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        {Object.values(jobType).map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col">
              {fields.map((field, index) => (
                <FormField
                  control={form.control}
                  key={field.id}
                  name={`requirements.${index}.requirement`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={cn(index !== 0 && "sr-only")}>
                        Requirements
                      </FormLabel>

                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <Button
                onClick={addRequirement}
                variant={"ghost"}
                className="rounded-full p-2 mt-2"
              >
                <PlusCircleIcon className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex flex-col">
              {benefitsFields.map((field, index) => (
                <FormField
                  control={form.control}
                  key={field.id}
                  name={`benefits.${index}.benefit`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={cn(index !== 0 && "sr-only")}>
                        Benefits
                      </FormLabel>

                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <Button
                onClick={addBenefit}
                variant={"ghost"}
                className="rounded-full p-2 mt-2"
              >
                <PlusCircleIcon className="h-6 w-6" />
              </Button>
            </div>

            <Button className="col-span-2" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </main>
    </>
  );
}

import { Button } from "@/components/ui/button";
import { JobData } from "@/types/reusable-types";

import { BriefcaseIcon, CheckIcon, ClockIcon } from "lucide-react";

export default function JobDetail({ data }: { data: JobData }) {
  return (
    <>
      <section className="bg-gray-100 py-12 md:py-20 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-[1fr_300px] md:gap-12">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                {data.title}
              </h1>
              <div className="mt-4 flex items-center space-x-4 text-gray-500 dark:text-gray-400">
                <span>{data.company.name}</span>
                <span className="hidden sm:inline">•</span>
                <span>{data.company.address}</span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <Button className="w-full">Apply for this job</Button>
              <div className="flex items-center gap-2 text-sm">
                <ClockIcon className="h-4 w-4" />
                <span>Posted 3 days ago</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <BriefcaseIcon className="h-4 w-4" />
                <span>
                  {data.jobType} • {data.jobLocation}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                Rs.
                <span>{data.jobSalary}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Job Description
              </h2>
              <div className="mt-6 space-y-6 text-gray-500 dark:text-gray-400">
                <p>{data.jobDescription}</p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Requirements
              </h2>
              <ul className="mt-6 space-y-4 text-gray-500 dark:text-gray-400">
                {data?.requirements?.map((requirement, idx: number) => (
                  <li className="flex items-start gap-2" key={idx}>
                    <CheckIcon className="h-5 w-5 flex-shrink-0 text-gray-900 dark:text-gray-50" />
                    <span>{requirement}</span>
                  </li>
                )) ?? "No requirements listed"}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 md:py-20 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Benefits</h2>
              <ul className="mt-6 space-y-4 text-gray-500 dark:text-gray-400">
                {data?.benefits?.map((benefit, idx: number) => (
                  <li className="flex items-start gap-2" key={idx}>
                    <CheckIcon className="h-5 w-5 flex-shrink-0 text-gray-900 dark:text-gray-50" />
                    <span>{benefit}</span>
                  </li>
                )) ?? "No benefits listed"}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                About {data.company.name}
              </h2>
              <div className="mt-6 space-y-4 text-gray-500 dark:text-gray-400">
                <p>{data.company.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

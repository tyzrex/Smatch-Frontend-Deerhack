import { DollarSignIcon, LocateIcon } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

interface JobCardProps {
  id: number;
  title: string;
  location: string;
  salary: string;
  jobType: string;
  companyName: string;
  companyLogo: string;
}

export default function JobCard({
  id,
  title,
  location,
  salary,
  jobType,
  companyName,
  companyLogo,
}: JobCardProps) {
  return (
    <>
      <Link prefetch={false} href={`/job/${id}`} key={id} className="w-full">
        <div className=" bg-white mt-10 hover:shadow-lg">
          <div className="relative rounded-lg lj-shadow px-2 md:px-6 py-5 flex items-center md:space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
            <div className="hidden sm:block flex-shrink-0 mb-2 md:mb-0 lg:absolute rounded-lg md:p-4 md:bg-white shadow md:-left-9">
              <img
                src={companyLogo}
                className="h-12 w-12 rounded-lg object-contain"
              />
            </div>
            <div className=" flex flex-col md:flex-row w-full">
              <div className="flex-1 min-w-0 px-2 md:pl-6 mb-2 md:mb-0 w-full">
                <span className="absolute inset-0" aria-hidden="true"></span>
                <p className="text-sm text-gray-500 truncate">{companyName}</p>
                <p className="text-lg font-bold text-gray-900">{title}</p>
                <p className="text-sm text-gray-500 truncate">
                  {jobType}
                  <span className="text-gray-500 flex items-center gap-2">
                    <LocateIcon size={16} />
                    {location}
                  </span>
                </p>
              </div>
              <div className="flex-none md:flex flex-col md:justify-end text-sm text-gray-500 px-2">
                <div className="flex-none md:flex sm:justify-end mb-4">
                  <div className="flex items-center mr-4 mb-1 md:mb-0 text-sm text-gray-500 truncate">
                    <DollarSignIcon size={16} />
                    {salary}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

import { DollarSignIcon, LocateIcon } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

interface JobCardProps {
  title: string;
  description: string;
  location: string;
  salary: string;
}

export default function JobCard({
  title,
  description,
  location,
  salary,
}: JobCardProps) {
  return (
    <>
      <Card className="flex flex-col md:flex-row justify-center items-center">
        <CardHeader>
          <CardTitle className="text-center md:text-left">{title}</CardTitle>
          <CardDescription className="text-left">{description}</CardDescription>
        </CardHeader>
        <CardHeader className="space-y-2">
          <div className="flex items-center space-x-2">
            <LocateIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {location}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <DollarSignIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {salary}
            </span>
          </div>
        </CardHeader>
        <CardHeader>
          <Button>Apply Now</Button>
        </CardHeader>
      </Card>
    </>
  );
}

"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

export type JobListColumns = {
  id: number;
  title: string;
  jobType: string;
  jobCategory: string;
  jobSalary: string;
};

export const jobDataColumns: ColumnDef<JobListColumns>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "jobType",
    header: "Job Type",
  },
  {
    accessorKey: "jobCategory",
    header: "Job Category",
  },
  {
    accessorKey: "jobSalary",
    header: "Salary",
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <div>
          <Link href={`/company/jobs/${row.original.id}`}>
            <span className="text-blue-500 cursor-pointer">View</span>
          </Link>
        </div>
      );
    },
  },
];

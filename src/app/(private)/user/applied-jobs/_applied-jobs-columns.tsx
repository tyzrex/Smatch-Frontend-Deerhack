"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

interface JobDTO {
  id: number;
  status: string;
  matchingPercentage: number;
  jobTitle: string;
  jobType: string;
  jobLocation: string;
}

// Define types for React Query table columns
export const appliedJobColumns: ColumnDef<JobDTO>[] = [
  {
    header: "ID",
    accessorKey: "id",
  },
  {
    header: "Status",
    accessorKey: "status",
  },
  {
    header: "Matching Percentage",
    accessorKey: "matchingPercentage",
  },
  {
    header: "Job Title",
    accessorKey: "title",
  },
  {
    header: "Type",
    accessorKey: "type",
  },
  {
    header: "Location",
    accessorKey: "location",
  },
  {
    header: "Actions",
    accessorKey: "id",
    cell: ({ row }) => (
      <Link href={`/user/applied-jobs/${row.original.id}`}>
        <p className="text-blue-500">View Status</p>
      </Link>
    ),
  },
];

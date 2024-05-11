"use client";

import { toast } from "sonner";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { showErrorToasts } from "@/lib/utils";
import { changeJobStatus } from "@/app/_api/private/company-actions";

const statusButtonConstants = {
  applied: "bg-blue-500",
  inreview: "bg-yellow-500",
  rejected: "bg-red-500",
  accepted: "bg-green-500",
} as const;

export default function Status({
  row,
}: {
  row: { original: { status: string; id: number } };
}) {
  const updateStatus = async (status: string) => {
    const response = await changeJobStatus({
      id: row.original.id,
      status: status,
    });
    if (response.success === true) {
      toast.success(response.message);
    } else {
      showErrorToasts(response.errorData);
    }
  };

  return (
    <>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>{row.original.status}</DropdownMenuTrigger>
          <DropdownMenuContent className="w-32">
            <DropdownMenuLabel>Change Status</DropdownMenuLabel>
            {Object.keys(statusButtonConstants).map((status, idx: number) => {
              return (
                <DropdownMenuItem
                  key={idx}
                  className="cursor-pointer"
                  onClick={() => updateStatus(status)}
                >
                  <div>{status}</div>
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}

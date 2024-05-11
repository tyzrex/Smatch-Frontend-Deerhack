"use client";

import { applyJob } from "@/app/_api/public/actions/user-actions";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { showErrorToasts } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function ApplyJob({ jobId }: { jobId: string }) {
  const router = useRouter();
  const apply = async (jobId: string) => {
    const response = await applyJob(jobId);

    if (response.success === true) {
      toast.success(response.message);
      router.push("/user/dashboard");
    } else {
      showErrorToasts(response.errorData);
    }
  };
  return <Button onClick={() => apply(jobId)}>Apply Now</Button>;
}

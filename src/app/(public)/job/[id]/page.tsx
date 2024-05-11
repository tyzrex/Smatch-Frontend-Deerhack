import { getJobDetail } from "@/app/_api/public/job/job-api";
import JobDetail from "@/components/job/job-detail";
import { Button } from "@/components/ui/button";
import { goTry } from "go-go-try";
import { BriefcaseIcon, CheckIcon, ClockIcon } from "lucide-react";

interface JobDetailPageProps {
  params: {
    id: string;
  };
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const [error, jobDetail] = await goTry(getJobDetail(params.id));

  if (error || !jobDetail) {
    return null;
  }

  console.log(jobDetail.data);

  return (
    <>
      <JobDetail data={jobDetail.data} />
    </>
  );
}

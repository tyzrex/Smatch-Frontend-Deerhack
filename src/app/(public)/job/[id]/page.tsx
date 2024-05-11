import { getJobDetail } from "@/app/_api/public/job/job-api";
import JobDetail from "@/components/job/job-detail";
import { goTry } from "go-go-try";

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

  console.log(jobDetail);

  return (
    <>
      <JobDetail />
    </>
  );
}

import { getAppliedJobStatus } from "@/app/_api/private/user";
import { FormProgress } from "@/components/from-progress";
import { JobStatusProgress } from "@/components/job-progress";
import { goTry } from "go-go-try";

interface JobStatusProps {
  params: {
    id: string;
  };
}

export enum StatusEnum {
  APPLIED = "applied",
  INREVIEW = "inreview",
  REJECTED = "rejected",
  ACCEPTED = "accepted",
}

export default async function JobStatus(props: JobStatusProps) {
  const [error, jobStatus] = await goTry(getAppliedJobStatus(props.params.id));

  if (error || !jobStatus) {
    return <div>Failed to fetch job status</div>;
  }

  return (
    <div className="mt-10">
      <h1 className="text-2xl font-semibold px-6 container">Job Status</h1>

      <div className="container mx-auto my-10">
        {/* some info about the job */}
        <div className="flex gap-4 justify-around">
          <div className="flex flex-col gap-2">
            <span className="text-lg font-semibold">Job Title</span>
            <span>{jobStatus.data.job.title}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-lg font-semibold">Job Type</span>
            <span>{jobStatus.data.job.jobType}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-lg font-semibold">Job Location</span>
            <span>{jobStatus.data.job.jobLocation}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-lg font-semibold">Matching Percentage</span>
            <span
              className={`${
                jobStatus.data.matchingPercentage > 80
                  ? "text-green-500"
                  : jobStatus.data.matchingPercentage > 60
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}
            >
              {jobStatus.data.matchingPercentage}
            </span>
          </div>
        </div>
      </div>

      <JobStatusProgress
        steps={4}
        formSteps={[
          StatusEnum.APPLIED,
          StatusEnum.INREVIEW,
          StatusEnum.REJECTED,
          StatusEnum.ACCEPTED,
        ]}
        currentStep={
          jobStatus.data.status === StatusEnum.APPLIED
            ? 1
            : jobStatus.data.status === StatusEnum.INREVIEW
            ? 2
            : jobStatus.data.status === StatusEnum.REJECTED
            ? 3
            : jobStatus.data.status === StatusEnum.ACCEPTED
            ? 4
            : 1
        }
      />
    </div>
  );
}

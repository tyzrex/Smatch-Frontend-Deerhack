import { getAllJobs } from "@/app/_api/private/company-api";
import { DataTable } from "@/components/data-table";
import { goTry } from "go-go-try";
import { appliedJobColumns } from "./_applied-jobs-columns";
import Pagination from "@/components/reusables/pagination";
import { getAppliedJobs } from "@/app/_api/private/user";

interface JobsPageProps {
  searchParams: {
    page: string;
  };
}

const limit = 10;

export default async function AppliedJobsPage(props: JobsPageProps) {
  const [error, allJobs] = await goTry(
    getAppliedJobs(
      props.searchParams.page
        ? {
            page: props.searchParams.page,
            limit: limit.toString(),
          }
        : { page: "1", limit: limit.toString() }
    )
  );

  if (error || !allJobs) {
    return <div>Failed to fetch jobs</div>;
  }

  console.log(allJobs);

  const total_pages = Math.ceil(allJobs.meta.length / limit);

  const mappedData = allJobs.data.map((job: any) => {
    return {
      id: job.id,
      status: job.status,
      title: job.job.title,
      type: job.job.jobType,
      location: job.job.jobLocation,
      matchingPercentage: job.matchingPercentage,
    };
  });

  console.log(mappedData);

  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-semibold px-6">Currently Applied Jobs</h1>
        <DataTable
          data={mappedData}
          columns={appliedJobColumns}
          searchColumn="title"
          goToLink="Add Jobs"
        />
        <Pagination
          currentPage={parseInt(props.searchParams.page || "1")}
          path="jobs"
          total_pages={total_pages}
          next={allJobs.meta.next !== null ? `page=${allJobs.meta.next}` : ""}
          previous={
            allJobs.meta.prev !== null ? `page=${allJobs.meta.prev}` : ""
          }
        />
      </div>
    </>
  );
}

import { getAllJobs } from "@/app/_api/private/company-api";
import { DataTable } from "@/components/data-table";
import { goTry } from "go-go-try";
import { jobDataColumns } from "./_jobs-columns";
import Pagination from "@/components/reusables/pagination";

interface JobsPageProps {
  searchParams: {
    page: string;
  };
}

const limit = 10;

export default async function JobsPage(props: JobsPageProps) {
  const [error, allJobs] = await goTry(
    getAllJobs(
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

  const total_pages = Math.ceil(allJobs.meta.length / limit);

  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-semibold px-6">Currently Opened Jobs</h1>
        <DataTable
          data={allJobs?.data}
          columns={jobDataColumns}
          addPage="company/jobs/create"
          searchColumn="title"
          navigator={true}
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

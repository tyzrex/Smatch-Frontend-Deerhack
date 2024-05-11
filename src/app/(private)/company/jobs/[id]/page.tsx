import { getAllJobs, getJobDetailbyId } from "@/app/_api/private/company-api";
import { DataTable } from "@/components/data-table";
import { goTry } from "go-go-try";
import Pagination from "@/components/reusables/pagination";

interface JobsPageProps {
  params: {
    id: string;
  };
  searchParams: {
    page: string;
  };
}

const limit = 10;

export default async function JobsDetail(props: JobsPageProps) {
  const [error, allJobs] = await goTry(
    getJobDetailbyId({
      jobId: props.params.id,
      page: props.searchParams.page ? props.searchParams.page : "1",
      limit: limit.toString(),
    })
  );

  if (error || !allJobs) {
    return <div>Failed to fetch jobs</div>;
  }

  console.log(allJobs);

  //   const total_pages = Math.ceil(allJobs.meta.length / limit);

  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-semibold px-6">Job Detail</h1>
        {/* <DataTable
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
        /> */}
      </div>
    </>
  );
}

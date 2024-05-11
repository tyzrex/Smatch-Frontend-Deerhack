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

  console.log(allJobs.data.users);

  //   const total_pages = Math.ceil(allJobs.meta.length / limit);

  return (
    <>
      <div className="p-6">
        <h1 className="text-2xl font-semibold px-6">Job Detail</h1>

        <table className="min-w-full divide-y divide-gray-200 mt-10">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                User Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                User Email
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Match Percentage
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {allJobs.data.users.map((user: any) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {user.user.name}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{user.user.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.matchingPercentage}%
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

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

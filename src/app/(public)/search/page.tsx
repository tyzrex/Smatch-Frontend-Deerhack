import JobCard from "@/components/reusables/job-card";
import { requestHandler } from "@/services/server-request";
import { goTry } from "go-go-try";

interface SearchProps {
  searchParams: {
    query: string;
  };
}

const getSearchResults = async (query: string) => {
  // Fetch search results
  const response = await requestHandler<any>(
    `jobs/job-search?search=${query}`,
    "GET",
    null
  );
  return response.data;
};

export default async function Page(props: SearchProps) {
  const [error, searchResults] = await goTry(
    getSearchResults(props.searchParams.query)
  );

  if (error || !searchResults) {
    return <div>Failed to fetch search results</div>;
  }

  console.log(searchResults);

  return (
    <section className="flex items-center flex-col py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="global-container">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Search for Jobs
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Showing search results for "{props.searchParams.query}"
          </p>
        </div>
        {searchResults.data.map((job: any) => (
          <JobCard
            key={job.id}
            title={job.title}
            id={job.id}
            location={job.jobLocation}
            salary={job.jobSalary}
            jobType={job.jobType}
            companyName={job.company.name}
            companyLogo={job.company.logo}
          />
        ))}
      </div>
    </section>
  );
}

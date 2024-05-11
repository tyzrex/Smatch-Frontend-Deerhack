import { getFeaturedJobs } from "@/app/_api/public/landing/landing-api";
import JobCard from "@/components/reusables/job-card";
import { goTry } from "go-go-try";

export default async function FeaturedJobsSection() {
  const [error, jobs] = await goTry(getFeaturedJobs({ page: 1, limit: 2 }));

  if (error || !jobs) {
    return null;
  }

  console.log(jobs);

  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="global-container">
          <div className="grid items-center justify-center gap-4 text-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Featured Jobs
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Check out some of the top job opportunities on Smatch.
              </p>
            </div>
            <div className="grid w-full gap-5 mt-5">
              <JobCard
                description="Looking for a talented marketing manager to join our team."
                location="New York, NY"
                salary="$80,000 - $100,000"
                title="Marketing Manager"
              />
              <JobCard
                description="Looking for a talented marketing manager to join our team."
                location="New York, NY"
                salary="$80,000 - $100,000"
                title="Marketing Manager"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

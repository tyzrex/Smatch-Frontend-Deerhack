import { getDashboardData } from "@/app/_api/private/company-api";
import { getUserDashboardData } from "@/app/_api/private/user";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { goTry } from "go-go-try";
import {
  BriefcaseIcon,
  ClipboardListIcon,
  UserCheckIcon,
  UsersIcon,
} from "lucide-react";

export enum JobStatus {
  APPLIED = "applied",
  INREVIEW = "inreview",
  REJECTED = "rejected",
  ACCEPTED = "accepted",
}

export default async function UserDashboard() {
  const [error, dashboardData] = await goTry(getUserDashboardData());

  if (error || !dashboardData) {
    return <div>Error</div>;
  }

  const jobStatusCounts = dashboardData.data.jobs.map((job: any) => {
    switch (job.status) {
      case JobStatus.APPLIED:
        return { status: JobStatus.APPLIED, count: parseInt(job.count) };
      case JobStatus.INREVIEW:
        return { status: JobStatus.INREVIEW, count: parseInt(job.count) };
      case JobStatus.REJECTED:
        return { status: JobStatus.REJECTED, count: parseInt(job.count) };
      case JobStatus.ACCEPTED:
        return { status: JobStatus.ACCEPTED, count: parseInt(job.count) };
      default:
        return { status: job.status, count: parseInt(job.count) };
    }
  });

  return (
    <main className="flex-1 bg-gray-100 p-6 dark:bg-gray-900">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
        {jobStatusCounts?.map((job: any, idx: number) => {
          return (
            <Card key={idx}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-xl font-medium">
                  {job.status.toUpperCase()} applications
                </CardTitle>
                <BriefcaseIcon className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{job.count}</div>
              </CardContent>
            </Card>
          );
        }) ?? "No related data"}
      </div>
    </main>
  );
}

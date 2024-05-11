import { getDashboardData } from "@/app/_api/private/company-api";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { goTry } from "go-go-try";
import {
  BriefcaseIcon,
  ClipboardListIcon,
  UserCheckIcon,
  UsersIcon,
} from "lucide-react";

export async function CompanyDashboard() {
  const [error, dashboardData] = await goTry(getDashboardData());

  if (error || !dashboardData) {
    return <div>Error</div>;
  }

  return (
    <main className="flex-1 bg-gray-100 p-6 dark:bg-gray-900">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Jobs</CardTitle>
            <BriefcaseIcon className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {dashboardData.data.totalJobs}
            </div>
            <p className="text-xs text-primary">+5.2% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Applications</CardTitle>
            <ClipboardListIcon className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {dashboardData.data.totalApplications}
            </div>
            <p className="text-xs text-primary">+15.3% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Active Candidates
            </CardTitle>
            <UsersIcon className="h-5 w-5 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {dashboardData.data.totalActiveEmployees}
            </div>
            <p className="text-xs text-primary">+12.1% from last month</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

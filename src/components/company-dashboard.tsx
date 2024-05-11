import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import {
  BarChartIcon,
  BriefcaseIcon,
  ClipboardListIcon,
  FileTextIcon,
  LayoutGridIcon,
  Package2Icon,
  SettingsIcon,
  UserCheckIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";

export function CompanyDashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex h-16 items-center justify-between border-b bg-white px-6 dark:border-gray-800 dark:bg-gray-950">
        <div className="flex items-center gap-6">
          <Link
            className="flex items-center gap-2 text-lg font-semibold"
            href="#"
          >
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Job Portal</span>
          </Link>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <Link
              className="hover:text-gray-900 dark:hover:text-gray-50"
              href="#"
            >
              Jobs
            </Link>
            <Link
              className="hover:text-gray-900 dark:hover:text-gray-50"
              href="#"
            >
              Candidates
            </Link>
            <Link
              className="hover:text-gray-900 dark:hover:text-gray-50"
              href="#"
            >
              Analytics
            </Link>
            <Link
              className="hover:text-gray-900 dark:hover:text-gray-50"
              href="#"
            >
              Settings
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button className="rounded-full" size="icon" variant="ghost">
            <img
              alt="Avatar"
              className="rounded-full"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 flex-col border-r bg-white p-6 dark:border-gray-800 dark:bg-gray-950 md:flex">
          <nav className="space-y-4">
            <div>
              <h3 className="mb-2 text-sm font-medium text-primary">Main</h3>
              <div className="grid gap-2">
                <Link
                  className="flex items-center gap-2 rounded-md py-2 px-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                  href="#"
                >
                  <LayoutGridIcon className="h-5 w-5 text-primary" />
                  Dashboard
                </Link>
                <Link
                  className="flex items-center gap-2 rounded-md py-2 px-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                  href="#"
                >
                  <BriefcaseIcon className="h-5 w-5 text-primary" />
                  Jobs
                </Link>
                <Link
                  className="flex items-center gap-2 rounded-md py-2 px-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                  href="#"
                >
                  <UsersIcon className="h-5 w-5 text-primary" />
                  Candidates
                </Link>
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium text-primary">
                Insights
              </h3>
              <div className="grid gap-2">
                <Link
                  className="flex items-center gap-2 rounded-md py-2 px-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                  href="#"
                >
                  <BarChartIcon className="h-5 w-5 text-primary" />
                  Analytics
                </Link>
                <Link
                  className="flex items-center gap-2 rounded-md py-2 px-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                  href="#"
                >
                  <FileTextIcon className="h-5 w-5 text-primary" />
                  Reports
                </Link>
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium text-primary">
                Settings
              </h3>
              <div className="grid gap-2">
                <Link
                  className="flex items-center gap-2 rounded-md py-2 px-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                  href="#"
                >
                  <UserIcon className="h-5 w-5 text-primary" />
                  Profile
                </Link>
                <Link
                  className="flex items-center gap-2 rounded-md py-2 px-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                  href="#"
                >
                  <SettingsIcon className="h-5 w-5 text-primary" />
                  Preferences
                </Link>
              </div>
            </div>
          </nav>
        </aside>
        <main className="flex-1 bg-gray-100 p-6 dark:bg-gray-900">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Jobs
                </CardTitle>
                <BriefcaseIcon className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,234</div>
                <p className="text-xs text-primary">+5.2% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Applications
                </CardTitle>
                <ClipboardListIcon className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12,345</div>
                <p className="text-xs text-primary">+15.3% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  Candidates Hired
                </CardTitle>
                <UserCheckIcon className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">234</div>
                <p className="text-xs text-primary">+8.2% from last month</p>
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
                <div className="text-2xl font-bold">3,456</div>
                <p className="text-xs text-primary">+12.1% from last month</p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

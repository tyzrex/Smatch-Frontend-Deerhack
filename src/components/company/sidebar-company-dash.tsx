import {
  BarChartIcon,
  BriefcaseIcon,
  FileTextIcon,
  LayoutGridIcon,
  SettingsIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";

export default function DashboardSidebarCompany() {
  return (
    <>
      <aside className="hidden w-64 flex-col border-r bg-white p-6 dark:border-gray-800 dark:bg-gray-950 md:flex fixed left-0 min-h-screen">
        <nav className="space-y-4">
          <div>
            <h3 className="mb-2 text-sm font-medium text-primary">Main</h3>
            <div className="grid gap-2">
              <Link
                className="flex items-center gap-2 rounded-md py-2 px-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                href="/company/dashboard"
                prefetch={false}
              >
                <LayoutGridIcon className="h-5 w-5 text-primary" />
                Dashboard
              </Link>
              <Link
                className="flex items-center gap-2 rounded-md py-2 px-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                href="/company/jobs/create"
                prefetch={false}
              >
                <BriefcaseIcon className="h-5 w-5 text-primary" />
                Create Jobs
              </Link>
              <Link
                className="flex items-center gap-2 rounded-md py-2 px-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
                href="/company/jobs"
                prefetch={false}
              >
                <BriefcaseIcon className="h-5 w-5 text-primary" />
                View Opened Jobs
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-medium text-primary">Settings</h3>
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
    </>
  );
}

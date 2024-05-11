import { Package2Icon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function DashboardNav() {
  return (
    <>
      <header className="flex h-16 items-center justify-between border-b bg-white px-6 dark:border-gray-800 dark:bg-gray-950 sticky top-0">
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
    </>
  );
}

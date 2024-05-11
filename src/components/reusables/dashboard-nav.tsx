import { Package2Icon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LogoutButton from "./logout";
import { auth } from "@/app/_api/private/auth";
import Image from "next/image";

export default async function DashboardNav() {
  const user = await auth();
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
          {user && (
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="rounded-full" size="icon" variant="ghost">
                    <Image
                      alt="User avatar"
                      className="rounded-full"
                      height={32}
                      src={`/api/images/${user.avatar}`}
                      style={{
                        aspectRatio: "32/32",
                        objectFit: "cover",
                      }}
                      width={32}
                    />
                    <span className="sr-only">User menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>
                    Welcome, {user.name}
                    <br />
                    <span className="text-xs text-gray-500">{user.email}</span>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Orders</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogoutButton />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

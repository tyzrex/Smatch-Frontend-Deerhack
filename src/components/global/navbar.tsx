import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import {
  HeartIcon,
  SearchIcon,
  ShoppingCartIcon,
  ChevronDown,
  CircleEqual,
} from "lucide-react";
import { Button } from "../ui/button";
import MobileMenu from "./mobile-menu";
import { auth } from "@/app/_api/private/auth";
import Image from "next/image";
import LogoutButton from "../reusables/logout";
import { CommandMenu } from "./command-chat";
export default async function Navbar() {
  const user = await auth();

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm dark:bg-gray-950">
        <div className="container mx-auto flex h-16 items-center justify-between px-8 md:px-6">
          <Link className="flex items-center gap-2" href="#">
            <CircleEqual className="h-6 w-6" />
            <p className="text-xl font-extrabold">
              <span className="text-primary">S</span>MATCH
            </p>
          </Link>
          <div className="hidden lg:block flex-1 max-w-md">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400" />
              <Input
                className="w-full rounded-md border border-gray-200 bg-gray-100 px-10 py-2 text-sm focus:border-gray-400 focus:bg-white focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-gray-50 dark:focus:border-gray-600"
                placeholder="Search for jobs..."
                type="search"
              />
            </div>
          </div>
          <nav className="hidden gap-4 md:flex">
            <Link
              className="text-sm font-medium hover:text-gray-900 dark:hover:text-gray-50"
              href="#"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              className="text-sm font-medium hover:text-gray-900 dark:hover:text-gray-50"
              href="#"
              prefetch={false}
            >
              About
            </Link>
            <Link
              className="text-sm font-medium hover:text-gray-900 dark:hover:text-gray-50"
              href="#"
              prefetch={false}
            >
              Privacy
            </Link>
            <Link
              className="text-sm font-medium hover:text-gray-900 dark:hover:text-gray-50"
              href="#"
              prefetch={false}
            >
              Contact
            </Link>
            <CommandMenu />
          </nav>
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center gap-2">
                <Button className="rounded-full" size="icon" variant="ghost">
                  <HeartIcon className="h-5 w-5" />
                  <span className="sr-only">Favorites</span>
                </Button>
                <Button className="rounded-full" size="icon" variant="ghost">
                  <ShoppingCartIcon className="h-5 w-5" />
                  <span className="sr-only">Cart</span>
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      className="rounded-full"
                      size="icon"
                      variant="ghost"
                    >
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
                      <span className="text-xs text-gray-500">
                        {user.email}
                      </span>
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
            ) : (
              <>
                <div className="hidden md:block">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="default" className="space-x-2 p-4">
                        <span>Register/Login</span>
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>
                        Register as Company or Applicant
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator />

                      <Link href="/register/user" prefetch={false}>
                        <DropdownMenuItem className="cursor-pointer">
                          Applicant Register Page
                        </DropdownMenuItem>
                      </Link>
                      <Link href="/register/company" prefetch={false}>
                        <DropdownMenuItem className="cursor-pointer">
                          Company Register Page
                        </DropdownMenuItem>
                      </Link>

                      <DropdownMenuSeparator />
                      <Link href="/login" prefetch={false}>
                        <DropdownMenuItem className="cursor-pointer">
                          Login
                        </DropdownMenuItem>
                      </Link>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </>
            )}
            <MobileMenu />
          </div>
        </div>
      </header>
    </>
  );
}

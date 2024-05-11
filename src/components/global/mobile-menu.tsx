import { ChevronDown, CircleEqual, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Button } from "../ui/button";
import { auth } from "@/app/_api/private/auth";

const navLinks = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "About",
    href: "#",
  },
  {
    title: "Privacy",
    href: "#",
  },
  {
    title: "Terms",
    href: "#",
  },
];

export default async function MobileMenu() {
  const user = await auth();
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Menu className="md:hidden h-8 w-8" />
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader className="text-left">
            <Link className="flex items-center gap-2" href="#">
              <CircleEqual className="h-6 w-6" />
              <p className="text-xl font-extrabold">
                <span className="text-primary">S</span>MATCH
              </p>
            </Link>
          </SheetHeader>
          <nav className="flex flex-col gap-8 mt-10">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                className="text-sm font-medium hover:text-gray-900 dark:hover:text-gray-50"
                href={link.href}
                prefetch={false}
              >
                {link.title}
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="default"
                  className="space-x-2 py-4 px-0 justify-start text-black"
                  variant={"ghost"}
                >
                  <span>Register/Login</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                  Register as Company or Applicant
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/register/user" prefetch={false}>
                    Applicant Register Page
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/register/company" prefetch={false}>
                    Company Register Page
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/login" prefetch={false}>
                    Login
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}

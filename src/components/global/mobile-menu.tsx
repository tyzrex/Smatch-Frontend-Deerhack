import { CircleEqual, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

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

export default function MobileMenu() {
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
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}

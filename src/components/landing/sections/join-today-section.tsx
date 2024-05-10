import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function JoinToday() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="global-container">
          <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Get Started
              </div>
              <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Join the Smatch community today
              </h2>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="#">
                  <Button>Sign Up</Button>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Stay Connected
              </div>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                Subscribe to our newsletter to stay up-to-date with the latest
                job opportunities, career advice, and platform updates.
              </p>
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input placeholder="Enter your email" type="email" />
                <Button type="submit">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

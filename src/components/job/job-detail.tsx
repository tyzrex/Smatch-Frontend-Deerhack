import { Button } from "@/components/ui/button";
import {
  BriefcaseIcon,
  CheckIcon,
  ClockIcon,
  DollarSignIcon,
} from "lucide-react";

export default function JobDetail() {
  return (
    <>
      <section className="bg-gray-100 py-12 md:py-20 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-[1fr_300px] md:gap-12">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Senior Frontend Engineer
              </h1>
              <div className="mt-4 flex items-center space-x-4 text-gray-500 dark:text-gray-400">
                <span>Acme Inc.</span>
                <span className="hidden sm:inline">•</span>
                <span>San Francisco, CA</span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <Button className="w-full">Apply for this job</Button>
              <div className="flex items-center gap-2 text-sm">
                <ClockIcon className="h-4 w-4" />
                <span>Posted 3 days ago</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <BriefcaseIcon className="h-4 w-4" />
                <span>Full-time</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <DollarSignIcon className="h-4 w-4" />
                <span>$120k - $150k</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Job Description
              </h2>
              <div className="mt-6 space-y-6 text-gray-500 dark:text-gray-400">
                <p>
                  We are looking for an experienced Frontend Engineer to join
                  our growing team. You will be responsible for building and
                  maintaining our web application, which is the core of our
                  business.
                </p>
                <p>
                  You will work closely with our design team to implement
                  pixel-perfect UI components and ensure a seamless user
                  experience. You will also collaborate with our backend
                  engineers to integrate your work with the API.
                </p>
                <p>
                  We are looking for someone who is passionate about frontend
                  development, has a strong understanding of modern JavaScript
                  frameworks (React, Vue, or Angular), and is committed to
                  writing clean, maintainable, and performant code.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Requirements
              </h2>
              <ul className="mt-6 space-y-4 text-gray-500 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 flex-shrink-0 text-gray-900 dark:text-gray-50" />
                  <span>
                    5+ years of experience in frontend development, with a
                    strong understanding of JavaScript, HTML, and CSS.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 flex-shrink-0 text-gray-900 dark:text-gray-50" />
                  <span>
                    Proficient in at least one modern JavaScript framework
                    (React, Vue, or Angular).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 flex-shrink-0 text-gray-900 dark:text-gray-50" />
                  <span>
                    Experience with responsive design and cross-browser
                    compatibility.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 flex-shrink-0 text-gray-900 dark:text-gray-50" />
                  <span>
                    Strong problem-solving skills and the ability to work
                    independently.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 flex-shrink-0 text-gray-900 dark:text-gray-50" />
                  <span>
                    Familiarity with modern frontend tooling (Webpack, Babel,
                    ESLint, etc.).
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 md:py-20 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Benefits</h2>
              <ul className="mt-6 space-y-4 text-gray-500 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 flex-shrink-0 text-gray-900 dark:text-gray-50" />
                  <span>Competitive salary and equity</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 flex-shrink-0 text-gray-900 dark:text-gray-50" />
                  <span>
                    Comprehensive health, dental, and vision insurance
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 flex-shrink-0 text-gray-900 dark:text-gray-50" />
                  <span>401(k) retirement plan with employer matching</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 flex-shrink-0 text-gray-900 dark:text-gray-50" />
                  <span>Generous paid time off and holidays</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="h-5 w-5 flex-shrink-0 text-gray-900 dark:text-gray-50" />
                  <span>
                    Professional development and learning opportunities
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                About Acme Inc.
              </h2>
              <div className="mt-6 space-y-4 text-gray-500 dark:text-gray-400">
                <p>
                  Acme Inc. is a leading technology company that specializes in
                  building innovative web applications. We are a fast-growing
                  startup with a mission to revolutionize the way people
                  interact with the digital world.
                </p>
                <p>
                  Our team is composed of talented and passionate individuals
                  who are dedicated to creating exceptional user experiences. We
                  believe in fostering a collaborative and inclusive work
                  environment where everyone can thrive and contribute to our
                  success.
                </p>
                <p>
                  If you&apos;re excited to join a dynamic and forward-thinking
                  organization, we&apos;d love to hear from you. Apply now and
                  let&apos;s build something amazing together!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

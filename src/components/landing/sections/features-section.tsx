import { ActivityIcon, AppWindowIcon, AppleIcon } from "lucide-react";

export default function FeaturesSection() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-4">
            <div className="grid gap-1">
              <AppleIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
              <h3 className="text-lg font-bold">AI-powered recommendations</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our AI algorithm analyzes your profile and job preferences to
                provide personalized job recommendations.
              </p>
            </div>
            <div className="grid gap-1">
              <AppWindowIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
              <h3 className="text-lg font-bold">Streamlined applications</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Apply to multiple jobs with a single click using our
                pre-populated application forms.
              </p>
            </div>
            <div className="grid gap-1">
              <ActivityIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
              <h3 className="text-lg font-bold">
                Personalized career coaching
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Get expert advice and guidance to help you navigate your career
                journey.
              </p>
            </div>

            <div className="grid gap-1">
              <AppleIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
              <h3 className="text-lg font-bold">AI-powered recommendations</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our AI algorithm analyzes your profile and job preferences to
                provide personalized job recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

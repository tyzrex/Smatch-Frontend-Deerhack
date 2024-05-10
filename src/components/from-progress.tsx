import { Progress } from "@/components/ui/progress";
import { ChevronRight } from "lucide-react";

export function FormProgress({
  steps,
  currentStep,
  formSteps,
}: {
  steps: number;
  currentStep: number;
  formSteps: string[];
}) {
  return (
    <div className="container mx-auto">
      <div className="space-y-8">
        <div>
          <Progress className="mb-6" value={(currentStep / steps) * 100} />
          <div className="flex items-center justify-between">
            <div className="w-full flex flex-wrap items-center justify-center gap-2 ">
              {formSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium dark:bg-gray-800">
                    <div
                      className={`h-2 w-2 ${
                        currentStep === index + 1 ? "bg-primary" : "bg-gray-300"
                      } rounded-full`}
                    />
                    <span className="ml-2">{step}</span>
                  </div>
                  {index !== formSteps.length - 1 && (
                    <ChevronRight
                      className={`h-5 w-5 text-gray-300 dark:text-gray-400 ${
                        currentStep === index + 1
                          ? "text-primary"
                          : "text-gray-300"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

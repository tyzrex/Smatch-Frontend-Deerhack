import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { toast } from "sonner"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function showErrorToasts(errors: string) {
  if (!errors) {
    return;
  }
  
  const errorMessages = errors.split('|').map((error) => error.trim());
  errorMessages.forEach((error) => {
    toast.error(error);
  });
}
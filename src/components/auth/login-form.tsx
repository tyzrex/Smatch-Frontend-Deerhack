"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/app/schema/auth/login-schema";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      type: "user",
    },
  });

  async function onSubmit(data: z.infer<typeof loginSchema>) {
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      type: data.type,
      redirect: false,
      callbackUrl: "/",
    });

    if (response && response?.error === null) {
      toast.success("Login Success");
      if (data.type === "company") {
        router.push("/company/dashboard");
      } else {
        router.push("/");
      }
    } else {
      toast.error(response?.error ?? "Invalid credentials");
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
              <FormControl>
                <select
                  {...field}
                  className="
                    w-full
                    px-3
                    py-2
                    border
                    border-gray-300
                    focus:outline-none
                    focus:ring-indigo-500
                    focus:border-indigo-500
                    sm:text-sm
                    rounded-md
                "
                >
                  <option value="user">User</option>
                  <option value="company">Company</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?
        <Link className="underline" href="#">
          Sign up
        </Link>
      </div>
    </Form>
  );
}

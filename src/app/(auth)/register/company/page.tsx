// import { RegisterForm } from "../_components/register-form";

import RegisterAsCompany from "@/components/auth/regitster-company";

export default function Page() {
  return (
    <main>
      <div className="w-full xl:grid xl:grid-cols-2 min-h-screen ">
        <div className="hidden bg-muted lg:block">
          <img
            alt="Image"
            className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            height="1080"
            src="/company.jpeg"
            style={{
              aspectRatio: "1920/1080",
              objectFit: "cover",
            }}
            width="1920"
          />
        </div>
        <div className="flex items-center justify-center py-12">
          <div className="container mx-auto grid lg:px-40 gap-6">
            <div className="grid gap-2 text-center">
              <h1 className="text-3xl font-bold">
                Register to SMATCH as a Company
              </h1>
              <p className="text-balance text-muted-foreground">
                Enter your email below to register a new account
              </p>
            </div>

            <RegisterAsCompany />
          </div>
        </div>
      </div>
    </main>
  );
}

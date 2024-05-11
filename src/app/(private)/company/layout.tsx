import { auth } from "@/app/_api/private/auth";
import DashboardSidebarCompany from "@/components/company/sidebar-company-dash";
import DashboardNav from "@/components/reusables/dashboard-nav";
import { redirect } from "next/navigation";

export default async function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await auth();

  if (!user) {
    redirect("/login?callbackUrl=/company/dashboard");
  }

  if (user.type !== "company") {
    redirect("/?error=unauthorized");
  }

  return (
    <>
      <DashboardNav />
      <div className="flex min-h-screen">
        <DashboardSidebarCompany />
        <div className="md:ml-64 w-full">{children}</div>
      </div>
    </>
  );
}

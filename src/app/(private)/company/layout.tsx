import { auth } from "@/app/_api/private/auth";
import DashboardNav from "@/components/reusables/dashboard-nav";
import DashboardUserSidebar from "@/components/user/user-sidebar";
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
        <DashboardUserSidebar />
        <div className="md:ml-64 w-full">{children}</div>
      </div>
    </>
  );
}

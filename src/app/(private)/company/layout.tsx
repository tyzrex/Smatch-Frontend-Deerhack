import { auth } from "@/app/_api/private/auth";
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

  return <>{children}</>;
}

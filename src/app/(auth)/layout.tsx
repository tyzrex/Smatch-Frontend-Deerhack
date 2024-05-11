import { redirect } from "next/navigation";
import { auth } from "../_api/private/auth";

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await auth();

  if (user) {
    redirect("/");
  }

  return <>{children}</>;
}

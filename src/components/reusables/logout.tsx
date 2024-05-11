"use client";

import { signOut } from "next-auth/react";
import { Button } from "../ui/button";

export default function LogoutButton() {
  return (
    <>
      <Button className="p-0 h-4" onClick={() => signOut()} variant={"ghost"}>
        Logout
      </Button>
    </>
  );
}

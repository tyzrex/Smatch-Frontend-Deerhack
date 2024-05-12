"use client";

import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchNav() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(search);
          router.push(`/search?query=${search}`);
        }}
      >
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 dark:text-gray-400" />
        <Input
          className="w-full rounded-md border border-gray-200 bg-gray-100 px-10 py-2 text-sm focus:border-gray-400 focus:bg-white focus:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-gray-50 dark:focus:border-gray-600"
          placeholder="Search for jobs..."
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </>
  );
}

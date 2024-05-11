"use client";

import * as React from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Image from "next/image";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { getQueryAnswer } from "@/app/_api/public/actions/auth-actions";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [chatHistory, setChatHistory] = React.useState({
    myMessage: "",
    botMessage: "",
  });
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "g" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleCommandSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query) return;
    setLoading(true);

    const response = await getQueryAnswer(query);
    if (response.success) {
      toast.success(response.message);
      console.log("Response: ", response.data);
      setChatHistory((prev) => ({
        myMessage: query,
        botMessage: response.data.data.response,
      }));
      setQuery("");
      setLoading(false);
    } else {
      toast.error(response.errorData);
    }
  };

  console.log("Chat History: ", chatHistory);

  return (
    <>
      <CommandShortcut>Ctrl + G for chat</CommandShortcut>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="flex justify-between items-center mt-10 container">
          <Image src={"/robo.png"} alt="robot" width={50} height={50} />

          <p className="text-lg font-bold">
            Hi, I'm SmatchBot. How can I help you?
          </p>
        </div>
        <div>
          <form
            className="flex items-center justify-between px-6 container gap-10 py-10 border-none focus:border-none"
            onSubmit={handleCommandSubmit}
          >
            <Input
              placeholder="Enter your query..."
              className="relative "
              name="query"
              value={query}
              disabled={loading}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button type="submit">Ask</Button>
          </form>
        </div>

        <CommandList>
          {/* <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup> */}
          {/* typing animation till loading */}

          {loading ? (
            <CommandItem className="container px-6">Typing...</CommandItem>
          ) : null}

          {chatHistory.myMessage && chatHistory.botMessage && !loading ? (
            <>
              <div className="container">
                <CommandItem>
                  <div className="flex items-center gap-2">
                    <User />
                    <p>{chatHistory.myMessage}</p>
                  </div>
                </CommandItem>
                <CommandItem>
                  <div className="flex items-center gap-2">
                    <Image
                      src={"/robo.png"}
                      alt="robot"
                      width={30}
                      height={30}
                    />
                    <p>{chatHistory.botMessage}</p>
                  </div>
                </CommandItem>
              </div>
            </>
          ) : (
            <>
              <CommandEmpty>No results found.</CommandEmpty>
            </>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}

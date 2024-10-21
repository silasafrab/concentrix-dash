// components/Header.tsx
"use client";

import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "../ui/avatar";
import { ModeToggle } from "../ui/ModeToggle";
import { Logo } from "../primitives/Logo";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useUser } from "@/contexts/UserContext";

export const Header = () => {
  const { push } = useRouter();
  const { userData, clearUserData } = useUser();

  const handleClearLocalStorage = () => {
    localStorage.clear();
    clearUserData();
    push("/");
  };

  return (
    <header className="bg-[#003D5B] py-4  md:py-8">
      <nav className="flex justify-between container items-center">
        <Logo />
        <div className="flex gap-4 items-center">
          {userData && (
            <div className="flex gap-4 items-center">
              <p className="text-sm font-bold text-gray-50 hidden md:flex">
                {userData.name}
              </p>
              <Avatar>
                <AvatarImage src={userData.avatar_url} />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Button
                className="text-gray-50 hover:bg-gray-200/20 hidden md:flex"
                size="icon"
                variant={"ghost"}
                onClick={handleClearLocalStorage}
              >
                <LogOut />
              </Button>
            </div>
          )}
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

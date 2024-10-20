"use client";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "../ui/avatar";
import { ModeToggle } from "../ui/ModeToggle";
import { Logo } from "../primitives/Logo";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export const Header = () => {
  const { push } = useRouter();

  const [userData, setUserData] = useState<{
    avatar_url: string;
    name: string;
  } | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("githubUser");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  const handleClearLocalStorage = () => {
    localStorage.clear();
    setUserData(null);
    push("/");
  };

  return (
    <header className="bg-secondary py-8">
      <nav className="flex justify-between container  items-center">
        <Logo />
        <div className="flex gap-4 items-center">
          {userData !== null && (
            <div className="flex gap-4 items-center">
              <p className="text-sm font-bold text-gray-50">{userData?.name}</p>
              <Avatar>
                <AvatarImage src={userData?.avatar_url} />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Button
                className="text-gray-50 hover:bg-gray-200/20"
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

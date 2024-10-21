"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { checkGitHubUsername } from "@/services/githubService";

interface User {
  avatar_url: string;
  name: string;
}

interface UserContextType {
  userData: User | null;
  checkUsername: (username: string) => Promise<boolean>;
  clearUserData: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = Cookies.get("githubUser");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  const checkUsername = async (username: string): Promise<boolean> => {
    const isValid = await checkGitHubUsername(username);
    if (isValid) {
      const storedUser = Cookies.get("githubUser");
      if (storedUser) {
        setUserData(JSON.parse(storedUser));
      }
    }
    return isValid;
  };

  const clearUserData = () => {
    Cookies.remove("githubUser");
    setUserData(null);
  };

  return (
    <UserContext.Provider value={{ userData, checkUsername, clearUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

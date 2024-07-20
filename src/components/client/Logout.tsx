"use client";
import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

const Logout = () => {
  return (
    <Button
      variant={"destructive"}
      onClick={async () => {
        console.log("Logout");
        await signOut();
      }}
    >
      Logout
    </Button>
  );
};

export default Logout;

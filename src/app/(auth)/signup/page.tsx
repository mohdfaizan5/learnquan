import React from "react";
import SignUpForm from "./SignUpForm";
import { getUser } from "@/lib/lucia";
import { redirect } from "next/navigation";

const page = async () => {
  const user = await getUser();
  if (user) redirect("/home");
  return (
    <div className="flex flex-col items-center justify-center">
      
      <h1>Signup</h1>
      <SignUpForm />
    </div>
  );
};

export default page;

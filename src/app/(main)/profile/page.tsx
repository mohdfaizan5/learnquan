import { getUser } from "@/lib/lucia";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const user = await getUser();
  if (!user) redirect("/login");
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
      <h2>{user.email}</h2>
    </div>
  );
};

export default page;

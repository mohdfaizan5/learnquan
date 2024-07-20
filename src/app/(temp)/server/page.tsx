import { auth } from "@/auth";
import React from "react";

const page = async () => {
  const session = await auth();
  console.log("😅😅from server logging session", session);

  return <div>{session && <div>{`${session.toString()}`}</div>}</div>;
};

export default page;

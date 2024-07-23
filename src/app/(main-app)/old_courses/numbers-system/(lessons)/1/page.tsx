"use client"
import { Button } from "@/components/ui/button";
import React from "react";
import "@/styles/typography.css";
import Image from "next/image";
import Link from "next/link";
// import { lessonCompletedAction } from "@/actions/course.action";
// import { useSession } from "next-auth/react";

const Page = () => {
  // const session = useSession();
  return (
    <div className="flex flex-col pt-20 items-center max-w-[30rem] mx-auto px-5 gap-2 ">
      <Image src={"/svgs/abstract-art-6.svg"} height={200} width={300} alt="" />
      <h2 className="font-bold mt-1">Welcome to Number System</h2>
      {/* <p className="mt-1 mb-2">
        What is Number&apos;
      </p> */}

      <Link className="w-full my-5" href={"2"}>
        <Button
          className="w-full mb-10"
          onClick={() => {
            // lessonCompletedAction("1");
            console.log("hi");
          }}
        >
          Start Lesson
        </Button>
      </Link>
    </div>
  );
};

export default Page;

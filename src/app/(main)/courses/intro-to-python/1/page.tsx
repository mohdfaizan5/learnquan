import { Button } from "@/components/ui/button";
import React from "react";
import "@/styles/typography.css";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex flex-col pt-20 items-center max-w-[30rem] mx-auto px-5 gap-2 ">
      <Image
        src={"/lessons/intro-to-python/Lesson_1_Bookend_3-B5oO8u.png"}
        height={200}
        width={300}
        alt=""
      />
      <h1 className="font-bold text-3xl mt-1">Welcome to Python</h1>
      <p className="mt-1 mb-2">
        We can begin to harness the power of Python programming with just a few
        ideas. Let's jump in
      </p>

      <Link className="w-full my-5" href={"2"}>
        <Button className="w-full mb-10">Start Lesson</Button>
      </Link>
    </div>
  );
};

export default page;

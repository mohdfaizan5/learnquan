import { Button } from "@/components/ui/button";
import { Star } from "iconsax-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        className="animate-pulse"
        src={"/svgs/cute-smiling-cat.svg"}
        height={200}
        width={200}
        alt="happy"
      />
      <h2 className="text-center">
        Lesson <br /> Complete!
      </h2>
      <p className="font-light text-xs">Total XP</p>
      <h1 className="text-center flex items-center gap-2">
        40
        <Star className="text-green-700" />
      </h1>
      <Button className="w-52 mt-20">Continue</Button>
    </div>
  );
};

export default page;

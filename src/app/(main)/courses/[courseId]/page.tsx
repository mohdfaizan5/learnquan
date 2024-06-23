import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Award } from "iconsax-react";
import React from "react";

const page = () => {
  return (
    <main className="px-10 md:px-28 mt-20 flex justify-end">
      <section className="fixed left-20 mt-10">
        <EachBigCard />
      </section>
      <section className="md:w-[50vw] h-[200vh] bg-slate-200 ">
        <BoxTypedButton>Lesson 1</BoxTypedButton>
      </section>
    </main>
  );
};
const EachBigCard = () => {
  return (
    <Card className="w-96 md:w-[450px] h-72 flex flex-col items-start justify-between p-5 py-7 hover:border-slate-800">
      <CardContent className="p-0">
        <Image
          src={"/svgs/surreal-hourglass.svg"}
          alt=""
          width={120}
          height={120}
        />
      </CardContent>
      <CardHeader className="p-0">
        <h2 className="text-lg">Solving Equations</h2>
        <div className="text-sm p-0">
          <h5 className="p-0">
            Stretch your analytic muscles with truth-tellers, liars, logical
            robots, and more.
          </h5>
        </div>
        <p className="justify-end font-extralight text-sm flex items-center">
          <Award size="18" color="#000000" variant="Bulk" />
          14 lesson
        </p>
      </CardHeader>
    </Card>
  );
};

const BoxTypedButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="relative inline-block px-4 py-2 font-medium group">
      <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full bg-white border-2 border-primary group-hover:bg-primary"></span>
      <span className="relative text-primary group-hover:text-white">
        {children}
      </span>
    </button>
  );
};

export default page;

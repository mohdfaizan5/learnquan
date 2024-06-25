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
import Link from "next/link";

const page = () => {
  return (
    <main className="px-5 md:px-28 mt-20 flex flex-col md:flex-row justify-end">
      <section className="md:fixed md:left-36 md:mt-16">
        <EachBigCard />
      </section>
      <section className="md:w-[50vw] flex flex-col items-center min-h-[100vh] bg-slate-200/0 gap-2 py-10">
        <BoxTypedButton className="ml-[0%]">Lesson 1</BoxTypedButton>
        <BoxTypedButton className="mr-[0%]">Lesson 2</BoxTypedButton>
        <BoxTypedButton className="ml-[0%]">Lesson 3</BoxTypedButton>
        <BoxTypedButton className="ml-[0%]">Lesson 4</BoxTypedButton>
        <BoxTypedButton className="ml-[0%]">Lesson 5</BoxTypedButton>
        <BoxTypedButton className="ml-[0%]" tail={false}>
          Lesson 6
        </BoxTypedButton>
      </section>
    </main>
  );
};
const EachBigCard = () => {
  return (
    <Card className="w-96 md:w-[450px] h-72 flex flex-col items-start justify-between p-5 py-7 hover:border-slate-800">
      <CardContent className="p-0 flex justify-between w-full items-start">
        <Image
          src={"/lessons/intro-to-python/Lesson_1_Bookend_3-B5oO8u.png"}
          alt=""
          width={100}
          height={100}
        />
        <p className="justify-end font-extralight text-sm flex items-center">
          <Award size="18" color="#000000" variant="Bulk" />
          14 lesson
        </p>
      </CardContent>
      <CardHeader className="p-0 mt-2">
        <h2 className="font-semibold text-lg">Python</h2>
        <div className="text-sm p-0">
          <h5 className="p-0">
            Stretch your analytic muscles with truth-tellers, liars, logical
            robots, and more.
          </h5>
        </div>
      </CardHeader>
    </Card>
  );
};

const BoxTypedButton = ({
  children,
  className,
  tail = true,
}: {
  children: React.ReactNode;
  className?: string;
  tail?: boolean;
}) => {
  return (
    <>
      <Link href={"/courses/intro-to-python/1"}>
        <button
          className={`relative inline-block px-4 py-2 font-medium group ${className}`}
        >
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-primary group-hover:bg-primary"></span>
          <span className="relative text-primary group-hover:text-white">
            {children}
          </span>
        </button>
      </Link>
      {tail && <span className="w-1 h-5 bg-primary"></span>}
    </>
  );
};

export default page;

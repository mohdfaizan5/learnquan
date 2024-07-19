import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Award } from "iconsax-react";
import React from "react";
import Link from "next/link";
import { IoCaretDownCircleOutline } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export const tableOfContext = [
  {
    module: 1,
    title: "Types of Number System",
    concepts: [
      {
        subModule: 1.1,
        title: "Psedu code",
      },
      {
        subModule: 1.2,
        title: "Basic Concepts of C program",
      },
      {
        subModule: 1.3,
        title: "Data Types,",
      },
      {
        subModule: 1.4,
        title: "Operators",
      },
      {
        subModule: 1.5,
        title: "Expressions",
      },
    ],
  },
  {
    module: 2,
    title: "Percentages",
    concepts: [
      {
        subModule: 2.1,
        title: "Psedu code",
      },
      {
        subModule: 2.2,
        title: "Basic Concepts of C program",
      },
      {
        subModule: 2.3,
        title: "Data Types,",
      },
      {
        subModule: 2.4,
        title: "Operators",
      },
      {
        subModule: 2.5,
        title: "Expressions",
      },
    ],
  },
  {
    module: 3,
    title: "Fractions",
    concepts: [
      {
        subModule: 3.1,
        title: "Psedu code",
      },
      {
        subModule: 3.2,
        title: "Basic Concepts of C program",
      },
      {
        subModule: 3.3,
        title: "Data Types,",
      },
      {
        subModule: 3.4,
        title: "Operators",
      },
      {
        subModule: 3.5,
        title: "Expressions",
      },
    ],
  },
  {
    module: 4,
    title: "STRUCTURES AND FILE MANAGEMENT",
    concepts: [
      {
        subModule: 4.1,
        title: "Psedu code",
      },
      {
        subModule: 4.2,
        title: "Basic Concepts of C program",
      },

      {
        subModule: 4.4,
        title: "Operators",
      },
      {
        subModule: 4.5,
        title: "Expressions",
      },
    ],
  },
  {
    module: 5,
    title: "POINTERS, PREPROCESSORS & DATA STRUCTURES",
    concepts: [
      {
        subModule: 5.1,
        title: "Psedu code",
      },
      {
        subModule: 5.2,
        title: "Basic Concepts of C program",
      },
      {
        subModule: 5.3,
        title: "Data Types,",
      },
      {
        subModule: 5.4,
        title: "Operators",
      },
    ],
  },
];

const page = () => {
  return (
    <main className="  mt-20 flex flex-col md:flex-row justify-end">
      <section className="md:fixed md:left-36 md:mt-16">
        <EachBigCard />
      </section>
      <section className="md:w-[50vw] flex flex-col items-start min-h-[100vh] bg-slate-200/0 gap-2 py-10">
        <h2 className="mb-6">Table of Content</h2>
        {tableOfContext.map((lesson, i) => (
          <BoxTypedButton
            key={i}
            concepts={lesson.concepts}
            className="ml-[0%] "
          >
            M{lesson.module} : {lesson.title}
          </BoxTypedButton>
        ))}
        {/* 
        <BoxTypedButton className="ml-[0%]" tail={false}>
          Lesson 6
        </BoxTypedButton> */}
      </section>
    </main>
  );
};
const EachBigCard = () => {
  return (
    <Card className="w-96 md:w-[450px] h-72 flex flex-col items-start justify-between p-5 py-7 hover:border-slate-800">
      <CardContent className="p-0 flex justify-between w-full items-start">
        <div className="relative">
          <Image
            src={"/lessons/numbers-system/genius.svg"}
            alt=""
            width={100}
            className="relative"
            height={100}
          />

          {/* <h1 className="absolute top-16 bg-white text-xl right-8 ">Numbers</h1> */}
        </div>
        <p className="justify-end font-extralight text-sm flex items-center">
          <Award size="18" color="#000000" variant="Bulk" />
          14 lesson
        </p>
      </CardContent>
      <CardHeader className="p-0 mt-2">
        <h2 className="font-semibold text-lg">Numbers System</h2>
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
  concepts,
}: {
  children: React.ReactNode;
  className?: string;
  tail?: boolean;
  concepts: {
    subModule: number;
    title: string;
  }[];
}) => {
  return (
    <>
      <button
        className={`relative inline-block px-4 py-2 font-medium group ${className}`}
      >
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-primary group-hover:bg-primary"></span>
        <span className="relative text-primary group-hover:text-white flex items-center gap-3">
          <Link href={"/courses/numbers-system/1"}>{children}</Link>
          {/* <IoCaretDownCircleOutline /> */}
        </span>
      </button>
      <div className="hidden md:flex overflow-x-hidden ml-16 mb-2 ">
        {tail && <span className="w-1 h-7 bg-primary"></span>}
        {concepts.length > 0 && (
          <div className=" mt-2 flex  gap-1">
            {concepts.map((concept, i) => (
              <div className="flex items-center" key={i}>
                <span className="w-5 h-1 bg-primary"></span>
                <Button className="" variant={"default"}>
                  {concept.subModule}
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default page;

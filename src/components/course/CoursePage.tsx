import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Award } from "iconsax-react";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CoursePageDisplayCard = ({
  image,
  title,
  description,
}: {
  image?: string;
  title: string;
  description: string;
}) => {
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
        <h2 className="font-semibold text-3xl">{title}</h2>

        <h5 className="p-0 text-sm text-black/80">{description}</h5>
      </CardHeader>
    </Card>
  );
};

const TableOfContentBox = ({
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
  {
    /* 
        <BoxTypedButton className="ml-[0%]" tail={false}>
          Lesson 6
        </BoxTypedButton> */
  }
};
export { CoursePageDisplayCard, TableOfContentBox };

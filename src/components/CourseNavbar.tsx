"use client";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Add, ArrowLeft, ArrowRight, HambergerMenu } from "iconsax-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { Button } from "./ui/button";
import Link from "next/link";
import { useTableOfContentState } from "@/store/tableOfContent";

const CourseNavbar = () => {
  const lessons = useTableOfContentState((state) => state.lessons);
  console.log("lessons", lessons);
  return (
    <header
      className="fixed top-0 left-0 right-0 bg-white py-4 border-b flex justify-between px-16 items-center "
      style={{ zIndex: 100 }}
    >
      <div className="flex gap-10 items-center">
        {/* Add a confirmation message to before exiting (:TODO) */}
        <Link href={"/courses"}>
          <Add
            className="rotate-45"
            size="40"
            color="#000000"
            variant="Outline"
          />
        </Link>
      </div>
      <nav className="text-black text-sm hidden md:flex gap-5 items-center">
        {/* <Link href={"/courses"} className="flex items-center gap-1">
          <ArrowLeft />
        </Link> */}
        <TooltipProvider>
          <div className=" bg-gray-200 rounded-full flex gap-1 h-2.5">
            {lessons.map((lesson, i) => {
              if (lesson.isCompleted) {
                return (
                  <Link href={lesson.href} className="block" key={i}>
                    <Tooltip>
                      <TooltipTrigger className="bg-green-500  w-20 h-2.5 rounded-full"></TooltipTrigger>
                      <TooltipContent>
                        <p>Chapter 1</p>
                      </TooltipContent>
                    </Tooltip>
                  </Link>
                );
              } else {
                return (
                  <Tooltip key={i}>
                    <TooltipTrigger className="bg-slate-500  w-20 h-2.5 rounded-full"></TooltipTrigger>
                    <TooltipContent>
                      <p>Chapter 1</p>
                    </TooltipContent>
                  </Tooltip>
                );
              }
            })}
          </div>
        </TooltipProvider>
        {/* <Link href={"/home"} className="flex items-center gap-1">
          <ArrowRight />
        </Link> */}
      </nav>
      <div className="sm:flex items-center  hidden gap-2">
        0 <AiOutlineThunderbolt className="text-xl text-green-800 -rotate-12" />
      </div>
      <div className="md:hidden">
        <Sheet key={"left"}>
          <SheetTrigger>
            <HambergerMenu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription className="flex flex-col justify-between h-[85vh]">
                n
                <div className="flex gap-5 justify-center">
                  <Button variant={"outline"}>Login</Button>
                  <Button>Get started</Button>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default CourseNavbar;

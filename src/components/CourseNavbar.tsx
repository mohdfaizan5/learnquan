import React from "react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Book, HambergerMenu, Home } from "iconsax-react";

const CourseNavbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white py-4 border-b flex justify-between px-16 items-center ">
      <div className="flex gap-10 items-center">
        <h3 className="text-2xl font-semibold flex items-center">
          {/* <Image
            src={"/logo-base-256x256.png"}
            height={60}
            width={60}
            alt="abs img"
            className="hidden md:block"
          />{" "} */}
          IndieToolkit
        </h3>
        <nav className="text-black text-sm hidden md:flex gap-5 ">
          <Link href={"/home"} className="flex items-center gap-1">
            <Home size="20" />
            Home
          </Link>
          <Link href={"/courses"} className="flex items-center gap-1">
          <Book size="20" color="#000000"/>Courses
          </Link>
          {/* <Link href={"#"}>Roadmap</Link> */}
          {/* <Link href={"#"}>Changelog</Link> */}
        </nav>
      </div>
      <div className="sm:flex  hidden gap-2">
        <Link href={"/login"}>
          <Button variant={"outline"}>Login</Button>
        </Link>
        <Link href={"signup"}>
          <Button variant={"default"}>Get started now</Button>
        </Link>
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

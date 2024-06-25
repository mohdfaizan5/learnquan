"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
import {
  Add,
  ArrowLeft,
  ArrowRight,
  Book,
  HambergerMenu,
  Home,
} from "iconsax-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  let courseDashboard = false;
  const path = usePathname();
  console.log(path.split("/"));
  console.log(path.split("/").includes("courses"));
  console.log(path.split("/").length > 3);
  if (path.split("/").includes("courses") && path.split("/").length > 3) {
    courseDashboard = true;
  }

  if (!courseDashboard) {
    return (
      <header className="fixed top-0 left-0 right-0 bg-white py-4 border-b flex justify-between px-16 items-center ">
        <div className="flex gap-10 items-center">
          <h3 className="text-2xl font-semibold flex items-center">
            LearnQuan
          </h3>
          <nav className="text-black text-sm hidden md:flex gap-5 ">
            <Link href={"/home"} className="flex items-center gap-1">
              <Home size="20" />
              Home
            </Link>
            <Link href={"/courses"} className="flex items-center gap-1">
              <Book size="20" color="#000000" />
              Courses
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
  } else {
    return (
      <header className="fixed top-0 left-0 right-0 bg-white py-4 border-b flex justify-between px-16 items-center ">
        <div className="flex gap-10 items-center">
          <Link href={"/home"}>
            <Add
              className="rotate-45"
              size="40"
              color="#000000"
              variant="Outline"
            />
          </Link>
        </div>
        <nav className="text-black text-sm hidden md:flex gap-5 items-center">
          <Link href={"/courses"} className="flex items-center gap-1">
            <ArrowLeft />
          </Link>
          <TooltipProvider>
            <div className=" bg-gray-200 rounded-full flex gap-1 h-2.5">
              <Tooltip>
                <TooltipTrigger className="bg-green-500 w-20 h-2.5 rounded-full"></TooltipTrigger>
                <TooltipContent>
                  <p>Chapter 1</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger className="bg-green-500 w-20 h-2.5 rounded-full"></TooltipTrigger>
                <TooltipContent>
                  <p>Chapter 2</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger className="bg-green-500 w-20 h-2.5 rounded-full"></TooltipTrigger>
                <TooltipContent>
                  <p>Chapter 3</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger className="bg-green-500 w-20 h-2.5 rounded-full"></TooltipTrigger>
                <TooltipContent>
                  <p>Chapter 4</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>

          <Link href={"/home"} className="flex items-center gap-1">
            <ArrowRight />
          </Link>
        </nav>
        <div className="sm:flex  hidden gap-2">0</div>
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
  }
};

export default Navbar;
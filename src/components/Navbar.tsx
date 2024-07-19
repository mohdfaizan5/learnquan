"use client";
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
import { Book, HambergerMenu, Home } from "iconsax-react";
import { usePathname } from "next/navigation";
import { getUser } from "@/lib/lucia";

const Navbar = async () => {
  let courseDashboard = false;
  const path = usePathname();
  // console.log(path.split("/"));
  // console.log(path.split("/").includes("courses"));
  // console.log(path.split("/").length > 3);
  if (path.split("/").includes("courses") && path.split("/").length > 3) {
    courseDashboard = true;
  }

  {}
  const user = await getUser();

  if (!courseDashboard) {
    return (
      <header className="fixed top-0 left-0 right-0 bg-white py-4 flex justify-between px-16 items-center z-50">
        <div className="flex gap-10 items-center">
          <h3 className="text-2xl font-semibold flex items-center">
            LearnQuan
          </h3>
          <nav className="text-black text-sm hidden md:flex gap-5 ">
            <Link href={"/home"} className={`flex items-center gap-1 `}>
              <Home size="20" />
              <div
                className={`hover:border-b-2 ${
                  path.split("/")[1] == "home" && "border-b-2 border-black "
                }`}
              >
                Home
              </div>
            </Link>
            <Link href={"/courses"} className={`flex items-center gap-1  `}>
              <Book size="20" color="#000000" />
              <div
                className={`hover:border-b-2 ${
                  path.split("/")[1] == "courses" && "border-b-2 border-black "
                }`}
              >
                Courses
              </div>
            </Link>
          </nav>
        </div>
        {
          // if user is logged in
          user ? (
            <div></div>
          ) : (
            <div className="sm:flex  hidden gap-2">
              <Link href={"/login"}>
                <Button variant={"outline"}>Login</Button>
              </Link>
              <Link href={"signup"}>
                <Button variant={"default"}>Get started now</Button>
              </Link>
            </div>
          )
        }
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

"use client";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
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
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Logout from "./client/Logout";

const Navbar = () => {
  let courseDashboard = false;
  const path = usePathname();
  // console.log(path.split("/"));
  // console.log(path.split("/").includes("courses"));
  // console.log(path.split("/").length > 3);
  if (path.split("/").includes("courses") && path.split("/").length > 3) {
    courseDashboard = true;
  }

  if (!courseDashboard) {
    return (
      <header className="fixed top-0 left-0 right-0 bg-white py-4 flex justify-between px-5 md:px-16 items-center z-50 border-b">
        <div className="flex gap-10 items-center">
          <h3 className="text-2xl font-semibold flex items-center">
            <Image
              src={"/logo/logo-black-256x256.png"}
              width={30}
              height={30}
              alt="logo"
            />
            LearnQuan
          </h3>
          <nav className="text-black text-sm hidden md:flex gap-5 ">
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
        <div className=" ">
          <Menubar className="border-none p-0 shadow-sm">
            <MenubarMenu>
              <MenubarTrigger className="border-none">
                {/* <Link href={"/profile"}> */}
                <Avatar className="size-9">
                  <AvatarImage src="https://github.com/mohdfaizan5.png" />
                  <AvatarFallback>MF</AvatarFallback>
                </Avatar>
                {/* </Link> */}
              </MenubarTrigger>
              <MenubarContent>
                <Link href={"/profile"}>
                  <MenubarItem>
                    Profile
                    <MenubarShortcut>CTRL P</MenubarShortcut>
                  </MenubarItem>
                </Link>
                <MenubarSeparator />
                <Link href={"/profile/settings"}>
                  <MenubarItem>Settings</MenubarItem>
                </Link>
                {/* <MenubarItem>Share</MenubarItem> */}
                <MenubarSeparator />
                <MenubarItem className="">
                  <Logout/>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>

        <div className="hidden">
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

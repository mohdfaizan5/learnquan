import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";
import { siteConfig } from "@/config/site";
import { Button } from "../ui/button";
import CustomButton from "../ui/CustomButton";

const Navbar = () => {
  return (
    <header className="sticky right-0  top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6">
      <div className="flex h-14 max-w-screen-2xl items-center justify-between ">
        <Link href={"/"} className="flex items-center font-bold text-xl">
          <Image src={"/logo/logo-black-256x256.png"} width={30} height={30} alt="logo" />
          LearnQuan
        </Link>
        {/* <nav className="hidden md:flex text-xs items-center gap-2">
          <Menubar className="border-none">
            <MenubarMenu>
              <Link className="hover:underline" href={"/components"}>
                Components
              </Link>
              <MenubarTrigger className="p-0">
                <FaCaretDown />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  HeroSections <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Forms</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Testimonials</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Pricing</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Footers</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <Link className="hover:underline" href={"/tools"}>
                Tools
              </Link>
              <MenubarTrigger className="p-1">
                <FaCaretDown />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  Components <MenubarShortcut>⌘T</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>Colors generator</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Practical Fonts</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Contrast checker</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Other tools</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
          <Link className="hover:underline" href={"/guides"}>
            Guides
          </Link>
        </nav> */}
        <nav className="flex items-center gap-2">
          <Link href={"/login"}>
            <Button variant={"outline"}>Login</Button>
          </Link>
          <Link href={"/signup"}>
            <CustomButton>Get started for free</CustomButton>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

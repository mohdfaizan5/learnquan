import React from "react";
import Link from "next/link";
import Navbar from "@/components/landingpage/NavBar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="min-h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background/60 opacity-5 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <Navbar />
      <main className="px-5 py-16 pb-30 sm:flex sm:flex-col items-center">
        <Badge>🎉 Something special is waiting!</Badge>
        <h1 className="text-5xl mt-2 md:text-balance sm:text-6xl sm:w-2/3 sm:text-center">
          Learn and get a job,{" "}
          <span className="text-primary ">effectively</span> and
          <span className="text-primary"> effortlessly</span>
        </h1>
        <p className="text-xl  opacity-90  mb-6 mt-5 md:max-w-[600px] md:text-center">
          Meet LearnQuan, the interactive learning tool for all engineering students.
          Focus on learn, not searching and tracking what better oppurtunities. Free for
          students.
        </p>
        <Link href={"/courses"}>
          <Button
            className="w-[350px] font-semibold h-[50px] mt-10 text-lg"
            variant={"default"}
          >
            Start Here {"->"}
          </Button>
        </Link>
      </main>
    </section>
  );
};

export default HeroSection;

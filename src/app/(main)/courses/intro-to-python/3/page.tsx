"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import "@/styles/typography.css";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, Refresh2 } from "iconsax-react";
import { useRouter } from "next/navigation";
import { Quiz } from "@/components/client/Quiz";

const page = () => {
  const [count, setCount] = useState(3);
  const router = useRouter();
  return (
    <div className="flex flex-col pt-20 items-center justify-center max-w-[30rem] mx-auto px-5 gap-2">
      <h1 className="font-bold text-3xl">Variables</h1>
      <Image
        src={"/lessons/intro-to-python/Lesson_1_Bookend_3-B5oO8u.png"}
        height={250}
        width={250}
        alt=""
        className="mx-auto rotate-90 grayscale"
      />
      <p>
        Variables are use in python hold some data and use it into later stage
      </p>
      <p>
        This is a very simple Python program. Press “Run” to see what it does.
      </p>
      {count <= 2 && (
        <InitialHidden>
          <Card className="w-full">
            <CardHeader>
              {/* <CardTitle>Card Title</CardTitle> */}
              <CardDescription>Python</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-mono text-sm bg-muted ">
                variable_name = "value"
              </p>
              <p className="font-mono text-sm bg-muted ">name = "faizan"</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>Run </Button>
              <Button variant={"ghost"}>
                <Refresh2 /> Reset code{" "}
              </Button>
            </CardFooter>
          </Card>
        </InitialHidden>
      )}
      {/* QUIZ */}
      {count <= 1 && (
        <InitialHidden>
          <Quiz
            answer={1}
            key={1}
            options={["A", "B", "C"]}
            question=" What does the program display if you remove the quotes around the
              message? (Edit the program above to find out.)"
          />
        </InitialHidden>
      )}

      <div className="flex justify-between w-full py-10">
        <Button
          variant={"outline"}
          size={"icon"}
          className="rounded-full p-2"
          onClick={() => {
            // show hidden block
            if (count === 3) {
              router.push("2");
            }
            console.log(count);
            setCount(count + 1);
          }}
        >
          <ArrowLeft />
        </Button>
        <Button
          className="w-full"
          onClick={() => {
            // show hidden block
            if (count === 1) {
              router.push("4");
            }
            console.log(count);
            setCount(count - 1);
          }}
        >
          {count > 1 ? "Next" : "Continue"}
        </Button>
      </div>
    </div>
  );
};

const InitialHidden = ({ children }: { children: React.ReactNode }) => {
  return <section className="w-full">{children}</section>;
};

export default page;

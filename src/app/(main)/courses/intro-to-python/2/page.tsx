"use client";
import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";
import "@/styles/typography.css";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ArrowLeft, Refresh2 } from "iconsax-react";
// import { Quiz, QuizOptions, QuizQuestion } from "@/components/client/Quiz";
import { useRouter } from "next/navigation";
import { Quiz } from "@/components/client/Quiz";

const page = () => {
  const [count, setCount] = useState(3);
  const router = useRouter();
  // const lastElementRef = useRef();
  return (
    <div className="flex flex-col pt-20 items-center px-5 gap-2 mx-auto max-w-[30rem]">
      <h2 className="font-bold text-3xl">Welcome to Python</h2>
      <Image
        src={"/lessons/intro-to-python/Lesson_1_Bookend_3-B5oO8u.png"}
        height={250}
        width={250}
        alt=""
      />
      <p className="max-w-[30rem]">
        Python is one of the most popular programming languages — it's been used
        to write millions of computer programs.
      </p>
      <p className="max-w-[30rem]">
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
      {count <= 1 && (
        <InitialHidden>
          <Quiz
            answer={1}
            key={1}
            options={["A", "B", "C"]}
            question=" What does the program display if you remove the quotes around the
              message? (Edit the program above to find out.)"
            guess="Read question again"
          />
        </InitialHidden>
      )}
      <div className="flex gap-10 mt-5 mb-10">
        <Button
          variant={"outline"}
          size={"icon"}
          className="rounded-full p-2"
          onClick={() => {
            // show hidden block
            if (count === 3) {
              router.push("1");
            }
            console.log(count);
            setCount(count + 1);
          }}
        >
          <ArrowLeft />
        </Button>
        <Button
          className="w-72"
          onClick={() => {
            // show hidden block
            if (count === 1) {
              router.push("3");
            }
            console.log(count);
            setCount(count - 1);
            // const elementToScrollTo = document.getElementById("lastElement");

            // elementToScrollTo.scrollIntoView({ behavior: "smooth" });
            // window.scrollTo({
            //   top: document.body.scrollHeight,
            //   // behavior: "smooth",
            // });
          }}
        >
          {count > 1 ? "Next" : "Continue"}
        </Button>
      </div>
      <div id={"lastElement"}></div>
    </div>
  );
};

const InitialHidden = ({ children }: { children: React.ReactNode }) => {
  return <section className="w-full">{children}</section>;
};

export default page;

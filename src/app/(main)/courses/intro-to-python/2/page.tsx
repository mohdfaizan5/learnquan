import { Button } from "@/components/ui/button";
import React from "react";
import "@/styles/typography.css";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Refresh2 } from "iconsax-react";
import { Quiz, QuizOptions, QuizQuestion } from "@/components/client/Quiz";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const page = () => {
  return (
    <div className="flex flex-col pt-20 items-start px-5 gap-2">
      <h1 className="font-bold text-3xl">Welcome to Python</h1>
      <Image
        src={"/lessons/intro-to-python/Lesson_1_Bookend_3-B5oO8u.png"}
        height={250}
        width={250}
        alt=""
      />
      <p>
        Python is one of the most popular programming languages — it's been used
        to write millions of computer programs.
      </p>
      <p>
        This is a very simple Python program. Press “Run” to see what it does.
      </p>
      <Card className="w-full">
        <CardHeader>
          {/* <CardTitle>Card Title</CardTitle> */}
          <CardDescription>Python</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="inline-code">print("Welcome to Python!")</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>Run </Button>
          <Button variant={"ghost"}>
            <Refresh2 /> Reset code{" "}
          </Button>
        </CardFooter>
      </Card>

      {/* QUIZ */}
      <Quiz>
        <QuizQuestion>
          What does the program display if you remove the quotes around the
          message? (Edit the program above to find out.)
        </QuizQuestion>
        
        <QuizOptions></QuizOptions>
        {/* 
          <QuizOption>Nothing will happen.</QuizOption>
          <QuizOption>It will give an error.</QuizOption> */}
        {/* </QuizOptions> */}
      </Quiz>
      {/*
        <Quiz>
          <QuizQuestion>what is the question?</QuizQuestion>
          <QuizOption answer>1</QuizOption>
          <QuizOption >2</QuizOption>
          <QuizOption >3</QuizOption>
        </Quiz>

        */}

      <Link className="w-full" href={"3"}>
        <Button className="w-full">Continue</Button>
      </Link>
    </div>
  );
};

export default page;

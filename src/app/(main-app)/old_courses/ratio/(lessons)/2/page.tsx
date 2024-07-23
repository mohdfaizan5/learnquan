import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BsQuestion } from "react-icons/bs";
import { TbPointerQuestion } from "react-icons/tb";

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold">Patterns in Arithmetic</h1>
      <section className="max-w-[500px]">
        <p>
          In this lesson we'll be looking for patterns in
          <HoverCard>
            <HoverCardTrigger className="underline decoration-primary px-1  items-center inline-flex">
              arithmetic
              <TbPointerQuestion className="inline size-4" />
            </HoverCardTrigger>
            <HoverCardContent className="p-2 text-sm px-3">
              <b>Arithmetic</b> — the properties of operations on numbers, like
              addition, subtraction, multiplication, and division.
            </HoverCardContent>
          </HoverCard>
          and turning those patterns into general principles we can represent
          with algebra. We'll also be working with arithmetic visually. Working
          in visuals will
        </p>
        <p>
          help us understand how and why the algebraic techniques work rather
          than going straight to memorization. Let's start with a few problems
          to find th
        </p>
      </section>
    </div>
  );
};

export default Page;

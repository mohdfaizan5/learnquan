"use client";
import { Quiz } from "@/components/client/Quiz";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "iconsax-react";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

const page = () => {
  const [count, setCount] = useState(3);
  const router = useRouter();
  const lastElementRef = useRef(null);
  const scrollToBtn = () => {
    if (lastElementRef.current) {
      lastElementRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex flex-col mt-20  items-center">
      <h1>its Quiz time!!</h1>
      <Quiz
        answer={2}
        key={1}
        options={[
          "Whole and Rational numbers ",
          "Includes negative numbers",
          "They are same natural numbers starting from 0",
          "None of the above",
        ]}
        question="What whole numbers?"
        guess="Differ from natural is they start from 0"
      />
      {count <= 2 && (
        <Quiz
          answer={1}
          key={1}
          options={[
            "Whole and Rational numbers ",
            "Rational and Irrational numbers",
            "Integers",
          ]}
          question="What are numbers classified into?"
          guess="May be rational and vice versa"
        />
      )}
      {count <= 1 && (
        <Quiz
          answer={3}
          key={1}
          options={[
            "They are non decimal",
            "They are positive",
            "Numbers starting from 1 to infinity",
            "All of the above",
          ]}
          question="What are natural numbers?"
          guess="May be rational and vice versa"
        />
      )}
      <div className="flex gap-10 mt-10 mb-10 ">
        <Button
          className="w-72 mb-20"
          variant={"default"}
          onClick={() => {
            if (count === 1) {
              router.push(
                "/congrats?message=Now you're certified with&message2='Foundations of Math'&score=30"
              );
            }
            setCount(count - 1);
            setTimeout(() => {
              scrollToBtn();
            }, 500);
          }}
        >
          {count > 1 ? "Next" : "Continue"}
        </Button>
      </div>
      <div ref={lastElementRef}></div>
    </div>
  );
};

export default page;

"use client";
import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";
import "@/styles/typography.css";
import Image from "next/image";
import { ArrowLeft } from "iconsax-react";
import { useRouter } from "next/navigation";
import MermaidDaigram from "@/components/client/MermaidDaigram";
import { Quiz } from "@/components/client/Quiz";

// Define a type for lesson content
interface LessonContent {
  title: string;
  imageSrc?: string;
  text: string | JSX.Element;
  mermaidDiagram?: string;
  quiz?: {
    answer: number;
    options: string[];
    question: string;
    guess?: string;
  };
  audioSrc?: string;
}

// Create an array of lesson content
const lessonContent: LessonContent[] = [
  {
    title: "Welcome to Numbers",
    imageSrc: "/lessons/numbers-system/genius.svg",
    text: (
      <p className="max-w-[30rem]">
        Numbers are something that can have a particular fixed quantity or can
        be quantified
      </p>
    ),
    audioSrc: "/lessons/numbers-system/audios/what are numbers.mp3",
  },
  {
    title: "Classification of Numbers",
    text: (
      <p className="max-w-[30rem]">
        Numbers are broadly classified into Rational Numbers and Irrational
        Numbers
      </p>
    ),
    quiz: {
      answer: 2,
      options: [
        "Whole and Rational numbers ",
        "Integers",
        "Rational and Irrational numbers",
      ],
      question: "What are numbers classified into?",
      guess: "May be rational and vice versa",
    },
  },
  {
    title: "Natural Numbers",
    imageSrc: "/lessons/numbers-system/numberline-natural-nos.png",
    text: (
      <>
        <p className="max-w-[30rem]">
          They are starting from 1 and goes on 2, 3, ...,
          <ul className="list-decimal">
            <li>They are all positive</li>
            <li>non decimal</li>
            <li>and non negative</li>
          </ul>
        </p>
        <MermaidDaigram code={`graph TD; A-->B`} />
      </>
    ),
  },
  {
    title: "Whole Numbers",
    imageSrc: "/lessons/numbers-system/numberline-whole-nos.png",
    text: (
      <p className="max-w-[30rem]">
        what is differs it from natural numbers is whole numbers start from 0
      </p>
    ),
    mermaidDiagram: `graph TD; A-->B; B-->C`,
  },
  {
    title: "Integers",
    imageSrc: "/lessons/numbers-system/numberline-integers.png",
    text: (
      <p className="max-w-[30rem]">
        and integers includes -1, -2 ... and so on
      </p>
    ),
    mermaidDiagram: `graph TD; A-->B; B-->C; C-->D`,
  },
];

const Page = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();
  const lastElementRef = useRef<any>(null);

  const handleNextStep = () => {
    if (currentStep === lessonContent.length - 1) {
      router.push("3"); // Assuming "3" is the next page
    } else {
      setCurrentStep(currentStep + 1);
    }
    setTimeout(() => {
      lastElementRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };

  const handlePreviousStep = () => {
    if (currentStep === 0) {
      router.push("1"); // Assuming "1" is the previous page
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex flex-col pt-20 items-center px-5 gap-2 mx-auto max-w-[30rem]">
      <h2 className="font-bold text-3xl">{lessonContent[currentStep].title}</h2>
      <Image
        src={lessonContent[currentStep].imageSrc as string}
        height={250}
        width={250}
        alt=""
      />
      {lessonContent[currentStep].text}
      {lessonContent[currentStep].audioSrc && (
        <audio className="my-10" controls>
          <source src={lessonContent[currentStep].audioSrc} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}
      {lessonContent[currentStep].quiz && (
        <Quiz
          answer={lessonContent[currentStep].quiz.answer}
          options={lessonContent[currentStep].quiz.options}
          question={lessonContent[currentStep].quiz.question}
          guess={lessonContent[currentStep].quiz.guess}
        />
      )}
      {lessonContent[currentStep].mermaidDiagram && (
        <MermaidDaigram code={lessonContent[currentStep].mermaidDiagram} />
      )}

      <div className="flex gap-10 mt-5 mb-10">
        <Button
          variant={"outline"}
          size={"icon"}
          className="rounded-full p-2"
          onClick={handlePreviousStep}
        >
          <ArrowLeft />
        </Button>
        <Button className="w-72 mb-20" onClick={handleNextStep}>
          {currentStep > 0 ? "Next" : "Continue"}
        </Button>
      </div>
      <div ref={lastElementRef}></div>
    </div>
  );
};

// ... (rest of your code, including Quiz and MermaidDaigram components)

export default Page;

"use client";
import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";
import "@/styles/typography.css";
import Image from "next/image";
import { ArrowLeft } from "iconsax-react";
import { useRouter } from "next/navigation";
import { Quiz } from "@/components/client/Quiz";
import MermaidDaigram from "@/components/client/MermaidDaigram";

const Page = () => {
  const [count, setCount] = useState(6);
  const router = useRouter();
  const lastElementRef = useRef<any>(null);
  const scrollToBtn = () => {
    if (lastElementRef.current) {
      lastElementRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col pt-20 items-center px-5 gap-2 mx-auto max-w-[30rem]">
      <h2 className="font-bold text-3xl">Welcome to Numbers</h2>
      <Image
        src={"/lessons/numbers-system/genius.svg"}
        height={250}
        width={250}
        alt=""
      />
      <p className="max-w-[30rem]">
        Numbers are something that can have a particular fixed quantity or can
        be quantified
      </p>
      <p className="max-w-[30rem]">
        Numbers are broadly classified into Rational Numbers and Irrational
        Numbers
      </p>
      {count <= 5 && (
        <audio className="my-10" controls>
          <source
            src="/lessons/numbers-system/audios/what are numbers.mp3"
            type="audio/mpeg"
          />
          {/* <source src="horse.mp3" type="audio/mpeg" /> */}
          Your browser does not support the audio element.
        </audio>
      )}
      {count <= 4 && (
        <InitialHidden>
          <Quiz
            answer={2}
            key={1}
            options={[
              "Whole and Rational numbers ",
              "Integers",
              "Rational and Irrational numbers",
            ]}
            question="What are numbers classified into?"
            guess="May be rational and vice versa"
          />
        </InitialHidden>
      )}
      {count <= 3 && (
        <div className="mt-16">
          <h2 className="font-bold text-3xl text-center">Natural Numbers</h2>
          <Image
            src={"/lessons/numbers-system/numberline-natural-nos.png"}
            height={250}
            width={250}
            alt=""
            className="flex mx-auto grayscale"
          />
          <p className="max-w-[30rem]">
            They are starting from 1 and goes on 2, 3, ...,
            <ul className="list-decimal">
              <li>They are all positive</li>
              <li>non decimal</li>
              <li>and non negative</li>
            </ul>
          </p>
          <MermaidDaigram
            code={`graph TD;
    A-->B`}
          />
        </div>
      )}
      {count <= 2 && (
        <div className="mt-16">
          <h2 className="font-bold text-3xl text-center">Whole Numbers</h2>
          <Image
            src={"/lessons/numbers-system/numberline-whole-nos.png"}
            height={250}
            width={250}
            alt=""
            className="flex mx-auto grayscale"
          />
          <p className="max-w-[30rem]">
            what is differs it from natural numbers is whole numbers start from
            0
          </p>
          <MermaidDaigram
            code={`graph TD;
    A-->B
    B-->C`}
          />
        </div>
      )}
      {count <= 1 && (
        <div className="mt-16">
          <h2 className="font-bold text-3xl text-center">Integers</h2>
          <Image
            src={"/lessons/numbers-system/numberline-integers.png"}
            height={250}
            width={250}
            alt=""
            className="flex mx-auto grayscale"
          />
          <p className="max-w-[30rem]">
            and integers includes -1, -2 ... and so on
          </p>
          <MermaidDaigram
            code={`graph TD;
  A-->B
  B-->C
  C-->D`}
          />
        </div>
      )}

      <div className="flex gap-10 mt-5 mb-10">
        <Button
          variant={"outline"}
          size={"icon"}
          className="rounded-full p-2"
          onClick={() => {
            // show hidden block
            if (count === 6) {
              router.push("1");
            }
            console.log(count);
            setCount(count + 1);
          }}
        >
          <ArrowLeft />
        </Button>
        <Button
          className="w-72 mb-20"
          onClick={() => {
            // show hidden block
            if (count === 0) {
              router.push("3");
            }
            console.log(count);
            setCount(count - 1);
            setTimeout(() => {
              scrollToBtn();
            }, 500);
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
      <div ref={lastElementRef}></div>
    </div>
  );
};

const InitialHidden = ({ children }: { children: React.ReactNode }) => {
  return <section className="w-full">{children}</section>;
};

export default Page;

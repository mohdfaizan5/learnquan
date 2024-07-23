"use client";
import { Button } from "@/components/ui/button";
import "@/styles/other.css";
import { motion } from "framer-motion";
import { ArrowLeft } from "iconsax-react";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

const Page = () => {
  const [count, setCount] = useState(6);
  const router = useRouter();
  const submitBtn = useRef<any>(null);
  const scrollToBtn = () => {
    if (submitBtn.current) {
      submitBtn.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center mt-20">
      <section className="flex flex-col size-96 gap-3 items-center">
        <Button variant={"default"}>Numbers</Button>
        {count <= 5 && (
          <>
            <span className="flex gap-4">
              <div className="w-1 rotate-45 h-6 bg-primary"></div>
              <div className="w-1 -rotate-45 h-6 bg-primary"></div>
            </span>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              className="flex gap-32"
            >
              <Button variant={"default"}>Real Numbers</Button>
              <Button variant={"default"}>Complex Numbers</Button>
            </motion.div>
          </>
        )}
        {count <= 4 && (
          <>
            <span className="flex gap-4 -ml-64">
              <div className="w-1 rotate-45 h-6 bg-primary"></div>
              <div className="w-1 -rotate-45 h-6 bg-primary"></div>
            </span>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              className="flex gap-10 -ml-64"
            >
              <Button variant={"default"}>Rational Numbers</Button>
              <Button variant={"default"}>Irrational Numbers</Button>
            </motion.div>
          </>
        )}
        {/* <div className="w-1 h-3 bg-primary"></div> */}
        <div className="-ml-[450px] flex flex-col items-center gap-1">
          {count <= 3 && (
            <>
              <div className="w-1  h-3 bg-primary"></div>
              <Button variant={"default"}>Integers</Button>
            </>
          )}
          {count <= 2 && (
            <>
              <div className="w-1  h-3 bg-primary"></div>
              {/* <div className="w-1  h-3 bg-primary"></div> */}
              <Button variant={"default"}>Whole Numbers</Button>
            </>
          )}
          {count <= 1 && (
            <>
              <div className="w-1  h-3 bg-primary"></div>
              <Button variant={"default"}>Natural Numbers</Button>
            </>
          )}
        </div>
      </section>
      {/* <article className="binary-tree">
        <div>
          <span>4</span>
          <div>
            <span>2</span>
            <div>
              <span>1</span>
              <div></div>
              <div></div>
            </div>
            <div>
              <span>3</span>
              <div></div>
              <div></div>
            </div>
          </div>
          <div>
            <span>6</span>
            <div>
              <span>5</span>
              <div></div>
              <div></div>
            </div>
            <div>
              <span>7</span>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </article> */}
      <div className="flex gap-10 mt-10 mb-10 ">
        <Button
          variant={"secondary"}
          size={"icon"}
          className="rounded-full p-2"
          onClick={() => {
            // show hidden block
            if (count === 6) {
              router.push("2");
            }
            console.log(count);
            setCount(count + 1);
          }}
        >
          <ArrowLeft />
        </Button>
        <Button
          className="w-72 mb-20"
          variant={"outline"}
          onClick={() => {
            // show hidden block
            if (count === 1) {
              router.push("4");
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
    </div>
  );
};
const InitialHidden = ({ children }: { children: React.ReactNode }) => {
  return <section className="w-full">{children}</section>;
};

export default Page;

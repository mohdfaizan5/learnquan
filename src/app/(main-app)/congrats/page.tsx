"use client";

import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Star } from "iconsax-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import confetti from "canvas-confetti";

const Page = () => {
  const searchParams = useSearchParams();
  const message = searchParams.get("message");
  const message2 = searchParams.get("message2");
  const score = searchParams.get("score");
  var duration = 2 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    });
  }, 250);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        className="animate-pulse"
        src={"/svgs/cute-smiling-cat.svg"}
        height={200}
        width={200}
        alt="happy"
      />
      {message ? (
        <h4 className="text-center text-balance">{message}</h4>
      ) : (
        <h4 className="text-center">
          Lesson <br /> Complete!
        </h4>
      )}
      {message2 ? (
        <h2 className="text-center text-balance">{message2}</h2>
      ) : (
        <h2 className="text-center">
          Lesson <br /> Complete!
        </h2>
      )}
      <p className="font-light text-xs">Total XP</p>
      <h1 className="text-center flex items-center gap-2">
        {score ? score : 40}
        <Star className="text-green-700" />
      </h1>
      <Link href={"/courses"}>
        <Button className="w-52 mt-20">Back to Courses</Button>
      </Link>
    </div>
  );
};

export default Page;

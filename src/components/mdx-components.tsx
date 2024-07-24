// @ts-nocheck
"use client"

import { useMDXComponent } from "next-contentlayer/hooks";
import { cn } from "@/lib/utils";
import { Quiz } from "./client/Quiz";
import MermaidDiagram from "./client/MermaidDaigram";
import KnowMoreCard from "./KnowMoreCard";
import Image from "next/image";

type componentsProps = {
  className: string ;
};

const components = {
  h1: ({ className, ...props }: componentsProps) => (
    <h1 className={`text-4xl font-bold`} {...props} />
  ),
  h2: ({ className, ...props }: componentsProps) => (
    <h2 className={`font-bold text-3xl`} {...props} />
  ),
  p: ({ className, ...props }: componentsProps) => (
    <p className="mt-2" {...props} />
  ),
  Quiz,
  Diagram: MermaidDiagram,
  KnowMoreCard,
  Image: ({ src }: { src: string | undefined }) => {
    if (!src) {
      // Handle the case where src is undefined, e.g., return a placeholder image or null
      return null; // or return <div>Image not available</div>, etc.
    }
    return (
      <Image
        src={src}
        alt={"alt"}
        className={`mx-auto`}
        width={240}
        height={240}
      />
    );
  },
  Audio: ({ src }: { src: string }) => (
    <audio className="" controls>
      <source src={src} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  ),
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  );
}

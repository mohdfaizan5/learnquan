// @ts-nocheck
"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import { cn } from "@/lib/utils";
import { Quiz } from "./client/Quiz";
import MermaidDiagram from "./client/MermaidDaigram";
import KnowMoreCard from "./KnowMoreCard";
import Image from "next/image";
import { Button } from "./ui/button";

type componentsProps = {
  className: string;
};

const components = {
  h1: ({ className, ...props }: componentsProps) => (
    <h1 className={`text-4xl font-bold mt-3`} {...props} />
  ),
  h2: ({ className, ...props }: componentsProps) => (
    <h2 className={`font-bold text-3xl mt-5`} {...props} />
  ),
  p: ({ className, ...props }: componentsProps) => (
    <p className="mt-3" {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn("border-2 rounded-md pb-3 px-3 mb-6", className)}
      {...props}
    >
      {props.children}
    </blockquote>
  ),
  
  //quoting code block
  // pre: ({ className, ...props }: componentsProps) => (
  //   <pre
  //     suppressHydrationWarning
  //     className="bg-red-500 inline px-3 text-white mt-3 rounded-md"
  //     {...props}
  //   />
  // ),

  // how to convert `sample` text block in mdx to styled component
  // sample: ({ children }) => {
  //   return (
  //     <pre className="bg-green-500 px-3  text-white mt-3 rounded-md">
  //       {children}
  //     </pre>
  //   );
  // },


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
  Button: ({ children, ...props }: { children: React.ReactNode }) => (
    <Button {...props}>{children}</Button>
  ),
  code: ({ children }: { children: React.ReactNode }) => (
    <code
      className="bg-slate-950 px-3 text-white mt-3 rounded p-2"
      suppressHydrationWarning
    >
      {children}
    </code>
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

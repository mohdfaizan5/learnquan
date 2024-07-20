import React from "react";
import { allCourses } from "@/config/courses";
import {
  CoursePageDisplayCard,
  TableOfContentBox,
} from "@/components/course/CoursePage";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const tableOfContext = allCourses.ratio.lessons;

const page = () => {
  return (
    <main className="  mt-20 flex flex-col md:flex-row justify-end">
      <section className="md:fixed md:left-36 md:mt-16">
        <CoursePageDisplayCard
          title="Ratio"
          description="Stretch your analytic muscles with truth-tellers, liars, logical robots, and more. A ratio represents the relationship between two quantities of the same kind"
        />
      </section>
      <section className="md:w-[50vw] flex flex-col items-start min-h-[100vh] bg-slate-200/0 gap-2 py-10">
        <h2 className="mb-6 mx-auto">Table of Content</h2>
        {/* courseId, userId what matches get me back */}
        <div className="mx-auto">
          {tableOfContext.map((lesson, i) => (
            // <button
            //   disabled
            //   className={`relative inline-block px-4 py-2 font-medium group`}
            // >
            //   <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            //   <span className="absolute inset-0 w-full h-full bg-white border-2 border-primary group-hover:bg-primary"></span>
            //   <span className="relative text-primary group-hover:text-white flex items-center gap-3">
            //     <Link href={lesson.href}>{lesson.name}</Link>
            //     {/* <IoCaretDownCircleOutline /> */}
            //   </span>
            // </button>
            // <div>{lesson.name}</div>
            <div className="flex flex-col items-center mb-5">
              <Link href={lesson.href}>
                <Card className="bg-primary text-primary-foreground shadow hover:bg-primary/90 rounded-full size-20 flex flex-col items-center justify-center">
                  <CardHeader>
                    <CardTitle>{i + 1}</CardTitle>
                  </CardHeader>
                </Card>
              </Link>
              <div className="mt-0 text-sm">{lesson.name}</div>
              <span className="w-1 h-7 bg-primary"></span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default page;

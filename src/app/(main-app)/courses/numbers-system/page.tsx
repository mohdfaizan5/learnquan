import React from "react";
import { allCourses } from "@/config/courses";
import {
  CoursePageDisplayCard,
  TableOfContentBox,
} from "@/components/course/CoursePage";

export const tableOfContext = allCourses.numbersSystem.lessons;

const page = () => {
  return (
    <main className="  mt-20 flex flex-col md:flex-row justify-end">
      <section className="md:fixed md:left-36 md:mt-16">
        <CoursePageDisplayCard
          title="Numbers System"
          description="Stretch your analytic muscles with truth-tellers, liars, logical robots, and more."
        />
      </section>
      <section className="md:w-[50vw] flex flex-col items-start min-h-[100vh] bg-slate-200/0 gap-2 py-10">
        <h2 className="mb-6">Table of Content</h2>
        {tableOfContext.map((lesson, i) => (
          <TableOfContentBox
            key={i}
            concepts={lesson.concepts}
            className="ml-[0%] "
          >
            M{lesson.module} : {lesson.title}
          </TableOfContentBox>
        ))}
      </section>
    </main>
  );
};

export default page;

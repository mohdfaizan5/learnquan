import { CoursePageDisplayCard } from "@/components/course/CoursePage";
import CourseNavbar from "@/components/CourseNavbar";
import { Mdx } from "@/components/mdx-components";
import { Button } from "@/components/ui/button";
import { allCourses } from "contentlayer/generated";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

type CoursePageProps = {
  params: {
    slug: string;
  };
};

const getCourseFromParams = async ({ params }: CoursePageProps) => {
  let slug = params.slug;

  console.log(slug, "✅✔slug");
  let course;
  let isHomePage = false;
  if (slug.length !== 1) {
    console.log("1⚡⚡");
    slug = `/courses/${slug.toString().split(",").join("/")}`;
    course = allCourses.find((course) => {
      // console.log("-", course.slug);
      return course.slug === slug;
    });
  } else {
    isHomePage = true;
    console.log("2⚡⚡");
    slug = `/courses/${slug.toString()}`;
    course = allCourses.find((course) => {
      return course.slug === `${slug}/0`;
    });
  }
  // converting it into a way to use it further

  if (!course) {
    return { course: null };
  }

  return { course, isHomePage };
};

const page = async ({ params }: CoursePageProps) => {
  const { course, isHomePage } = await getCourseFromParams({ params });

  console.log(course?.title, "course");
  console.log(course?.slug, "slug");

  if (!course) notFound();
  console.log(isHomePage, "isHomePage", course);
  if (isHomePage) return <HomePage course={course} />;

  return (
    <main className="mt-14 mx-auto max-w-xl py-8 px-5">
      <CourseNavbar/>
      <Mdx code={course.body.code} />
    </main>
  );
};

export default page;

const HomePage = ({ course }: any) => {
  return (
    <main className="flex flex-col md:flex-row justify-center mt-10 md:gap-10">
      <CoursePageDisplayCard
        title={course.title}
        description={course.description}
      />
      <section>
        {allCourses.map((c) => {
          console.log(c.slug.split("/")[2], "🔥🔥", course.slug.split("/")[2]);
          // console.log(c.slug.startsWith(course.slug), "🔥🔥", c.slug, c.slugAsParams);

          
          // show only the lessons of the course
          if (c.slug.split("/")[2] !== course.slug.split("/")[2]) return null;
          
          // skip the lesson 0
          if (c.slug.split("/")[3] === "0") return null;
          return (
            <Link
              href={c.slug}
              className="flex flex-col items-center"
            >
              <Button>{c.title}</Button>
              <span className="w-1 h-7 bg-primary"></span>
            </Link>
          );
        })}
      </section>
    </main>
  );
};

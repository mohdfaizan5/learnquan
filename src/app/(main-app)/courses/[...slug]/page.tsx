import { Mdx } from "@/components/mdx-components";
import { allCourses } from "contentlayer/generated";
import { notFound } from "next/navigation";
import React from "react";
type CoursePageProps = {
  params: {
    slug: string;
  };
};
const getCourseFromParams = async ({ params }: CoursePageProps) => {
  let slug = params.slug;

  // converting it into a way to use it further
  slug = `/courses/${slug.toString().split(",").join("/")}`;

  const course = allCourses.find((course) => {
    console.log("-", course.slug);
    return course.slug === slug;
  });

  if (!course) {
    return null;
  }

  return course;
};

const page = async ({ params }: CoursePageProps) => {
  const course = await getCourseFromParams({ params });

  if (!course) notFound();

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">{course.title}</h1>
      </div>
      <Mdx code={course.body.code} />
    </article>
  );
};

export default page;

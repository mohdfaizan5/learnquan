"use server";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

const lessonCompletedAction = async (courseSlug: string, lessonId: number) => {
  const user = await auth();
  // console.log("user", user);
  // what lesson to update and for which user
  // update it
  await prisma.userLessonCompletion.create({
    data: {
      lessonId: lessonId as number,
      userId: user?.user?.id,
      courseSlug: courseSlug,
    },
  });
  console.log("Lesson completed");
};

const IsLessonCompletedAction = async (
  courseSlug: string,
  lessonId: number
) => {
  const user = await auth();
  console.log(courseSlug, lessonId);
  const completedLessons = await prisma.userLessonCompletion.findFirst({
    where: {
      courseSlug: courseSlug,
      userId: user?.user?.id,
      lessonId: lessonId,
    },
  });
  if (completedLessons) {
    return true;
  } else false;
};

const seedData = async () => {
  // seed data
  // create a new course
  // const course = await prisma.course.create({
  //   data: {
  //     title: "Ratio",
  //     description:
  //       "In this course, you will learn about ratios and how to solve problems involving them.",
  //     slug: "ratio",
  //   },
  // });
  // console.log(course);
  // // create a new lesson
  // await prisma.lesson.create({
  //   data: {
  //     title: "Welcome to Ratio",
  //     courseId: course.id,
  //   },
  // });
  // await prisma.lesson.create({
  //   data: {
  //     title: "Properties of Ratio",
  //     courseId: course.id,
  //   },
  // });
  // await prisma.lesson.create({
  //   data: {
  //     title: "Quiz",
  //     courseId: course.id,
  //   },
  // });
  // console.log("Seeded data");
};

export { lessonCompletedAction, seedData, IsLessonCompletedAction };

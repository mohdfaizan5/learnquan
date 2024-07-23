"use server";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

const getTableOfContentAction = async (
  courseSlug: string,
  courseId: number
) => {
  const user = await auth();
  const finishedLessons = await prisma.userLessonCompletion.findMany({
    where: {
      courseSlug,
      userId: user?.user?.id,
    },
  });
  const lessons = await prisma.lesson.findMany({
    where: { courseId }, // Filter by course ID
    orderBy: { order: "asc" }, // Sort by order field in ascending order
  });
  const finalLessons = lessons.map((lesson) => {
    const isCompleted = finishedLessons.some(
      (completion) => completion.lessonId === lesson.id
    );
    return { ...lesson, isCompleted };
  });
  console.log("🔥🔥🔥", typeof finalLessons);
  return finalLessons;
};

export { getTableOfContentAction };

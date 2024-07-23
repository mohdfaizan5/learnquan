import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import React from "react";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const page = async () => {
  const user = await auth();
  const coursesEnrolled = await prisma.userLessonCompletion.findMany({
    where: {
      userId: user?.user?.id,
    },
    select: {
      course: true,
    },
  });
  return (
    <div className="flex flex-col">
      <h4>👋 Hey {user?.user?.name || user?.user?.email?.split("@")[0]}</h4>
      coursesEnrolled
      <section className="flex">
        {coursesEnrolled.map((course) => {
          return (
            <Card className="w-96">
              <CardHeader>
                <CardTitle>{course.course.title}</CardTitle>
                {/* <CardDescription>Card Description</CardDescription> */}
              </CardHeader>
              <CardContent>
                <Progress value={60} />
                <span className="text-xs mt-0">6/10 lessons</span>
              </CardContent>
              {/* <CardFooter>
                <p>Card Footer</p>
              </CardFooter> */}
            </Card>
          );
        })}
      </section>
      <p>Leaderboard</p>
      <p>Areas of improvement</p>
    </div>
  );
};

export default page;

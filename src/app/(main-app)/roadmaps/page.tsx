import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Page = () => {
  return (
    <main className="flex flex-col  min-h-[70vh]">
      <h3>Roadmaps</h3>
      <p>Work in progress🛠</p>
      <section>
        <Card className="size-44">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Course description</CardDescription>
          </CardHeader>
          {/* <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter> */}
        </Card>
      </section>
    </main>
  );
};

export default Page;
// https://brilliant.org/courses/capstone-twitterx-viral-tracking/intro-to-probability-capstone/case-study-twitter-bot-1/1/?from_llp=data-analysis
// https://brilliant.org/courses/capstone-twitterx-viral-tracking/intro-to-probability-capstone/=/?from_llp=data-analysis

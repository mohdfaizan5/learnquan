import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { allCourses } from "contentlayer/generated";
import { prisma } from "@/lib/prisma";

const page = async () => {
  const coursesMetaData = await prisma.course.findMany({});
  console.log(coursesMetaData);
  return (
    <div className="px-10 md:px-28 mt-16">
      <div className="">
        <h3 className="text-xl pt-10 font-semibold mb-2">Continue </h3>
        <section className="flex flex-col gap-3 mx-auto w-full  md:flex-row">
          {coursesMetaData.map((course, i) => (
            <EachBigCard
              image="/svgs/surreal-hourglass.svg"
              title={course.title}
              href={`/courses/${course.slug}`}
            />
          ))}
          {/* <EachBigCard
            image="/svgs/abstract-art-4.svg"
            title="Numbers System"
            href="/courses/numbers-system"
          />
          <EachBigCard
            image="/svgs/abstract-art-3.svg"
            title="Programming In C"
            href="/courses/intro-to-python"
          /> */}
        </section>
        <h3 className="text-2xl mt-10 mb-3">All Modules</h3>
        <section className="grid grid-cols-2 md:grid-cols-5 space-y-2 items-center">
          {allCourses.map((course, i) => (
            <EachSmallCard
              key={i}
              image="/svgs/surreal-hourglass.svg"
              title={course.title}
              href={course.slug}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default page;

const EachBigCard = ({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image: string;
}) => {
  return (
    <Card className="w-80 h-80 flex flex-col items-center justify-between p-5 py-7 hover:border-slate-800 hover:duration-150">
      <CardContent className="p-0">
        <Image src={image} alt="" width={180} height={180} />
      </CardContent>
      <CardHeader className="p-0">
        <h4 className="font-semibold text-center">{title}</h4>
        <div className="text-sm p-0">
          {/* <h5 className="p-0">We made solving them very easy</h5> */}
          <Link href={href}>
            <Button className="w-full mt-2" variant={"default"}>
              Get started
            </Button>
          </Link>
        </div>
      </CardHeader>
    </Card>
  );
};

const EachSmallCard = ({
  image,
  title,
  href,
}: {
  image: string;
  href: string;
  title: string;
}) => {
  return (
    <div>
      <Card className="w-40 h-40 md:w-52 flex flex-col items-center hover:border-black/80 hover:duration-150">
        <Link href={href}>
          <CardContent className="mt-3">
            <Image src={image} alt={title} width={100} height={100} />
          </CardContent>
        </Link>
        {/* <CardHeader className="p-0">
        <CardTitle className="text-sm">Solving Equations</CardTitle>
        
        </CardHeader> */}
      </Card>
      <div className="text-sm mb-2 mt-1 text-center">
        <h5>{title}</h5>
      </div>
    </div>
  );
};

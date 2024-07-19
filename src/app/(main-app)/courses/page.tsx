import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = async () => {
  return (
    <div className="px-10 md:px-28 mt-16">
      <div className="">
        <h3 className="text-xl pt-10 font-semibold mb-2">Continue </h3>
        {/* <section className="grid grid-cols-3 md:grid-cols-3 "> */}
        <section className="flex flex-col gap-3 mx-auto w-full  md:flex-row">
          <EachBigCard
            image="/svgs/surreal-hourglass.svg"
            title="Intro To Python"
            href="/courses/intro-to-python"
          />
          <EachBigCard
            image="/svgs/abstract-art-4.svg"
            title="Numbers System"
            href="/courses/numbers-system"
          />
          <EachBigCard
            image="/svgs/abstract-art-3.svg"
            title="Programming In C"
            href="/courses/intro-to-python"
          />
        </section>
        <h3 className="text-2xl mt-10 mb-3">Recommended for you</h3>
        <section className="grid grid-cols-2 md:grid-cols-5 space-y-2 items-center">
          <EachSmallCard
            image="/svgs/abstract-art-3.svg"
            title="Solving Equations"
            key={1}
          />
          <EachSmallCard
            image="/svgs/abstract-art-4.svg"
            title="Intermediate Type Script "
            key={1}
          />
          <EachSmallCard
            image="/svgs/abstract-art-5.svg"
            title="Algebra"
            key={1}
          />
          <EachSmallCard
            image="/svgs/abstract-art-6.svg"
            title="Graph Theory"
            key={1}
          />
          <EachSmallCard
            image="/svgs/abstract-art-3.svg"
            title="Solving Equations"
            key={1}
          />
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
        <h4 className="font-semibold">{title}</h4>
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

const EachSmallCard = ({ image, title }: { image: string; title: string }) => {
  return (
    <div>
      <Card className="w-40 h-40 md:w-52 flex flex-col items-center hover:border-black/80 hover:duration-150">
        <CardContent className="mt-3">
          <Image src={image} alt={title} width={100} height={100} />
        </CardContent>
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

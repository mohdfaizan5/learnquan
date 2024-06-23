import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// h-[200px] w-[350px] rounded-md border p-4
const page = () => {
  return (
    <div className="px-10 md:px-28 mt-10">
      <div className="">
        <h3 className="mb-2">Continue </h3>
        <div className=""></div>

        <section className="grid grid-cols-1 md:grid-cols-3">
          <EachBigCard />
          <EachBigCard />
          <EachBigCard />
        </section>
        <h3 className="mt-10 mb-3">Recommended for you</h3>
        <section className="grid grid-cols-1 md:grid-cols-5 space-y-2 items-center">
          <EachSmallCard />
          <EachSmallCard />
          <EachSmallCard />
          <EachSmallCard />
        </section>
      </div>
    </div>
  );
};

export default page;

const EachBigCard = () => {
  return (
    <Card className="w-80 h-80 flex flex-col items-center justify-between p-5 py-7 hover:border-slate-800">
      <CardContent className="p-0">
        <Image
          src={"/svgs/surreal-hourglass.svg"}
          alt=""
          width={180}
          height={180}
        />
      </CardContent>
      <CardHeader className="p-0">
        <CardTitle className="text-sm">Solving Equations</CardTitle>
        <div className="text-sm p-0">
          {/* <h5 className="p-0">We made solving them very easy</h5> */}
          <Button className="w-full mt-2" variant={"default"}>
            Get started
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};

const EachSmallCard = () => {
  return (
    <Card className="w-52 flex flex-col items-center hover:border-black/80">
      <CardContent>
        <Image
          src={"/svgs/abstract-art-3.svg"}
          alt=""
          width={130}
          height={130}
        />
      </CardContent>
      <CardHeader>
        {/* <CardTitle className="text-sm">Solving Equations</CardTitle> */}
        <div className="">
          <h5>Solving Equations</h5>
        </div>
      </CardHeader>
    </Card>
  );
};

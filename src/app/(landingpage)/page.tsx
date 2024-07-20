import HeroSection from "@/components/landingpage/HeroSection";
import Image from "next/image";
import "@/styles/globals.css";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const user = await auth();
  if (user) redirect("/courses");

  return (
    <div>
      <HeroSection />
      <Image
        className="mx-auto"
        src={"/svgs/engineer.svg"}
        priority
        width={500}
        height={500}
        alt=""
      />
    </div>
  );
};

export default page;

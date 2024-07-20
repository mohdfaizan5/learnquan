import HeroSection from "@/components/landingpage/HeroSection";
import Image from "next/image";
import "@/styles/globals.css";

const page = async () => {
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

import HeroSection from "@/components/landingpage/HeroSection";
import { getUser } from "@/lib/lucia";
import Image from "next/image";
import { redirect } from "next/navigation";

const page = async () => {
  const user = await getUser();
  if (user) redirect("/home");

  return (
    <div>
      
      <HeroSection/>
      <Image className="mx-auto"
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

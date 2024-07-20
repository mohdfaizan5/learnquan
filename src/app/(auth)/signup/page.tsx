import React from "react";
import SignUpForm from "./SignUpForm";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft2, ArrowLeft3 } from "iconsax-react";
import { auth } from "@/auth";

const page = async () => {
  const user = await auth()
  if(user) redirect("/courses")
  return (
    <div className="flex flex-col md:flex-row min-h-[100dvh] items-center justify-center">
      <Link href={"/"} className="fixed top-5 left-5 flex items-center text-sm ">
        {/* <Image src={"/public/logo"} width={30} height={30} alt="logo" /> */}
        <ArrowLeft3 />
        Back to home
      </Link>

      <section className="mt-16 md:mt-5 flex flex-col gap-10 md:gap-5 items-center">
        <h1 className="text-4xl font-bold">Signup</h1>
        <SignUpForm />
      </section>
      <section>
        <Image
          src="/svgs/product-launch (1).svg"
          width={400}
          height={400}
          alt="logo"
        />
      </section>
    </div>
  );
};

export default page;

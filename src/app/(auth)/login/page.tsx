import React from "react";
import SignInForm from "./SignInForm";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "iconsax-react";
import { auth } from "@/auth";

const page = async () => {
  const user = await auth();
  if (user) redirect("/courses");
  return (
    <div className="flex items-center flex-col md:flex-row-reverse justify-center min-h-[90vh] gap-10 md:gap-2  mt-20 md:mt-5">
      <Link href={"/"} className="fixed top-5 left-5 flex items-center text-sm">
        {/* <Image src={"/public/logo"} width={30} height={30} alt="logo" /> */}
        <ArrowLeft />
        Back to home
      </Link>
      <section className="flex flex-col gap-5">
        <h1 className="text-4xl font-bold">SignIn</h1>
        <SignInForm />
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

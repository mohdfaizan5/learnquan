import React from "react";
import SignUpForm from "./SignUpForm";
import { getUser } from "@/lib/lucia";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft2, ArrowLeft3 } from "iconsax-react";

const page = async () => {
  const user = await getUser();
  if (user) redirect("/home");
  return (
    <div className="flex flex-col md:flex-row min-h-[100dvh] items-center justify-center">
      <Link href={"/"} className="fixed top-5 left-5 flex items-center text-sm">
        {/* <Image src={"/public/logo"} width={30} height={30} alt="logo" /> */}
        <ArrowLeft3 />
        Back to home
      </Link>

      <section className="flex flex-col gap-5 items-center">
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

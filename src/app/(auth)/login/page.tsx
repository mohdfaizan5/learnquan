import React from "react";
import SignInForm from "./SignInForm";

const page = () => {
  return (
    <div className="flex items-center flex-col justify-center min-h-[60vh] gap-2">
      <h1 className="text-3xl font-semibold">SignIn</h1>
      <SignInForm />
    </div>
  );
};

export default page;

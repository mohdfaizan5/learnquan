"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { useForm } from "react-hook-form";

const checkQuizAnswer = (userInput: string, correctAnswer: string): boolean => {
  if (userInput == correctAnswer) return true;
  return false;
};

const page = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      What does the program display if you remove the quotes around the message?
      (Edit the program above to find out.)
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          // check whether answer is true
        })}
      >
        <input {...register("a", { value: "1" })} />
        {/* How do we take which button was selected */}
        <input {...register("b")} />
        {/* TODO: How do we take input on radio input */}

        {/* <Label
          className="flex items-center w-full mb-1 px-5 py-3 gap-2 ps-4 border border-gray-200 rounded "
          htmlFor={"1"}
        >
          <input id={"1"} {...register("a", { value: "1" })} type="radio" />
          Hi
        </Label> */}
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default page;

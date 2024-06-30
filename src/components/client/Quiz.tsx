"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";

const Quiz = ({ children }: { children: React.ReactNode }) => {
  return <Card>{children}</Card>;
};

const QuizQuestion = ({ children }: { children: React.ReactNode }) => {
  return (
    <CardHeader>
      <CardTitle className="text-xs">Quiz time</CardTitle>
      <CardDescription>{children}</CardDescription>
    </CardHeader>
  );
};

const QuizOptions = () => {
  const { register, handleSubmit, reset } = useForm();
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <CardContent>
        <EachRadioBox
          id="1"
          reg={register("answer", { value: "A" })}
          quizUniqueId="py-1"
          text="one"
          value="1"
          key={"1"}
        />
        <EachRadioBox
          id="2"
          reg={register("answer", { value: "B" })}
          quizUniqueId="py-1"
          text="two"
          value="2"
          key={"2"}
        />

        {/* <RadioGroup>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1" id="1" />
            <Label htmlFor="1">1 One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="2" id="2" />
            <Label htmlFor="2">2 Two</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="3" id="3" />
            <Label htmlFor="3">3 Three</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="4" id="4" />
            <Label htmlFor="4">4 Four</Label>
          </div>
        </RadioGroup> */}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant={"outline"} type="submit">
          Submit{" "}
        </Button>
        <Button variant={"ghost"}>Explanation</Button>
      </CardFooter>
    </form>
    // <CardContent>
    //   <RadioGroup>
    //     {questions.map((question) => (
    //       <div className="flex items-center space-x-2">
    //         <RadioGroupItem value="2" id="2" />
    //         <Label htmlFor="2">Nothing will happen.</Label>
    //       </div>
    //     ))}
    //   </RadioGroup>
    // </CardContent>
  );
};

// <div className="flex items-center space-x-2">
//   <RadioGroupItem value="option-two" id="option-two" />
//   <Label htmlFor="option-two">It will give an error.</Label>
// </div>

const EachRadioBox = ({
  text,
  id,
  value,
  quizUniqueId,
  reg,
}: {
  reg: any;
  text: string;
  id: string;
  value: string;
  quizUniqueId: string;
}) => {
  return (
    <Label
      className="flex items-center w-full mb-1 px-5 py-3 gap-2 ps-4 border border-gray-200 rounded "
      htmlFor={id}
    >
      <input id={id} type="radio" {...reg} value={value} name={quizUniqueId} />
      {text}
    </Label>
  );
};

export { Quiz, QuizQuestion, QuizOptions };

// export default Quiz;

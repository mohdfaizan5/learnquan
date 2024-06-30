"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Page = () => {
  const { register, handleSubmit } = useForm();
  const question = {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin"],
    answer: 1,
  };
  const handleQuiz = (data: any) => {
    console.log(data); // Now data.answer should hold "correctOption" or "incorrectOption"
    // console.log(question.options[question.answer] == data.answer)
    if (question.options[question.answer] == data.answer) {
      setIsCorrectAnswer(true);
    } else {
      setIsCorrectAnswer(false);
    }
  };
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<null | boolean>(null);
  return (
    <div className="flex flex-col items-center mt-20">
      What does the program display if you remove the quotes around the message?
      (Edit the program above to find out.)
      <form
        // className={`${
        //   isCorrectAnswer == false ? "border border-red-400" : ""
        // } `}
        onSubmit={handleSubmit((data) => handleQuiz(data))}
      >
        {question.question}

        {question.options.map((option, index) => (
          <Label
            key={i}
            className={`flex items-center w-full mb-1 px-5 py-3 gap-2 ps-4 border border-gray-200 rounded relative ${
              question.answer == index && isCorrectAnswer
                ? "border-green-500 shadow shadow-green-300"
                : ""
            }`}
            htmlFor={`${option}${index}`}
          >
            {/* {index} {question.answer} */}
            <input
              id={`${option}${index}`}
              {...register("answer")}
              value={option}
              type="radio"
              required
            />
            {option}
            {question.answer == index && (
              <FaCheck
                className={`${
                  isCorrectAnswer ? "block" : "hidden"
                } text-green-500 absolute right-1 top-1`}
              />
            )}
          </Label>
        ))}
        {isCorrectAnswer == false && (
          <span className="text-center text-sm text-red-500  flex items-center gap-3 justify-center mb-2">
            Incorrect Answer
            <RxCross2 className="text-red-600" />
          </span>
        )}
        <Button>Submit</Button>
      </form>
    </div>
  );
};
export default Page;
{
  /* How do we take which button was selected */
}
{
  /* TODO: How do we take input on radio input */
}
{
  /* <Label
          className="flex items-center w-full mb-1 px-5 py-3 gap-2 ps-4 border border-gray-200 rounded "
          htmlFor={"1"}
        >
          <input id={"1"} {...register("a", { value: "1" })} type="radio" />
          Hi
        </Label> 
        
          const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin"],
      answer: "B",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Jupiter", "Mars"],
      answer: "B",
    },
  ];
        */
}

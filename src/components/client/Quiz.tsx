"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineFileUnknown } from "react-icons/ai";
import { toast } from "sonner";

export const Quiz = ({
  question,
  options,
  answer,
  guess,
  className,
}: {
  question: string;
  options: string[];
  answer: number;
  guess?: string;
  className?: string;
}) => {
  const { register, handleSubmit } = useForm();

  const handleQuiz = (data: any) => {
    if (options[answer] == data.answer) {
      setIsCorrectAnswer(true);
    } else {
      setIsCorrectAnswer(false);
    }
  };
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<null | boolean>(null);
  return (
    <div className={`flex flex-col  items-start mt-20 ${className} bg-slate-100/90 px-4 py-3 rounded-md`}>
      <h4>{question}</h4>
      <form
        className={`py-3 mt-5 w-full`}
        //   ${isCorrectAnswer == false ? "border border-red-400" : ""}
        onSubmit={handleSubmit((data) => handleQuiz(data))}
      >
        {options.map((option, index) => (
          <Label
            key={option.substring(0, 5) + index}
            className={`flex items-center w-full mb-1 px-5 py-3 gap-2 ps-4 border border-gray-200 rounded relative ${
              answer == index && isCorrectAnswer
                ? "border-green-500 shadow shadow-green-300"
                : ""
            }`}
            htmlFor={`${option}${index}`}
          >
            {/* {index} {answer} */}
            <input
              id={`${option}${index}`}
              {...register("answer")}
              value={option}
              type="radio"
              required
            />
            {option}
            {answer == index && (
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
        <div className="flex  mt-5 justify-between items-center">
          <Button className="" type="submit">
            Submit
          </Button>
          {guess && (
            <Button
              type="button"
              className="flex items-center"
              onClick={() => {
                toast(guess);
              }}
              variant={"outline"}
            >
              <AiOutlineFileUnknown />
              Hint?
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};
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

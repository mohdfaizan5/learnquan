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
  const question = {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin"],
    answer: 1,
  };
  const handleQuiz = (data: any) => {
    console.log(data); // Now data.answer should hold "correctOption" or "incorrectOption"
    // console.log(question.options[question.answer] == data.answer)
    if(question.options[question.answer] == data.answer){
      
    }
  };

  return (
    <div>
      What does the program display if you remove the quotes around the message?
      (Edit the program above to find out.)
      <form onSubmit={handleSubmit((data) => handleQuiz(data))}>
        {question.question}
        {question.options.map((option, index) => (
          <Label
            className="flex items-center w-full mb-1 px-5 py-3 gap-2 ps-4 border border-gray-200 rounded "
            htmlFor={`${option}${index}`}
          >
            <input
              id={`${option}${index}`}
              {...register("answer")}
              value={option}
              type="radio"
            />
            {option}
          </Label>
        ))}

        <Button>Submit</Button>
      </form>
    </div>
  );
};
export default page;
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

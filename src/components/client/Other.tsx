import { useState } from "react";
import { useForm } from "react-hook-form";

function Quiz2() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState("B"); // Change this to the actual correct answer

  const {
    register,
    handleSubmit,
    formState: { errors: any },
  } = useForm();

  const onSubmit = (data: any) => {
    setIsSubmitted(true);
    setSelectedAnswer(data.answer);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>What is the capital of France?</h2>
      <div className="space-y-2">
        <label>
          <input type="radio" {...register("answer", { value: "A" })} />
          Option A
        </label>
        <label>
          <input
            type="radio"
            {...register("answer", { value: "B" })} // Correct answer set here
          />
          Option B (Correct Answer)
        </label>
        <label>
          <input type="radio" {...register("answer", { value: "C" })} />
          Option C
        </label>
        {errors.answer && (
          <span className="text-red-500">{errors.answer.message}</span>
        )}
      </div>
      <button type="submit">Submit Answer</button>
      {isSubmitted && (
        <div>
          {selectedAnswer === correctAnswer ? (
            <p className="text-green-500">Correct!</p>
          ) : (
            <p className="text-red-500">
              Incorrect. The correct answer is {correctAnswer}.
            </p>
          )}
        </div>
      )}
    </form>
  );
}

export default Quiz2;

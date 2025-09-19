"use client";
import { useFormStatus } from "react-dom";

function MealsFormSubmit() {
  const { pending } = useFormStatus();

  console.log(pending);

  return (
    <button disabled={pending} type="submit">
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
}

export default MealsFormSubmit;

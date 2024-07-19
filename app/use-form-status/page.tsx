"use client";
import { Button } from "@/components/Button";
import { updateName } from "@/services/updateName";
import { useActionState } from "react";

export default function UseFormStatus() {
  const [message, submitAction, isPending] = useActionState(
    (_: string, formData: FormData) => updateName(formData),
    ""
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">useFormStatus</h2>
      <form action={submitAction} className="flex gap-4 mb-4">
        <input className="input input-bordered w-60" name="name" />
        <Button>Update</Button>
      </form>
      {message && !isPending && <p>{message}</p>}
    </div>
  );
}

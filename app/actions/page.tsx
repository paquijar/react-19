"use client";
import { updateName } from "@/services/updateName";

export default function Actions() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Actions</h2>
      <form action={updateName} className="flex gap-4">
        <input className="input input-bordered w-60" name="name" />
        <button className="btn">Update</button>
      </form>
    </div>
  );
}

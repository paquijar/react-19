"use server";

import { revalidateTag } from "next/cache";

export interface Todo {
  id: number;
  name: string;
  error?: string;
}

export const addTodo = async (formData: FormData): Promise<Todo> => {
  const name = formData.get("todo") as string;
  const response = await fetch("http://localhost:8080/api/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
  revalidateTag("todos");
  return response.json();
};
interface Card {
  id: string;
  title: string;
  body: string;
}

export const getCardById = async (id: string): Promise<Card> => {
  const response = await fetch(`http://localhost:8080/api/cards/${id}`);
  return response.json();
};

"use client";
import { addTodo, Todo } from "@/services/services";
import { useActionState, useOptimistic, useRef } from "react";

export const TodoList = ({ todos }: { todos: Todo[] }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [optimisticTodos, setOptimisticTodos] = useOptimistic(todos);
  const [response, addTodoAction, isPending] = useActionState(
    (_: Todo | null, formData: FormData) => addTodo(formData),
    null
  );

  const addTodoOptimistic = (formData: FormData) => {
    const name = formData.get("todo") as string;
    if (!name) {
      return;
    }
    formRef.current?.reset();

    const newTodo = {
      id: Math.random(),
      name,
    };

    setOptimisticTodos((prev) => [...prev, newTodo]);
    addTodoAction(formData);
  };

  return (
    <div>
      <form
        className="flex gap-4 mb-6"
        ref={formRef}
        action={addTodoOptimistic}
      >
        <input className="input input-bordered w-60" name="todo" />
        <button className="btn">Add todo</button>
      </form>
      <ul className="flex flex-col gap-4">
        {optimisticTodos.map((todo) => (
          <li className="card bg-neutral-content px-4 py-8" key={todo.id}>
            {todo.name}
          </li>
        ))}
      </ul>
      {response?.error && !isPending && (
        <div className="toast toast-bottom toast-end">
          <div className="alert alert-error">
            <span>{response.error}</span>
          </div>
        </div>
      )}
    </div>
  );
};

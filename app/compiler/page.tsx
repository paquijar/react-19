"use client";
import { Count } from "@/components/Count";
import { Counter } from "@/components/Counter";
import { SlowComponent } from "@/components/SlowComponent";
import { SlowComponent2 } from "@/components/SlowComponent2";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">React Compiler</h2>
      <Counter count={count} setCount={setCount} />
      <SlowComponent />
      <Count count={count} resetCount={resetCount} />
      <SlowComponent2 />
    </div>
  );
}

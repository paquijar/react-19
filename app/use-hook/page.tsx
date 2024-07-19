import { Card } from "@/components/Card";
import { Suspense } from "react";

export default function Home() {
  const skeleton = <div className="skeleton h-[172px]" />;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">use Hook</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Suspense fallback={skeleton}>
          <Card id="1" />
        </Suspense>
        <Suspense fallback={skeleton}>
          <Card id="2" />
        </Suspense>
        <Suspense fallback={skeleton}>
          <Card id="3" />
        </Suspense>
        <Suspense fallback={skeleton}>
          <Card id="4" />
        </Suspense>
      </div>
    </div>
  );
}

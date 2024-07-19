import { getCardById } from "@/services/services";
import { use } from "react";

export const Card = ({ id }: { id: string }) => {
  const card = use(getCardById(id));

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h3 className="card-title">{card.title}</h3>
        <p>{card.body}</p>
      </div>
    </div>
  );
};

import { useFormStatus } from "react-dom";

export const Button = ({ children }: { children: React.ReactNode }) => {
  const { pending } = useFormStatus();

  return (
    <button className="btn" disabled={pending}>
      {children}
    </button>
  );
};

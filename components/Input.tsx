import { InputProps } from "@/types/types";

export const Input = ({ placeholder, error, ref, ...props }: InputProps) => {
  return (
    <div>
      <input
        className="input input-bordered w-60"
        ref={ref}
        placeholder={placeholder}
        {...props}
      />
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
};

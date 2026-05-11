import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface InputProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: string;
  type?: string;
}

const Input = <T extends FieldValues>({
  label,
  name,
  register,
  error,
  type = "text",
}: InputProps<T>) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="font-medium">
        {label}
      </label>

      <input
        id={name}
        type={type}
        {...register(name)}
        className="border border-gray-400 p-2 focus:outline-2 focus:outline-blue-500 rounded-2xl"
      />

      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
};

export default Input;

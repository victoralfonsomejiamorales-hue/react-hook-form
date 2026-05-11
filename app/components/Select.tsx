import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface SelectProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
}

const Select = <T extends FieldValues>({ control, name }: SelectProps<T>) => {
  return (
    <div>
      <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <select  {...field} className="border border-gray-400 rounded-2xl p-3 w-full">
          <option value="">Selecciona un país</option>
          <option value="MX">México</option>
          <option value="ES">España</option>
          <option value="US">Estados Unidos</option>
        </select>
      )}
    />
    </div>
  );
};

export default Select;

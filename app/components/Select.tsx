import { Controller } from "react-hook-form";

const Select = () => {
  return (
    <Controller
      name="country"
      render={({ field }) => (
        <select {...field}>
          <option value="">Selecciona un país</option>
          <option value="MX">México</option>
          <option value="ES">España</option>
          <option value="US">Estados Unidos</option>
        </select>
      )}
    />
  );
};

export default Select;

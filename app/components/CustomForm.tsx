"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";
import { FormData, schema } from "../schemas/schema";
import { zodResolver } from "@hookform/resolvers/zod";

const Form = () => {
  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };

  return (
    <div className="p-4 border-2">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input<FormData>
          label="Nombre"
          name="name"
          register={register}
          error={errors.name?.message}
        />

        <Input<FormData>
          label="Email"
          name="email"
          register={register}
          error={errors.email?.message}
          type="email"
        />

        <Input<FormData>
          label="Contraseña"
          name="password"
          register={register}
          error={errors.password?.message}
          type="password"
        />

        <Input<FormData>
          label="Confirmar contraseña"
          name="confirmPassword"
          register={register}
          error={errors.confirmPassword?.message}
          type="password"
        />

        <button
          type="submit"
          disabled={!isDirty || isSubmitting || !isValid}
          className="bg-blue-500 text-white py-2 rounded-2xl disabled:bg-gray-400"
        >
          {isSubmitting ? "Creando cuenta..." : "Crear cuenta"}
        </button>
      </form>
    </div>
  );
};

export default Form;

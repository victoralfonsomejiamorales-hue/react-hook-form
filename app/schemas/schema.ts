import { z } from "zod";

export const schema = z
  .object({
    name: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
    email: z.email("El correo electrónico no es válido"),
    password: z
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .regex(
        /^(?=.*[A-Z])(?=.*\d).+$/,
        "La contraseña debe contener al menos una letra mayúscula y un número",
      ),
    confirmPassword: z
      .string()
      .min(6, "La confirmación de contraseña debe tener al menos 6 caracteres"),
    country: z.string().min(1, "El país es requerido"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export type FormData = z.infer<typeof schema>;

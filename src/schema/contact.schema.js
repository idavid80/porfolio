import { z } from "zod";

export const createContactSchema = (t) =>
  z.object({
    name: z
      .string()
      .min(2, { message: t("validation.name.min") })
      .max(50, { message: t("validation.name.max") }),
email: z.email({ message: t("validation.email.invalid") })
       .min(6, { message: t("validation.email.min") }),
    message: z
      .string()
      .min(10, { message: t("validation.message.min") })
      .max(500, { message: t("validation.message.max") }),
  });

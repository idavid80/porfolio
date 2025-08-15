import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createContactSchema } from "../../schema/contact.schema";
import "./styles/ContactForm.css";
import FormStatus from "./FormStatus";

export default function ContactForm() {
  const { t } = useTranslation();
  const schema = createContactSchema(t);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  const [status, setStatus] = React.useState(null);

  const onSubmit = async (data) => {
    setStatus(null);
    try {
      const res = await fetch(`/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await res.json();
      if (res.ok) {
        reset();
        setStatus({ type: "success", message: t("contact.success") });
      } else {
        setStatus({ type: "error", message: resData.error || t("contact.error") });
      }
    } catch {
      setStatus({ type: "error", message: t("contact.conection") });
    }
  };

  // Ocultar mensaje después de 3 segundos
  React.useEffect(() => {
    if (!status) return;
    const timer = setTimeout(() => setStatus(null), 3000);
    return () => clearTimeout(timer);
  }, [status]);

  return (
    <>
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="contact-form"
      >
        <div>
          <input
            type="text"
            placeholder={t("contact.name")}
            {...register("name")}
          />
          {errors.name && <span className="error-text">{errors.name.message}</span>}
        </div>

        <div>
          <input
            type="email"
            placeholder={t("contact.email")}
            {...register("email")}
          />
          {errors.email && <span className="error-text">{errors.email.message}</span>}
        </div>

        <div>
          <textarea
            placeholder={t("contact.message")}
            rows="5"
            {...register("message")}
          />
          {errors.message && <span className="error-text">{errors.message.message}</span>}
        </div>
       <div className="btn-contain">
        <button type="submit" disabled={isSubmitting}>
          {t("contact.send")}
        </button>
        </div>
      </motion.form>
      <FormStatus status={status} onClose={() => setStatus(null)} />
    </>
  );
}

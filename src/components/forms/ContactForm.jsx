// src/components/forms/ContactForm.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import axios from 'axios';

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(10),
  honeypot: z.string().optional(),
});

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    if (data.honeypot) return; // spam
    await axios.post('https://formspree.io/f/YOUR_FORM_ID', {
      name: data.name,
      email: data.email,
      message: data.message,
    });
    // mostrar toast / limpiar form
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register('honeypot')} style={{ display: 'none' }} />
      <label>
        <span>Nombre</span>
        <input {...register('name')} className="input" />
        {errors.name && <small className="text-red-500">{errors.name.message}</small>}
      </label>
      <label>
        <span>Email</span>
        <input {...register('email')} className="input" />
        {errors.email && <small className="text-red-500">{errors.email.message}</small>}
      </label>
      <label>
        <span>Mensaje</span>
        <textarea {...register('message')} className="input" rows="6" />
        {errors.message && <small className="text-red-500">{errors.message.message}</small>}
      </label>
      <button disabled={isSubmitting} className="btn-primary">Enviar</button>
    </form>
  );
}

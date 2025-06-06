import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';
import { supabase } from '../lib/supabaseClient';

interface FormData {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  message: string;
}

export const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Exécute le reCAPTCHA invisible
      const token = await recaptchaRef.current?.executeAsync();
      if (!token) {
        setError("Erreur de validation reCAPTCHA. Veuillez réessayer.");
        setIsSubmitting(false);
        return;
      }

      const response = await fetch("https://mail-server-melanie.onrender.com/send", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, captchaToken: token }),
      });

      if (!response.ok) throw new Error("Échec de l'envoi du message");

      try {
        const { error: supabaseError } = await supabase.from('CONTACTS').insert([{
          nom_contact: data.name,
          prenom_contact: '',
          email_contact: data.email,
          telephone_contact: data.phone || null,
          company_contact: data.company || null,
          message_contact: data.message,
          lecture_message_contact: false,
        }]);

        if (supabaseError) {
          console.error("❌ Erreur Supabase :", supabaseError.message);
        } else {
          console.log("✅ Contact ajouté avec succès dans Supabase");
        }
      } catch (supabaseErr) {
        console.error("❌ Erreur Supabase catch :", supabaseErr);
      }

      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
      recaptchaRef.current?.reset(); // reset le token
    }
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-8 mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {isSubmitted ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-8">
          <div className="text-5xl mb-4">✓</div>
          <h3 className="text-2xl font-bold text-secondary-700 mb-2">Merci pour votre message!</h3>
          <p className="text-gray-600">Je vous recontacterai très rapidement.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-secondary-700 font-medium mb-2">Nom complet *</label>
            <input
              type="text"
              id="name"
              className={`w-full px-4 py-3 rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
              {...register('name', { required: 'Ce champ est requis' })}
              disabled={isSubmitting}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="company" className="block text-secondary-700 font-medium mb-2">Entreprise</label>
            <input
              type="text"
              id="company"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              {...register('company')}
              disabled={isSubmitting}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-secondary-700 font-medium mb-2">Email *</label>
            <input
              type="email"
              id="email"
              className={`w-full px-4 py-3 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
              {...register('email', {
                required: 'Ce champ est requis',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Adresse email invalide',
                },
              })}
              disabled={isSubmitting}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="block text-secondary-700 font-medium mb-2">Téléphone</label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              {...register('phone')}
              disabled={isSubmitting}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-secondary-700 font-medium mb-2">Votre message *</label>
            <textarea
              id="message"
              rows={5}
              className={`w-full px-4 py-3 rounded-md border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
              {...register('message', { required: 'Ce champ est requis' })}
              disabled={isSubmitting}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY!}
            size="invisible"
          />

          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-md">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-primary-500 text-white py-3 px-6 rounded-md font-medium ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-primary-600'} transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2`}
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
          </button>
        </form>
      )}
    </motion.div>
  );
};

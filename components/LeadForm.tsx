'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from './ui/Button';
import { useState } from 'react';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  interest: z.enum(['General', 'Developers', 'Cloud', 'Hardware'], {
    message: 'Please select an interest.',
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Lead Form Data:', data);
    setSubmitted(true);
    reset();
  };

  return (
    <section className="py-24 bg-blue-50 text-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-gray-600 text-lg">
            Subscribe to our newsletter for exclusive drops, developer news, and special offers.
          </p>
        </div>

        <div className="max-w-md mx-auto bg-white p-8 rounded-2xl border border-gray-100 shadow-xl">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">You&apos;re on the list!</h3>
              <p className="text-gray-600">Thanks for subscribing.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-6 text-blue-600 hover:text-blue-500 text-sm font-medium"
              >
                Subscribe another email
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" id="lead-form">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                  Area of Interest
                </label>
                <select
                  {...register('interest')}
                  id="interest"
                  defaultValue=""
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900"
                >
                  <option value="" disabled>Select an option</option>
                  <option value="General">General Updates</option>
                  <option value="Developers">Developers</option>
                  <option value="Cloud">Google Cloud</option>
                  <option value="Hardware">Hardware (Pixel/Nest)</option>
                </select>
                {errors.interest && (
                  <p className="mt-2 text-sm text-red-500">{errors.interest.message}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-500 text-white border-none"
                disabled={isSubmitting}
                id="lead-form-submit"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

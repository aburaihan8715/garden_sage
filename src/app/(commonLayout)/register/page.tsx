'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Link from 'next/link';
import { motion } from 'framer-motion';

import SectionHeading from '@/components/ui/SectionHeading';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  phone: z.string().regex(/^\d{11}$/, 'Phone number must be 11 digits'),
  address: z.string().min(1, 'Address is required'),
});

type TRegisterFormData = z.infer<typeof schema>;

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterFormData>({
    resolver: zodResolver(schema),
  });

  return (
    <div className="flex min-h-screen justify-center bg-gray-50 py-12 sm:px-6 lg:px-8">
      <motion.div
        className="w-full max-w-md rounded bg-white p-8 shadow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-6 flex justify-center">
          <SectionHeading heading="Register" />
        </div>
        <form className="space-y-6" onSubmit={handleSubmit(() => {})}>
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <label
                htmlFor="name"
                className="block text-sm font-medium text-green-700"
              >
                Name
              </label>
              <input
                id="name"
                {...register('name')}
                className={`mt-1 block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-sm`}
              />
              {errors.name && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.name.message}
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <label
                htmlFor="email"
                className="block text-sm font-medium text-green-700"
              >
                Email
              </label>
              <input
                id="email"
                {...register('email')}
                className={`mt-1 block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-sm`}
              />
              {errors.email && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <label
                htmlFor="password"
                className="block text-sm font-medium text-green-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                {...register('password')}
                className={`mt-1 block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                } focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-sm`}
              />
              {errors.password && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-green-700"
              >
                Phone Number
              </label>
              <input
                id="phone"
                {...register('phone')}
                className={`mt-1 block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                } focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-sm`}
              />
              {errors.phone && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.phone.message}
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <label
                htmlFor="address"
                className="block text-sm font-medium text-green-700"
              >
                Address
              </label>
              <input
                id="address"
                {...register('address')}
                className={`mt-1 block w-full rounded-md border px-3 py-2 text-gray-900 shadow-sm ${
                  errors.address ? 'border-red-500' : 'border-gray-300'
                } focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-sm`}
              />
              {errors.address && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.address.message}
                </p>
              )}
            </motion.div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-green-700 px-4 py-2 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>

        <motion.div
          className="mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link
              href="/login"
              className="font-medium text-green-700 hover:text-green-800"
            >
              Login
            </Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Register;

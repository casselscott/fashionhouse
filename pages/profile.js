import React, { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { getError } from '../utils/error';
import axios from 'axios';
import Layout from '../components/Layout';
import Image from 'next/image';

export default function ProfileScreen() {
  const { data: session } = useSession();

  const {
    handleSubmit,
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue('name', session.user.name);
    setValue('email', session.user.email);
  }, [session.user, setValue]);

  const submitHandler = async ({ name, email, password }) => {
    try {
      await axios.put('/api/auth/update', {
        name,
        email,
        password,
      });
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      toast.success('Profile updated successfully');
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };

  return (
    <Layout title="Profile">
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
          <Image
            className="w-full h-full object-cover m-0 p-0"
            src="/images/image39.jpg"
            alt=""
            width={500}
            height={300}
          />
        </div>
        <div className="bg-gray-800 flex flex-col justify-center w-full h-full object-cover m-0 p-0 ">
          <form
            className="max-w-[500px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg "
            onSubmit={handleSubmit(submitHandler)}
          >
            <h1 className="text-3xl text-white font-bold text-center">
              Update Profile
            </h1>

            <div className="flex flex-col text-white font-bold  py-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="w-full  text-gray-500 font-bold"
                id="name"
                autoFocus
                {...register('name', {
                  required: 'Please enter name',
                })}
              />
              {errors.name && (
                <div className="text-red-500">{errors.name.message}</div>
              )}
            </div>

            <div className="flex flex-col text-white font-bold  py-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="w-full  text-gray-500 font-bold"
                id="email"
                {...register('email', {
                  required: 'Please enter email',
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                    message: 'Please enter valid email',
                  },
                })}
              />
              {errors.email && (
                <div className="text-red-500">{errors.email.message}</div>
              )}
            </div>

            <div className="flex flex-col text-white font-bold  py-2">
              <label htmlFor="password">New Password</label>
              <input
                className="w-full  text-gray-500 font-bold"
                type="password"
                id="password"
                {...register('password', {
                  required: 'Please enter new password',
                  minLength: {
                    value: 6,
                    message: 'password is more than 5 chars',
                  },
                })}
              />
              {errors.password && (
                <div className="text-red-500 ">{errors.password.message}</div>
              )}
            </div>

            <div className="flex flex-col text-white font-bold  py-2">
              <label htmlFor="confirmPassword">Confirm New Password</label>
              <input
                className="w-full  text-gray-500 font-bold"
                type="password"
                id="confirmPassword"
                {...register('confirmPassword', {
                  required: 'Please confirm new password',
                  validate: (value) => value === getValues('password'),
                  minLength: {
                    value: 6,
                    message: 'confirm password is more than 5 chars',
                  },
                })}
              />
              {errors.confirmPassword && (
                <div className="text-red-500 ">
                  {errors.confirmPassword.message}
                </div>
              )}
              {errors.confirmPassword &&
                errors.confirmPassword.type === 'validate' && (
                  <div className="text-red-500 ">Password do not match</div>
                )}
            </div>
            <div className="flex flex-col text-white font-bold  py-2">
              <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

ProfileScreen.auth = true;

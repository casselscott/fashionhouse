import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import Layout from '../components/Layout';
import React, { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { getError } from '../utils/error';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

export default function LoginScreen() {
  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ email, password }) => {
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
      toast.error(getError(err));
    }
  };
  return (
    <Layout title="login">
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
          <img
            className="w-full h-full object-cover m-0 p-0"
            src="/images/image30.jpg"
            alt="image"
          />
        </div>

        <div className="bg-gray-800 flex flex-col justify-center w-full h-full object-cover m-0 p-0 ">
          <form
            className="max-w-[500px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg "
            onSubmit={handleSubmit(submitHandler)}
          >
            <div class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
              <div class="w-full">
                <div class="flex flex-col justify-center">
                  <br></br>

                  <p class="text-3xl text-white font-bold text-center">
                    FASHION HOUSE
                  </p>
                </div>

                <div class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p class="mx-4 mb-0 text-center text-white font-bold">
                    Login
                  </p>
                </div>

                <div className="flex flex-col text-white font-bold py-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    {...register('email', {
                      required: 'Please enter email',
                      pattern: {
                        value:
                          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                        message: 'Please enter valid email',
                      },
                    })}
                    className="rounded-lg  text-gray-500 font-bold"
                    id="email"
                    autoFocus
                  ></input>
                  {errors.email && (
                    <div className="text-red-500">{errors.email.message}</div>
                  )}
                </div>
                <div className="flex flex-col text-white font-bold  py-2">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    {...register('password', {
                      required: 'Please enter password',
                      minLength: {
                        value: 6,
                        message: 'password is more than 5 chars',
                      },
                    })}
                    className="rounded-lg text-white font-bold  text-gray-500 font-bold"
                    id="password"
                    autoFocus
                  ></input>
                  {errors.password && (
                    <div className="text-red-500 ">
                      {errors.password.message}
                    </div>
                  )}

                  <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="checkbox"
                      value=""
                      id="exampleCheck2"
                    />
                    <label
                      class="inline-block pl-[0.15rem] hover:cursor-pointer"
                      for="exampleCheck2"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="flex-col text-gray-700 py-2">
                  <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full">
                    Login
                  </button>
                </div>
                <div className="flex-col text-white font-bold py-2">
                  Don&apos;t have an account? &nbsp;
                  <Link
                    href={`/register?redirect=${redirect || '/'}`}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

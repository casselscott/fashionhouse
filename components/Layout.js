import Head from 'next/head';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { Store } from '../utils/Store';;
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signOut, useSession } from 'next-auth/react';
import Cookies from 'js-cookie';
import { Menu } from '@headlessui/react';
import DropdownLink from './DropdownLink';
import Image from 'next/image';



export default function Layout({ title, children }) {
  const { status, data: session } = useSession();


  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);
  const logoutClickHandler = () => {
    Cookies.remove('cart');
    dispatch({ type: 'CART_RESET' });
    signOut({ callbackUrl: '/login' });
  };
    
    
  return (
    <>
      <Head>
        <title>{title ? title + ' - Fashion House' : 'Fashion House'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ToastContainer position="bottom-center" limit={1} />

      <div className="flex min-h-screen flex-col justify-between ">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md bg-gray-900 text-white font-bold">
            
            <div className='flex items-center'>
            <Link href="/" legacyBehavior>
            <a className="flex items-center">
            <img src='/images/logo.jpg' alt='logo' width={45} height={40} />
            <span className="ml-2 text-lg font-bold">Fashion House</span>
            </a>
           </Link>
            </div>
           
            <div>
              <Link href="/cart" legacyBehavior>
                <a className="p-2">
                  Cart
                  {cartItemsCount > 0 && (
                    <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                      {cartItemsCount}
                    </span>
                  )}
                </a>
              </Link>
              {status === 'loading' ? (
                'Loading'
              ) : session?.user ? (
                <Menu as="div" className="relative inline-block bg-gray-900 text-white font-bold">
                <Menu.Button className="min-w-fit">
                  {session.user.name}
                </Menu.Button>
                <Menu.Items className="absolute right-0 w-40 origin-top-right shadow-lg bg-gray-900 text-white font-bold ">
                  <Menu.Item>
                    <DropdownLink className="dropdown-link" href="/profile">
                      Profile
                    </DropdownLink>
                  </Menu.Item>
                  <Menu.Item>
                    <DropdownLink
                      className="dropdown-link"
                      href="/order-history"
                    >
                      Order History
                    </DropdownLink>
                  </Menu.Item>
                  <Menu.Item>
                    <a
                      className="dropdown-link"
                      href="#"
                      onClick={logoutClickHandler}
                    >
                      Logout
                    </a>
                  </Menu.Item>
                </Menu.Items>
              </Menu>
              ) : (
                <Link href="/login" legacyBehavior>
                  <a className="p-2">Login</a>
                </Link>
              )}
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner bg-gray-900 text-white font-bold">
          <p>Copyright © 2023 Fashion House</p>
        </footer>
      </div>
      </>
  );
}
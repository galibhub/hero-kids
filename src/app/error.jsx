
"use client";
import Link from 'next/link';
import React from 'react';
import { BiSolidErrorCircle } from 'react-icons/bi';

const error = () => {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center space-y-5">
      <BiSolidErrorCircle size={100} className="text-primary" />
      <h2 className="text-4xl font-bold text-purple-500">Something went wrong</h2>
      <Link href={"/"} className="btn btn-secondary">
        Go to home
      </Link>
    </div>
    );
};

export default error;
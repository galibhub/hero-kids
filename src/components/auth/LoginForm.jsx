"use client";
import { signIn } from "next-auth/react"
import Link from "next/link";
import { useState } from "react";
import { SocialButtons } from "./SocialButton";
import Swal from "sweetalert2";
import { useRouter, useSearchParams } from "next/navigation";


const LoginForm = () => {
  const router=useRouter()
  const params=useSearchParams();
   const callBack=params.get("callbackUrl") || "/";
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
   const result=await signIn("credentials",{
    email:form.email,
    password:form.password,
    // redirect:false,
    callbackUrl:params.get("callbackUrl") || "/",
  })
  console.log(result);
  if(!result.ok){
    Swal.fire("error","Email password not matched","error")
  }
  else{
     Swal.fire("success","Welcome to kidz Hub","success")
    //  router.push('/')
  }
    
   
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Login</h2>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
              onChange={handleChange}
              value={form.email}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
              onChange={handleChange}
              value={form.password}
              required
            />

            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </form>

          <SocialButtons />

          <p className="text-center text-sm mt-4">
            Don't have an account?{" "}
            <Link href={`/register?callbackUrl=${callBack}`} className="link link-primary">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
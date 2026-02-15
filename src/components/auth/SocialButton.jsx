"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

export const SocialButtons = () => {
 const params=useSearchParams();
 console.log(params.get("callbackUrl") || "/")


  const handleSignIn = async() => {

    const result=await signIn("google",{redirect:"false", callbackUrl:params.get("callbackUrl") || "/"},);
    console.log(result)
    if(result.ok){
      Swal.fire("Login Successfull")
    }
    else{
      Swal.fire("Error Found")
    }
  };

  return (
    <div className="flex gap-3 mt-4">
      <button
        onClick={handleSignIn}
        className="btn btn-outline btn-error flex-1"
      >
        <FaGoogle className="text-lg" />
        Google
      </button>
    </div>
  );
};

'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
  
const LoginPage = () => {
    const{  register,handleSubmit, watch, formState:{errors}}=useForm();
    const[isShowPassword,setIsShowPassword]= useState(false)
   
    //user er mail password er jonno ekhane ekta function 
    // const handelLoginFunc =(e)=>{
    //    e.preventDefault();
    //    const email = e.target.email.value;
    //    const password = e.target.password.value;
    //    console.log(email,password);

    // }
    //r ekvabe kora jay react er hook form use kore 
    const handelLoginFunc =async (data)=>{
        console.log(data,"data");

     const { data: res, error } = await authClient.signIn.email({
    email: data.email, // required
    password: data.password, // required
    rememberMe: true,
    callbackURL: "/",
});
   console.log(res,error);  
   
    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("signin successful");
    }

    };
    // console.log(errors,"errors");
    //jodi input field er value console e dekhte cay tayle warch function ta desstrcture korte hobe 
    console.log(watch("email"));
    console.log(watch("password"));

  return (
    <div className="container mx-auto min h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-center text-3xl mb-6">Login your account</h2>
        <form className="space-y-4 " onSubmit={handleSubmit(handelLoginFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email address</legend>
            <input type="email" className="input"  placeholder="Input your email address"{...register("email",{required:"Email field is required"})} />  
             {errors.email && <p className="text-red-500">{errors.email.message}</p>}    
          </fieldset>
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input 
            type={ isShowPassword? "text": "password"} 
            className="input" 
             placeholder="Enter your password" 
             {...register("password",
             { required: "password field is required"

              })} /> 
              <span className="absolute right-2 top-4 cursor-pointer" onClick={()=> setIsShowPassword(!isShowPassword)}>
                { isShowPassword? <FaEye/>: <FaEyeSlash />}
              </span>
             {errors.password && <p className="text-red-500">{errors.password.message}</p>}   
          </fieldset>
        <button className="btn w-full bg-slate-800 text-white">Login</button>  
        </form>
        <p className="mt-4">Don't have an accouont? <Link href={'/register'} className="text-blue-500">Register</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;

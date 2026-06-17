'use client'
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
    const{  register,handleSubmit, watch, formState:{errors}}=useForm();
   
    //user er mail password er jonno ekhane ekta function 
    // const handelLoginFunc =(e)=>{
    //    e.preventDefault();
    //    const email = e.target.email.value;
    //    const password = e.target.password.value;
    //    console.log(email,password);

    // }
    //r ekvabe kora jay react er hook form use kore 
    const handelLoginFunc =(data)=>{
        console.log(data);

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
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input type="password" className="input"  placeholder="Enter your password" {...register("password",{ required: "password field is required" })} /> 
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

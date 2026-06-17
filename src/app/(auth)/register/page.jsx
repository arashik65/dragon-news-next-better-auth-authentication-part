"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  //user er mail password er jonno ekhane ekta function
  // const handelLoginFunc =(e)=>{
  //    e.preventDefault();
  //    const email = e.target.email.value;
  //    const password = e.target.password.value;
  //    console.log(email,password);

  // }
  //r ekvabe kora jay react er hook form use kore
  const handelRegisterFunc = (data) => {
    console.log(data,"data");
    const{email, name, photo, password}=data;
    console.log(name,photo);
  };
  console.log(errors,"errors");
  //jodi input field er value console e dekhte cay tayle warch function ta desstrcture korte hobe
//   console.log(watch("email"));
//   console.log(watch("password"));

  return (
    <div className="container mx-auto min h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-center text-3xl mb-6">
          Register your account
        </h2>
        <form
          className="space-y-4 "
          onSubmit={handleSubmit(handelRegisterFunc)}
        >
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              className="input"
              placeholder="Input your Name"
              {...register("name", { required: "Name field is required" })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              type="text"
              className="input"
              placeholder="Enter your Photo URL"
              {...register("photo", {
                required: "password URL is required",
              })}
            />
            {errors.photo && (
              <p className="text-red-500">{errors.photo.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email address</legend>
            <input
              type="email"
              className="input"
              placeholder="Input your email address"
              {...register("email", { required: "Email field is required" })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input"
              placeholder="Enter your password"
              {...register("password", {
                required: "password field is required",
              })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>
          <button className="btn w-full bg-slate-800 text-white">
            Register
          </button>
        </form>
     
      </div>
    </div>
  );
};

export default RegisterPage;

import React, {  useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import AppwriteService from "../appwrite/Appwrite";
import authService from "../appwrite/Auth";
import HomeLayout from "../layout/HomeLayout";
import login from "../store/AuthSlice";

function Signup() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState("");

  const createNewAccount = async(data) => {
    setErrorMsg("");
    try {
      const account = await authService?.createAccount(data);
      if (account) {
        const userData = await authService.getCurrentUser("current");
        if (userData) {
          dispatch(login(userData));
          console.log(userData)
          navigate("/");
        }
      }
    } catch (error) {
      setErrorMsg(error.message);
    }
    
    // try {
    //   const account = await AppwriteService?.Signup(data)
    //   if (account) {
    //     console.log('account create successfully ')
    //    login(account)
        
    //   }
    // } catch (error) {
    //   setErrorMsg(error.message);
    // }
    console.log(data)
  };


  return (
    <HomeLayout>
      {errorMsg && <p className=" text-red-600 flex justify-center items-start ">{errorMsg}</p>}
   
    <div className="flex overflow-x-auto items-center justify-center h-[100vh]">
      {" "}

      <form 
        onSubmit={handleSubmit(createNewAccount)}
        className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]"
      >
        <h1 className="text-center text-2xl font-bold">Create New Account</h1>
        <div className=" space-y-5 flex flex-col gap-1">
          <input
            label=" Full Name"
            className="bg-transparent px-2 py-1 border"
            name=" Full name"
            type="text"
            placeholder=" Enter Your Full Name"
            {...register("name", {
              required: true,
            })}
          />
          <input
            label=" Email"
            className="bg-transparent px-2 py-1 border"
            name="email"
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              validate: {
                matchPattern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be a valid address",
              },
            })}
          />
          <input
            label="password"
            className="bg-transparent px-2 py-1 border"
            name="password"
            placeholder="Enter your password"
            type="password"
            {...register("password", {
              required: true,
            })}
          />
          <button
            type="submit"
            className="mt-2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer"
          >
            create Account
          </button>
        </div>
        <p className="text-center">
          Already have an account ?{" "}
          <Link to="/login" className="link text-accent cursor-pointer">
            {" "}
            Login
          </Link>
        </p>
      </form>
    </div>
    </HomeLayout>
  );


}

export default Signup;



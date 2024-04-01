import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {Link, useNavigate} from 'react-router-dom'

import authService from "../appwrite/Auth";
import HomeLayout from "../layout/HomeLayout";
import { login } from "../store/AuthSlice";
function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState("");
  const loginUser = async(data) => {
    setErrorMsg("");
    try {
      const account = await authService?.login(data);
      if (account) {
        const userData = await authService?.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/")
      }
    } catch (error) {
      setErrorMsg(error.message);
    }
    console.log(data)
  };
  return (
    <div className='flex overflow-x-auto items-center justify-center h-[100vh]'>
      <HomeLayout>
      {errorMsg && <p className=" text-red-600 flex justify-center items-start ">{errorMsg}</p>}
   
    <div className="flex overflow-x-auto items-center justify-center h-[100vh]">
      {" "}

      <form 
        onSubmit={handleSubmit(loginUser)}
        className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]"
      >
        <h1 className="text-center text-2xl font-bold">Login</h1>
        <div className=" space-y-5 flex flex-col gap-1">
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
            Login
          </button>
        </div>
        <p className="text-center">
          Already have an account ?{" "}
          <Link to="/signup" className="link text-accent cursor-pointer">
            {" "}
            Signup
          </Link>
        </p>
      </form>
    </div>
    </HomeLayout>
</div>


//     <div className='flex overflow-x-auto items-center justify-center h-[100vh]'>
//     <form noValidate onSubmit={Login} className='flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]'>
//         <h1 className="text-center text-2xl font-bold">Login Page</h1>
//         <div className='flex flex-col gap-1'>
//             <label htmlFor="email" className='font-semibold'> Email </label>
//             <input 
//                 type="email" 
//                 required
//                 name="email"
//                 id="email"
//                 placeholder="Enter your email.."
//                 className="bg-transparent px-2 py-1 border"
//                 // onChange={handleUserInput}
//                 // value={loginData.email}
//             />
//         </div>
//         <div className='flex flex-col gap-1'>
//             <label htmlFor="password" className='font-semibold'> Password </label>
//             <input 
//                 type="password" 
//                 required
//                 name="password"
//                 id="password"
//                 placeholder="Enter your password.."
//                 className="bg-transparent px-2 py-1 border"
//                 // onChange={handleUserInput}
//                 // value={loginData.password}
//             />
//         </div>

//         <button type="submit" className='mt-2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer'>
//            Login
//         </button>

//         <p className="text-center">
//             Do not have an account ? <Link to="/signup" className='link text-accent cursor-pointer'> Signup</Link>
//         </p>

//     </form>
// </div>
  );
}

export default Login;



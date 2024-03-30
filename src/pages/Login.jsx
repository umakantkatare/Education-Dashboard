import { Account, Client } from "appwrite";
import React from "react";
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom'
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className='flex overflow-x-auto items-center justify-center h-[100vh]'>

    <form onSubmit={handleSubmit(Login)} className='flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]'>
    <h1 className="text-center text-2xl font-bold">Login Page</h1>
      <div className='flex flex-col gap-2'>
      <label htmlFor="email" className='font-semibold'> Email </label>
        <input
          // className={`px-3 py-2 rounded-lg text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full `}
    className="bg-transparent px-2 py-1 border"
          label="Email: "
          placeholder="Enter your email"
          type="email"
          {...register("email", {
            required: true,
            validate: {
              matchPattern: (value) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                "Email address must be a valid address",
            },
          })}
        />
          <label htmlFor="password" className='font-semibold'> Password </label>
        <input
          className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full `}
    // className="bg-transparent px-2 py-1 border"
          label="Password: "
          type="password"
          placeholder="Enter your password"
          {...register("password", {
            required: true,
          })}
        />
        <button type="submit" className='mt-2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer'>
          Sign in
        </button>
      </div>
    <p className="text-center">
    Do not have an account ? <Link to="/signup" className='link text-accent cursor-pointer'> Signup</Link>
</p>
    </form>
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

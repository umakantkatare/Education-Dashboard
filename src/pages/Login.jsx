import { Account, Client } from "appwrite";
import React from "react";
import { useForm } from "react-hook-form";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
    //   <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
    //   <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
    //   <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
    //   <select {...register("Title", { required: true })}>
    //     <option value="Mr">Mr</option>
    //     <option value="Mrs">Mrs</option>
    //     <option value="Miss">Miss</option>
    //     <option value="Dr">Dr</option>
    //   </select>

    //   <input {...register("Developer", { required: true })} type="radio" value="Yes" />
    //   <input {...register("Developer", { required: true })} type="radio" value="No" />

    //   <input type="submit" />
    // </form>
    <form onSubmit={handleSubmit(Login)} className="mt-8">
      <div className="space-y-5">
        <input
          className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full `}
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
        <input
          className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full `}
          label="Password: "
          type="password"
          placeholder="Enter your password"
          {...register("password", {
            required: true,
          })}
        />
        <button type="submit" className="w-full">
          Sign in
        </button>
      </div>
    </form>
  );
}

export default Login;

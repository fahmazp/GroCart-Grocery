import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "@/config/axiosInstance";
import { useDispatch } from "react-redux";
import { clearUser, saveUser } from "@/redux/features/userSlice";
import { toast } from "sonner";

export default function Login() {
  
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: {errors} } = useForm();


  const onSubmit = async (formData) => {
      console.log(formData, "===form data");
      
  try {
    const response = await axiosInstance({
      method: "PUT",
      url: '/user/login',
      data: formData,
    })

    const { data, message } = response.data;
    // const { data, message } = response?.data?.data;
     console.log("Login Success:", message);
     dispatch(saveUser(data));
     toast.success("Login successful!");
    navigate("/");
  } catch (error) {
    const errorMsg = error?.response?.data?.message || "Login failed";
    dispatch(clearUser());
    toast.error(errorMsg);
    console.log(error, "Login error!");
  }
  }

  return (
    <>
<div className="relative flex min-h-[100svh] md:min-h-screen items-center justify-center bg-gradient-to-br from-emerald-200 via-green-50 to-lime-200 dark:from-gray-900 dark:via-gray-800 dark:to-black px-4">

  <img 
    src="/images/image 33.png"
    alt="background"
    className="absolute inset-0 w-full h-full object-cover z-0 opacity-10 dark:opacity-5" 
  />

  <div className="relative z-10 w-full max-w-md rounded-xl bg-white/30 dark:bg-white/5 backdrop-blur-xs border border-white/20 shadow-lg p-8">
    
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
        Sign in to <span className="text-green-600">GroCart.</span>
      </h2>
      <p className="text-sm text-zinc-600 dark:text-gray-300 mt-2">Welcome back, shopper 👋</p>
    </div>

    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Email address
        </label>
        <input
          type="email"
          id="email"
          {...register("email", { required: "Email is required" })}
          autoComplete="email"
          className="mt-2 w-full rounded-full border border-gray-400/50 bg-white/30 dark:bg-white/10 px-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none focus:border-green-500 focus:bg-white/40"
          placeholder="you@example.com"
        />
        {errors.email && <p className="mt-1 text-xs text-red-500 dark:text-red-300">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Password
        </label>
        <input
          type="password"
          id="password"
          {...register("password", { required: "Password is required" })}
          autoComplete="current-password"
          className="mt-2 w-full rounded-full border border-gray-400/50 bg-white/30 dark:bg-white/10 px-4 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none focus:border-green-500 focus:bg-white/40"
          placeholder="••••••••"
        />
        {errors.password && <p className="mt-1 text-xs text-red-500 dark:text-red-300">{errors.password.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-green-600 px-4 py-2 text-white font-semibold hover:bg-green-500 transition-all duration-200"
      >
        Sign in
      </button>
    </form>

    <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-300">
      New user?{' '}
      <Link to="/signup" className="font-semibold text-green-500 hover:text-green-400">
        Create Account
      </Link>
    </p>
  </div>
</div>

    </>
  )
}

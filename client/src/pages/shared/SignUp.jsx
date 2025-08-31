import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "@/config/axiosInstance";
import { useDispatch } from "react-redux";
import { saveUser } from "@/redux/features/userSlice";
import { toast } from "sonner";

export default function Sign_Up() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      // const { confirmPassword, ...payload } = data;
      // const payload = data;
      console.log("Payload data going to backend:", data);

      const response = await axiosInstance.post("/user/signup", data);

      if (response?.data?.data) {
        dispatch(saveUser(response.data.data)); // Store user in Redux
        toast.success("Account created!");
        navigate("/");
      }
    } catch (error) {
      const errorMsg = error?.response?.data?.message || "Signup failed";
      toast.error(errorMsg);
      console.log("Signup error:", errorMsg);
    }
  };

  return (
    <>
<div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-200 via-green-50 to-lime-200 dark:from-gray-900 dark:via-gray-800 dark:to-black px-4">

  <img 
    src="/images/image 33.png"
    alt="background"
    className="absolute inset-0 w-full h-full object-cover z-0 opacity-10 dark:opacity-5" 
  />

  <div className="relative my-10 z-10 w-full max-w-md rounded-sm bg-white/30 dark:bg-white/5 backdrop-blur-xs border border-white/20 shadow-lg px-6 py-4.5">
    <div className="text-center mb-2.5">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Register to <span className="text-green-600">GroCart.</span>
      </h2>
    </div>

    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <div>
            <label className="text-sm font-medium text-gray-800 dark:text-white">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full px-2 py-1 rounded-md ring ring-gray-500/40 bg-white/40 dark:bg-white/10 text-gray-900 dark:text-white outline-none focus:border-green-500 focus:bg-white/40"
            />
            {errors.name && <p className="text-xs text-red-500 dark:text-red-400 mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="text-sm font-medium text-gray-800 dark:text-white">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-2 py-1 rounded-md ring ring-gray-500/40 bg-white/40 dark:bg-white/10 text-gray-900 dark:text-white outline-none focus:border-green-500 focus:bg-white/40"
            />
            {errors.email && <p className="text-xs text-red-500 dark:text-red-400 mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="text-sm font-medium text-gray-800 dark:text-white">Mobile</label>
            <input
              type="tel"
              {...register("mobile", { required: "Mobile is required" })}
              className="w-full px-2 py-1 rounded-md ring ring-gray-500/40 bg-white/40 dark:bg-white/10 text-gray-900 dark:text-white outline-none focus:border-green-500 focus:bg-white/40"
            />
            {errors.mobile && <p className="text-xs text-red-500 dark:text-red-400 mt-1">{errors.mobile.message}</p>}
          </div>

          <div>
            <label className="text-sm font-medium text-gray-800 dark:text-white">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full px-2 py-1 rounded-md ring ring-gray-500/40 bg-white/40 dark:bg-white/10 text-gray-900 dark:text-white outline-none focus:border-green-500 focus:bg-white/40"
            />
            {errors.password && <p className="text-xs text-red-500 dark:text-red-400 mt-1">{errors.password.message}</p>}
          </div>

          <div>
            <label className="text-sm font-medium text-gray-800 dark:text-white">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value, formValues) =>
                  value === formValues.password || "Passwords do not match",
              })}
              className="w-full px-2 py-1 rounded-md ring ring-gray-500/40 bg-white/40 dark:bg-white/10 text-gray-900 dark:text-white outline-none focus:border-green-500 focus:bg-white/40"
            />
            {errors.confirmPassword && (
              <p className="text-xs text-red-500 dark:text-red-400 mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full mt-2.5 py-2 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-full"
          >
            Create Account
          </button>
        </form>

    <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-300">
      Already have an account?{' '}
      <Link to="/login" className="font-semibold text-green-500 hover:text-green-400">
        Sign in
      </Link>
    </p>
  </div>
</div>

    </>
  )
}

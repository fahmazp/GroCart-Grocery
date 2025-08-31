import { axiosInstance } from "@/config/axiosInstance";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUser } from "@/redux/features/userSlice";
import { toast } from "sonner";

export default function useLogout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const res = await axiosInstance.get("user/logout")
    //   console.log(res.data.message);

      dispatch(clearUser());
      toast.success(res.data.message || "Logged out!");
      // Clear local storage or auth context
      localStorage.removeItem("user");

      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
      toast.error("Logout failed, try again!");
    }
  };

  return handleLogout
}

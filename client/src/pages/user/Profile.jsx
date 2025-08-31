import { useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import {
  LoaderCircle,
  Mail,
  Phone,
  LogOut,
  Edit2,
  Home,
  PackageSearch,
  LocationEdit,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import useLogout from "@/components/user/UseLogout";



export default function Profile() {

  const userLogout = useLogout();
  const [userDetails, isLoading, error] = useFetch("user/profile");
  const [editData, setEditData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Save changes here", editData);
    // You'd typically send a PUT request to update user info
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoaderCircle className="animate-spin text-green-500 size-8" />
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center mt-10">Something went wrong!</p>;
  }

  return (
    <div className="max-w-xl mx-auto p-5 mt-10 bg-white dark:bg-zinc-900 rounded-2xl shadow-lg space-y-6">
      {/* PROFILE CARD */}
      <div className="flex items-center gap-4">
        <img
          src={userDetails?.profilePic}
          alt="avatar"
          className="size-16 rounded-full border-2 border-green-500 shadow-md"
        />
        <div>
          <h2 className="text-xl font-semibold capitalize text-zinc-800 dark:text-white">
            {userDetails?.name}
          </h2>
          <p className="text-sm text-zinc-500">ID: {userDetails?._id.slice(0, 6)}...</p>
        </div>
      </div>

      {/* CONTACT INFO */}
      <div className="grid gap-4">
        <div className="flex items-center gap-3">
          <Mail className="text-green-500" size={18} />
          <p className="text-zinc-700 dark:text-zinc-300">{userDetails?.email}</p>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="text-green-500" size={18} />
          <p className="text-zinc-700 dark:text-zinc-300">{userDetails?.mobile}</p>
        </div>
      </div>

      {/* ADDRESS SECTION */}
      <div className="border-t pt-4">
        <h3 className="text-base font-semibold mb-3 flex items-center gap-2">
          <Home className="text-green-500" size={20} /> Address Info
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-2">
          {userDetails?.address ||
            "No address on added. Please update your profile to add your delivery address."}
        </p>

        <Link to="#" className="inline-flex items-center justify-center gap-1 bg-secondary px-2 py-1 text-xs rounded">
          <LocationEdit className="w-3 h-3 inline-block" />
          Add/Edit Address
        </Link>
      </div>

      {/* ORDER HISTORY */}
      <div className="border-t pt-4">
        <h3 className="text-base font-semibold mb-3 flex items-center gap-2">
          <PackageSearch className="text-green-500" size={20} /> Recent Orders
        </h3>
        <ul className="space-y-2 text-sm">
          {userDetails?.orders?.length > 0 ? (
            userDetails.orders.slice(0, 3).map((order, idx) => (
              <li
                key={idx}
                className="p-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex justify-between items-center"
              >
                <span>
                  🛒 {order.items?.length} items • {order.date}
                </span>
                <span className="text-green-500 font-medium">₹{order.total}</span>
              </li>
            ))
          ) : (
            <li className="text-zinc-500">No recent orders.</li>
          )}
        </ul>
      </div>

      
      <div className="flex justify-between items-center border-t pt-4">
        {/* <Button variant="outline" className="flex items-center gap-2 ring-1">
          <Edit2 size={16} />
          Edit
        </Button> */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Edit2 size={16} />
              Edit Profile
            </Button>
          </DialogTrigger>
          <DialogContent>
            <div className="space-y-4">
              <div>
                <Label>Name</Label>
                <Input name="name" onChange={handleInputChange} defaultValue={userDetails?.name} />
              </div>
              <div>
                <Label>Email</Label>
                <Input name="email" onChange={handleInputChange} defaultValue={userDetails?.email} />
              </div>
              <div>
                <Label>Mobile</Label>
                <Input name="mobile" onChange={handleInputChange} defaultValue={userDetails?.mobile} />
              </div>
              <div>
                <Label>New Password</Label>
                <Input name="password" type="password" onChange={handleInputChange} />
              </div>
              <Button onClick={handleSave} className="w-full mt-2">
                Save Changes
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        <Button variant="destructive" className="flex items-center gap-2" onClick={userLogout}>
          <LogOut size={16} />
          Logout
        </Button>

      </div>

    </div>
  );
}

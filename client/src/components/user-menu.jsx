import {
  BoltIcon,
  Clipboard,
  LogOutIcon,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom";
import { useFetch } from "@/hooks/useFetch";
import useLogout from "./user/UseLogout";

export default function UserMenu() {

  const userLogout = useLogout();
  const [userDetails] = useFetch("/user/profile")

  // if (error) {
  //   return <p className="text-red-500 text-center mt-10">Failed to fetch details!</p>;
  // }

  return (
    (<DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
          <Avatar>
            <AvatarImage src={userDetails?.profilePic} alt="avatar" />
            <AvatarFallback>User</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-64" align="end">
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span className="text-foreground truncate text-sm font-medium capitalize">{userDetails?.name}</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
            <Link to="/user/profile">
          <DropdownMenuItem>
            <BoltIcon size={14} className="opacity-60" aria-hidden="true" />
            <span className="text-xs">Profile</span>
          </DropdownMenuItem>
            </Link>
        </DropdownMenuGroup>
        
        <DropdownMenuItem onClick={userLogout}>
          {/* <div onClick={userLogout} className="flex gap-2 items-center"> */}
          <LogOutIcon size={14} className="opacity-60" aria-hidden="true" />
          <span className="text-xs">Logout</span>
          {/* </div> */}

        </DropdownMenuItem>

        <DropdownMenuItem>
          <Clipboard size={14} className="opacity-60" aria-hidden="true" />
          <span className="text-xs">My Orders</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>)
  );
}

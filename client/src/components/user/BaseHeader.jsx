import { useId } from "react";
import { SearchIcon, ZapIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import Logo from "../logo";
import BtnHeader from "../other-components/LoginBtn";
import ModeToggle from "../theming/toggleMode";
import { SelectLocationScroll } from "../other-components/LocationSearch";
import { Link } from "react-router-dom";

const navigationLinks = [
  { href: "/", label: "Home", active: true },
  { href: "all-categories", label: "All Categories" },
  { href: "about", label: "Top Deals" },
  { href: "/user/profile", label: "Orders" },
  { href: "/user/cart", label: "My cart" },
];

export default function NoAuthHeader() {
  const id = useId();

  return (
    <div className="">
      <nav className="sticky top-0 z-50 py-1 md:py-2.5 px-2 md:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Left side */}
          <div className="flex flex-1 items-center gap-2">
            {/* Mobile menu trigger */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="group size-8 md:hidden"
                  variant="ghost"
                  size="icon"
                >
                  <svg
                    className="pointer-events-none"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12L20 12"
                      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                    />
                  </svg>
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-36 p-1 md:hidden">
                <NavigationMenu className="max-w-none *:w-full">
                  <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                    {navigationLinks.map((link, index) => (
                      <NavigationMenuItem key={index} className="w-full">
                        <NavigationMenuLink
                          href={link.href}
                          className="py-1.5"
                          active={link.active}
                        >
                          {link.label}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>
            {/* Logo */}
            <div className="flex items-center gap-8">
              <a href="/" className="text-primary hover:text-primary/90">
                <Logo />
              </a>

              <div className="hidden sm:flex items-center">
                <SelectLocationScroll />
              </div>
            </div>
          </div>

          {/* Middle area */}
          <div className="grow">
            {/* Search form */}
            <div className="relative mx-auto w-full lg:max-w-sm hidden sm:block">
              <Input
                id={id}
                className="peer ps-8 pe-10 ring-1 ring-green-400/60"
                placeholder="Search for fruits, dairy, snacks..."
                type="search"
              />
              <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 peer-disabled:opacity-50">
                <SearchIcon size={16} />
              </div>
              <div className="text-muted-foreground pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-1">
                <kbd className="bg-green-500 text-white inline-flex h-6 max-h-full items-center rounded-xs border px-1 font-[inherit] text-[0.625rem] font-medium">
                  ⌘K
                </kbd>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-1 items-center justify-end gap-2.5">
            {/* <Badge variant="outline" className="hidden md:flex gap-1 p-2 text-[#267533] dark:text-green-500 ring ring-lime-200">
              <ZapIcon
                className="-ms-0.5 opacity-60"
                size={14}
                aria-hidden="true"
                fill="#267533"
              />
              Grab in 5 mins
            </Badge> */}
            <ModeToggle />
            <BtnHeader />
          </div>
        </div>
      </nav>

           <div className="flex sm:hidden justify-center items-center px-3 pb-3">
                <SelectLocationScroll />
           </div>   

      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2 justify-center px-3 py-3 border-t border-green-400">
        <Link
          to="/"
          className="bg-green-600 text-white text-sm px-3.5 py-1.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md"
        >
          Home
        </Link>
        <Link
          to="/all-categories"
          className="bg-lime-300 text-green-900 text-sm px-3.5 py-1.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md"
        >
          All categories
        </Link>        
        <Link
          to="/all-categories"
          className="bg-orange-400 text-white text-sm px-3.5 py-1.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md"
        >
          Fruits
        </Link>
        <Link
          to="/user/profile"
          className="bg-teal-600 text-white text-sm px-3.5 py-1.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md"
        >
          Vegetables
        </Link>
        <Link
          to="/about"
          className="bg-blue-300 text-zinc-800 text-sm px-3.5 py-1.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md"
        >
          Dairy
        </Link>
        <Link
          to="/all-categories"
          className="bg-yellow-400 text-zinc-800 text-sm px-3.5 py-1.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md"
        >
          Bakery
        </Link>
        <Link
          to="/all-categories"
          className="bg-purple-400 text-zinc-800 text-sm px-3.5 py-1.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md"
        >
          Beverages
        </Link>
        <Link
          to="/all-categories"
          className="bg-sky-600 text-white text-sm px-3.5 py-1.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md"
        >
          Frozen
        </Link>
      </div>
    </div>
  );
}

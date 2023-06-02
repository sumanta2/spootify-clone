"use client";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import {RxCaretLeft,RxCaretRight} from 'react-icons/rx'
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Button from "./Button";


interface HeaderProps{
    children: React.ReactNode;
    className?: string;
}
const Header: React.FC<HeaderProps> = ({ children, className }) => {
    const router = useRouter();

    const handleLogout = () => {
        //Handle logout in future
    }
  return (
      <div className={twMerge(`h-fit bg-gradient-to-b from-emerald-800 p-6`, className)}>
          <div className="w-full mb-4 flex items-center justify-between">
              <div className="hidden md:flex gap-x-2 items-center">
                  <button onClick={()=> router.back()} className=" bg-black rounded-full flex items-center justify-center hover:opacity-75 transition">
                      <RxCaretLeft className="text-white" size={35} />
                  </button>
                  <button onClick={()=> router.forward()} className=" bg-black rounded-full flex items-center justify-center hover:opacity-75 transition">
                      <RxCaretRight className="text-white" size={35} />
                  </button>
              </div>
              <div className="flex md:hidden gap-x-2 items-center">
                  <button className=" rounded-full p-2 bg-white flex item-center justify-center hover:opacity-75 transition ">
                      <HiHome className="text-black" size={20} />
                  </button>
                  <button className=" rounded-full p-2 bg-white flex item-center justify-center hover:opacity-75 transition ">
                      <BiSearch className="text-black" size={20} />   
                  </button>
                  
              </div>
              <div className="flex justify-between items-center gap-x-4 ">
                  <Button onClick={()=>{}} className="bg-transparent text-neutral-300 font-medium text-xs "> 
                      Sign<span className="opacity-0" >_</span>Up
                  </Button>
                  <Button onClick={()=>{}} className="bg-white px-6 py-2 text-xs "> 
                     Log<span className="opacity-0" >_</span>in
                  </Button>
              </div>
          </div>
          {children}
    </div>
  )
}

export default Header
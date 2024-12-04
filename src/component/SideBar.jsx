import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { LayoutGrid } from 'lucide-react';
import { Flame } from 'lucide-react';
import { Play } from 'lucide-react';
import { Heart } from 'lucide-react';
import { BookCopy } from 'lucide-react';



const SideBar = () => {
  const [mobileToggle, setMobileToggle] = useState(false);

  const toggle = () => {
    setMobileToggle(!mobileToggle);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggle}
        className="absolute top-4 left-4 z-50 md:hidden text-white"
      >
        {mobileToggle ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-[8rem] bg-neutral-900 transform  ${
          mobileToggle ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 rounded-tl-lg rounded-bl-lg rounded-tr-full `}
      >
        {/* Sidebar Content */}
        <div className="flex flex-col items-center pt-10 justify-center ">
          <ul className="space-y-10 text-white text-sm">
            <img className="h-10 w-10 rounded-lg" src="https://yt3.googleusercontent.com/9cW-NWLQ_MPbSlJSrToW5r5nIjafTHTtqSqM-YjVPFb_ojVlhmDLDV-GGSQ_gJbMFAhpEi8_=s900-c-k-c0x00ffffff-no-rj" alt="Image" />
            
           
            <div className="text-center flex justify-center items-center flex-col pt-2 bg-neutral-900 hover:bg-slate-800 rounded-md">  <Link to="/feed"><LayoutGrid size={15} className="mx-auto" />Feed</Link></div>
            <div className="text-center flex justify-center items-center flex-col pt-2  bg-neutral-900 hover:bg-slate-800 rounded-md"> <Link to="/trending"><Flame size={15} className="mx-auto"/>Trending</Link></div>
           <div className="text-center flex justify-center items-center flex-col pt-2  bg-neutral-900 hover:bg-slate-800 rounded-md">  <Link to="/player"><Play size={15} className="mx-auto"/>Player</Link></div>
           <div className="text-center flex justify-center items-center flex-col pt-2  bg-neutral-900 hover:bg-slate-800 rounded-md">  <Link to="/favourite"><Heart size={15} className="mx-auto"/>Favourite</Link></div>
           <div className="text-center flex justify-center items-center flex-col pt-2  bg-neutral-900 hover:bg-slate-800 rounded-md">   <Link to="/library"><BookCopy size={15} className="mx-auto" /> Library</Link></div>
            
           
           
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;

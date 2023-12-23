import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom';

import useData from '../../context/ContextApi'
import ytlogo from "../../assets/images/yt-logo-mobile.png"

import { BiSearch } from "react-icons/bi";
import { MdVideoCall } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

const Header = () => {

    const [searchQuery, setSearchQuery] = useState("")

    const navigate = useNavigate()

    const {loading} = useData()

    // Input Search
    const searchQueryHandler = (e) => {
        if((e?.key === "Enter" || e === "searchButton") && searchQuery?.length > 0){
            navigate(`/searchResult/${searchQuery}`)
        }
    }

    


  return (
    <div className='flex items-center justify-between  h-14 dark:bg-black mx-3 '>
        
        {/* LOGO */}
      <div className='flex h-9 items-center justify-center'>
        {/* MENU BAR */}

        <div className=''>
             <IoMdMenu className='text-2xl cursor-pointer mr-4' />
        </div>
        <Link to="/">
            <img 
            className='h-full hidden md:block'
            src={ytlogo} 
            alt="You-Tube" />
            <span className='font-bold text-4xl cursor-pointer hidden md:block'>YouTube</span>

            <img 
            className='h-full  md:hidden'
            src={ytlogo} 
            alt="You-Tube" />
        </Link>
      </div>

    {/* SEARCH */}
        <div className='group flex items-center'>
            <div className='flex h-8 border border-[#303030]  rounded-l-3xl'>

                <div className='w-10 flex items-center justify-center hidden group-focus-within:flex '>
                  <BiSearch className='text-xl' />
                </div>

                <input 
                type="text" 
                className='bg-transparent outline-none text-black w-44 md:pl-0 md:w-64 lg:w-[500px]'
                />
            </div>

                <button className='w-[40px] h-8 border border-l-0 border-[#303030] flex items-center justify-center rounded-r-3xl'>
                    <BiSearch className='text-xl'  />
                </button>
        </div>
        {/* PROFILE */}
        <div className='flex items-center justify-center'>
            <div className='flex items-center justify-center gap-3'>
                <div className='cursor-pointer'>
                    <p>🌞</p>
                </div>
                <div className='flex items-center justify-center h-10 w-10 rounded-full '>
                    <MdVideoCall className='text-3xl cursor-pointer' />
                </div>

                <div className='flex items-center justify-center h-10 w-10 rounded-full'>
                    <FaRegBell className='text-3xl cursor-pointer' />
                </div>

                <div className='flex h-8 w-8 overflow-hidden rounded-full '>
                    <img src="https://robohash.org/stefan-three"  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header

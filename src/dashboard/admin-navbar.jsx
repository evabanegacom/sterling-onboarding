import React from 'react'
import logo from '../assets/logo.svg';
import notification from '../assets/notification.svg';
import { IoIosArrowDown } from "react-icons/io";

const AdminNavbar = () => {
    return (
        <div className='flex items-center border-b border-gray-300'>
            <div className='ps-5 py-3 w-4/5 flex justify-between'>
                <a href='/'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='pe-3 border-r border-gray-500'><img src={notification} alt='notification' /></div>
            </div>
            <div className='flex justify-between items-center flex-1 px-3'>
                <img src={logo} alt='profile' className='rounded-full w-10 h-10' />
                <div className='flex flex-col'>
                    <h3 className='text-black font-bold text-sm'>Srerling Administrator</h3>
                    <p className='text-sm text-gray-500 font-base'>Corporate user</p>
                </div>
                <IoIosArrowDown />
            </div>
        </div>
    )
}

export default AdminNavbar
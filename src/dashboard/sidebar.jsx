import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './dashboard.css';
import { PiSquaresFourFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
import { IoPeopleCircle } from "react-icons/io5";
import { FaFileMedical } from "react-icons/fa";
import logoutIcon from '../assets/logout-icon.svg';
import sync from '../assets/sync-icon.svg';

const Sidebar = () => {
  const location = useLocation();


  const dashboardLinks = [
    { id: 1, name: 'Dashboard', link: '/admin/overview', icon: <PiSquaresFourFill size={20}/> },
    { id: 2, name: 'Profile New Hires', link: '/admin/profile-new-hires', icon: <FaFileMedical size={20}/> },
    { id: 3, name: 'New Onboarding Batch', link: '/admin/onboarding-batch', icon: <IoPeopleCircle size={20}/> },
    { id: 4, name: 'Documents', link: '/admin/onboarding-document', icon: <FaBookBookmark size={20}/> },
    { id: 5, name: 'Job/Role Upload', link: '/admin/job-role-upload', icon: <FaUser size={20}/> },
    { id: 6, name: 'Events and activities', link: '/admin/hmo-table', icon: <FaUser size={20}/> },
    { id: 7, name: 'Messaging live chats', link: '/admin/hmo-table', icon: <FaUser size={20}/> },
    { id: 8, name: 'Reports and surveys', link: '/admin/hmo-table', icon: <FaUser size={20}/> },
  ];

  return (
    <aside className='sidebar'>
      <ul  className='bg-white pt-3'>
        {dashboardLinks.map((link, index) => (
    <li key={link.id} className={`ps-4 ${location.pathname === link.link ? 'nav-active' : ''} ${index !== 0 ? 'mt-2' : ''}`}>
    <NavLink
              to={link.link}
              className={({ isActive }) =>
                isActive
                  ? 'nav-link nav-link-active text-sm font-medium flex items-center justify-start rounded ps-4 gap-2 py-4 mt-5'
                  : 'nav-link text-sm font-medium flex items-center justify-start rounded ps-4 gap-2 py-4'
              }
            >
              {link.icon}
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className='ps-3 mt-20'>
      <button className='custom-green w-full flex bg-white py-3 ps-5 justify-start gap-3'>
          <img src={sync} alt='sync with hchub' />
          <span className='font-medium text-sm'>Sync with HcHub</span>
        </button>

        <button className='w-full flex bg-white py-3 ps-5 justify-start gap-3'>
          <img src={logoutIcon} alt='logout' />
          <span className='text-red-500 font-medium text-sm'>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;

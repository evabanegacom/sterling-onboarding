import React from 'react'
import Sidebar from './sidebar'
import { Outlet } from 'react-router-dom'
import AdminNavbar from './admin-navbar'
const Dashboard = () => {
  return (
    <div>
      <AdminNavbar />
    <div className='flex bg-gray-50'>
        <Sidebar />
        <section className='flex-1'>
            <Outlet />
        </section>
    </div>
    </div>
  )
}

export default Dashboard
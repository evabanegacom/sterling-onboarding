import React from 'react'
import moveStaff from '../../assets/move-staff.svg';
import { CiSearch } from "react-icons/ci";

const OnboardedBatches = () => {
const employees = [
    {
        id: 1,
        image: 'https://via.placeholder.com/300',
        name: 'John Doe',
        email: 'janedoe@gmail.com',
        department: 'Engineering',
    },
    {
        id: 2,
        image: 'https://via.placeholder.com/300',
        name: 'John Doe',
        email: 'janedoe@gmail.com',
        department: 'Engineering',
    },
    {
        id: 3,
        image: 'https://via.placeholder.com/300',
        name: 'John Doe',
        email: 'janedoe@gmail.com',
        department: 'Engineering',
    },
    {
        id: 4,
        image: 'https://via.placeholder.com/300',
        name: 'John Doe',
        email: 'janedoe@gmail.com',
        department: 'Engineering',
    },
    {
        id: 5,
        image: 'https://via.placeholder.com/300',
        name: 'John Doe',
        email: 'janedoe@gmail.com',
        department: 'Engineering',
    },
    {
        id: 6,
        image: 'https://via.placeholder.com/300',
        name: 'John Doe',
        email: 'janedoe@gmail.com',
        department: 'Engineering',
    },
    {
        id: 7,
        image: 'https://via.placeholder.com/300',
        name: 'John Doe',
        email: 'janedoe@gmail.com',
        department: 'Engineering',
    },
]
  return (
    <div>
        <div className='flex bg-white py-3 items-center px-3'>
            <div className='neutral-black text-xl font-bold'>Tech AcDEmy batch</div>
            <button className='ml-auto'><img src={moveStaff} alt='move-staff' /></button>
            <div className='relative'>
            <CiSearch size={30} className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
            <input
              type='text'
              placeholder='Search'
              className='border border-gray-300 rounded-lg pl-10 pr-3 py-3'
            />
          </div>
        </div>
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-green-50'>
        {employees.map((employee) => (
                <div key={employee?.id} className='flex items-center flex-col gap-3 py-8 text-center shadow-md'>
                    <img src={employee.image} alt='employee' className='w-12 h-12 rounded-full' />
                    <div className='space-y-3'>
                        <h3 className='neutral-black font-bold text-base'>{employee.name}</h3>
                        <p className='text-sm font-semibold custom-green'>{employee.department}</p>
                        <p style={{ color: '#202224'}} className='text-sm'>{employee.email}</p>
                    </div>
                </div>
        ))}
        </div>
    </div>
  )
}

export default OnboardedBatches
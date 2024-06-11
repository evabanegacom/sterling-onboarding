import React, { useState } from 'react';
import moveStaff from '../../assets/move-staff.svg';
import { CiSearch } from "react-icons/ci";
import moveStaffToBatch from '../../assets/move-staff-to-batch.svg';

const OnboardedBatches = () => {
    const [showCheckboxes, setShowCheckboxes] = useState(false);

    const [selectedEmployees, setSelectedEmployees] = useState([]);

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

    const toggleCheckboxes = () => {
        setShowCheckboxes(!showCheckboxes);
    };

    const handleCheckboxChange = (employee) => {
        if (selectedEmployees.some(e => e.id === employee.id)) {
            setSelectedEmployees(selectedEmployees.filter(e => e.id !== employee.id));
        } else {
            setSelectedEmployees([...selectedEmployees, employee]);
        }
    };

    return (
        <div>
            <div className='flex bg-white py-3 items-center px-3'>
                <div className='neutral-black text-xl font-bold'>Tech AcDEmy batch</div>
                <button className='ml-auto' onClick={toggleCheckboxes}><img src={moveStaff} alt='move-staff' /></button>
                <div className='relative'>
                    <CiSearch size={30} className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
                    <input
                        type='text'
                        placeholder='Search'
                        className='border border-gray-300 rounded-lg pl-10 pr-3 py-3'
                    />
                </div>
            </div>
            <div className='flex items-center'>
                <div className='neutral-black font-black text-base'>
                    
                    {selectedEmployees?.length} staff selected
                </div>
                <button className='ml-auto mr-10 text-red-500 font-bold'>Cancel</button>
                <button className='custom-bg-green text-white flex items-center font-bold gap-2 w-40 rounded-lg justify-center p-2'><img src={moveStaffToBatch} alt='move staff' />Move staff</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bg-green-50 mt-5'>
                {employees.map((employee) => (
                    <div key={employee.id} className='relative flex items-center flex-col gap-3 py-8 text-center shadow-md bg-white rounded-lg'>
                        {showCheckboxes && (
                            <input
                                type='checkbox'
                                className='absolute top-2 left-2'
                                checked={selectedEmployees.some(e => e.id === employee.id)}
                                onChange={() => handleCheckboxChange(employee)}
                            />
                        )}
                        <img src={employee.image} alt='employee' className='w-12 h-12 rounded-full' />
                        <div className='space-y-3'>
                            <h3 className='neutral-black font-bold text-base'>{employee.name}</h3>
                            <p className='text-sm font-semibold custom-green'>{employee.department}</p>
                            <p style={{ color: '#202224' }} className='text-sm'>{employee.email}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OnboardedBatches;


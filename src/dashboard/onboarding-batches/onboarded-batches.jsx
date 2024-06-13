import React, { useState } from 'react';
import moveStaff from '../../assets/move-staff.svg';
import { CiSearch } from "react-icons/ci";
import moveStaffToBatch from '../../assets/move-staff-to-batch.svg';
import { FiUploadCloud, FiX, FiSearch } from 'react-icons/fi';

import './onboarding-batches.css';
import Select, { components } from 'react-select';
import { Modal } from "antd";

const OnboardedBatches = () => {
    const [showCheckboxes, setShowCheckboxes] = useState(false);
    
    const batches = Array.from({ length: 20 }, (_, id) => ({
        id,
        firstName: `FirstName${id}`,
        lastName: `LastName${id}`,
        email: `email${id}@company.com`,
        department: `Department${Math.floor(Math.random() * 5) + 1}`,
    }));

    const batchOptions = batches.map(employee => ({
        value: employee.id,
        label: `${employee.firstName} ${employee.lastName} - ${employee.email} - ${employee.department}`,
        firstName: employee.firstName,
        lastName: employee.lastName,
    }));

    const [selectedBatches, setSelectedBatches] = useState([]);

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

    const [selectedEmployees, setSelectedEmployees] = useState([]);

    const CustomMultiValue = (props) => {
        return (
            <components.MultiValue {...props}>
                <components.MultiValueLabel {...props}>
                    {props.data.firstName} {props.data.lastName}
                </components.MultiValueLabel>
            </components.MultiValue>
        );
    };

    const CustomSingleValue = (props) => {
        return (
            <components.SingleValue {...props}>
                {props.data.firstName} {props.data.lastName}
            </components.SingleValue>
        );
    };

    const CustomControl = (props) => (
        <components.Control {...props}>
            <FiSearch className="ml-2 text-gray-500" />
            {props.children}
        </components.Control>
    );

    const handleBatchChange = (selectedOptions) => {
        setSelectedBatches(selectedOptions);
    };

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

    const cancelSelection = () => {
        setSelectedEmployees([])
    }

    return (
        <div className='onboarded-batches'>
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
            {selectedEmployees?.length > 0 ?
            <div className='flex items-center'>
                <div className='neutral-black font-black text-base'>
                <div className="selection-indicator" />
                {selectedEmployees?.length} staff selected
                </div>
                <button onClick={cancelSelection} className='ml-auto mr-10 text-red-500 font-bold'>Cancel</button>
                <button className='custom-bg-green text-white flex items-center font-bold gap-2 w-40 rounded-lg justify-center p-2'><img src={moveStaffToBatch} alt='move staff' />Move staff</button>
            </div> : null}
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
            <form className='stats bg-white gap-2 mt-5 upload-form px-5 py-8 rounded-xl flex flex-col items-center border w-2/5 mx-auto'>
                    <h3 className='dark-color font-bold text-2xl'>Single AD Credentials</h3>
                   
                    <div className='flex flex-col w-full'>
                        <label>Employees</label>
                        <Select
                            isMulti
                            options={batchOptions}
                            value={selectedBatches}
                            onChange={handleBatchChange}
                            components={{ MultiValue: CustomMultiValue, SingleValue: CustomSingleValue, Control: CustomControl }}
                        />
                    </div>
                    <button type='submit' className='custom-bg-green py-2 mt-3 text-white font-bold w-60 rounded-lg'>Submit</button>
                </form>
        </div>
    );
};

export default OnboardedBatches;


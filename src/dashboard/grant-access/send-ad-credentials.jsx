import React, { useState } from 'react';
import { FiUploadCloud, FiX, FiSearch } from 'react-icons/fi';
import Select, { components } from 'react-select';
import back from '../../assets/back-icon.svg';

const SendAdCredentials = ({ showForm, setShowForm }) => {
    const employees = Array.from({ length: 20 }, (_, id) => ({
        id,
        firstName: `FirstName${id}`,
        lastName: `LastName${id}`,
        email: `email${id}@company.com`,
        department: `Department${Math.floor(Math.random() * 5) + 1}`,
    }));

    const employeeOptions = employees.map(employee => ({
        value: employee.id,
        label: `${employee.firstName} ${employee.lastName} - ${employee.email} - ${employee.department}`,
        firstName: employee.firstName,
        lastName: employee.lastName,
    }));

    const [selectedEmployees, setSelectedEmployees] = useState([]);

    const handleEmployeeChange = (selectedOptions) => {
        setSelectedEmployees(selectedOptions);
    };

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

    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        phone: '',
        role: '',
        department: '',
        location: '',
        employeeID: '',
        adCredentials: '',
        gender: '',
        buddy: '',
        workTools: '',
    });

    const [bulkUpload, setBulkUpload] = useState({
        batchName: '',
        branch: '',
        file: '',
    });

    const [activeButton, setActiveButton] = useState('singleUpload');

    const handleChange = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userDetails);
    };

    if (!showForm) {
        return null;
    }

    return (
        <div className='w-full ps-3'>
            <div className='flex gap-2 justify-center'>
                <button className='p-3 rounded-lg text-sm font-bold' style={{ background: activeButton === 'singleUpload' ? '#4B9560' : '', color: activeButton === 'singleUpload' ? '#fff' : '#495057' }} onClick={() => setActiveButton('singleUpload')}>Single Upload</button>
                <button className='p-3 rounded-lg text-sm font-bold' style={{ background: activeButton === 'bulkUpload' ? '#4B9560' : '', color: activeButton === 'bulkUpload' ? '#fff' : '#495057' }} onClick={() => setActiveButton('bulkUpload')}>Bulk Upload</button>
            </div>
            {activeButton === 'singleUpload' ?
                <form onSubmit={handleSubmit} className='stats bg-white gap-2 mt-5 upload-form px-5 py-8 rounded-xl flex flex-col items-center border w-2/5 mx-auto'>
                    <h3 className='dark-color font-bold text-2xl'>Single AD Credentials</h3>
                   
                    <div className='flex flex-col w-full'>
                        <label>Employees</label>
                        <Select
                            isMulti
                            options={employeeOptions}
                            value={selectedEmployees}
                            onChange={handleEmployeeChange}
                            components={{ MultiValue: CustomMultiValue, SingleValue: CustomSingleValue, Control: CustomControl }}
                        />
                    </div>
                    <button type='submit' className='custom-bg-green py-2 mt-3 text-white font-bold w-60 rounded-lg'>Submit</button>
                </form>
                :
                <form className='stats bg-white gap-2 mt-5 upload-form px-5 py-8 rounded-xl flex flex-col items-center border w-2/5 mx-auto'>
                    <h3 className='dark-color font-bold text-2xl'>Bulk AD Request</h3>
                    <div className='flex flex-col w-full'>
                        <label>Batch Name</label>
                        <input type='text' />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label>Branch</label>
                        <input type='text' />
                    </div>
                    <p className='text-start w-full text-gray-800 text-sm'>Upload Excel document</p>

                    <div className="flex flex-col items-center justify-center rounded-lg border-gray-400 h-28 w-full text-center cursor-pointer bg-gray-50">
                        <input type="file" className="hidden" id="file-upload" />
                        <label htmlFor="file-upload" className="flex flex-col items-center cursor-pointer">
                            <FiUploadCloud className="text-gray-700 text-2xl mb-4" />

                            <span className="text-red-500 text-sm font-bold">Click to upload</span>
                        </label>
                    </div>

                    <div className='text-start w-full mt-2 text-sm font-semibold'><span className='text-gray-700'>Need an excel template?</span> <button className='custom-green'>Download Here</button></div>
                    <button className='custom-bg-green py-2 mt-3 text-white font-bold w-60 rounded-lg'>Submit</button>
                </form>
            }
        </div>
    );
};

export default SendAdCredentials;

import { useState } from 'react'
import back from '../../assets/back-icon.svg';
import Select, { components } from 'react-select';
import { FiUploadCloud, FiX, FiSearch } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io';
import { Modal, Button } from 'antd';

const AddStaffToBatch = ({ showForm, setShowForm }) => {
    const handleChange = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value
        })
    }

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

    const CustomMultiValue = (props) => {
        return (
            // <components.MultiValue {...props}>
            //     <components.MultiValueLabel {...props}>
            //         {props.data.firstName} {props.data.lastName}
            //     </components.MultiValueLabel>
            // </components.MultiValue>
            <components.MultiValue {...props}>
            <div className="w-1/3 flex items-center justify-center p-1">
                <components.MultiValueLabel {...props}>
                    {props.data.firstName} {props.data.lastName}
                </components.MultiValueLabel>
                <components.MultiValueRemove {...props}>
                    <div className="bg-red-500 text-white rounded-full p-1 cursor-pointer">
                        <IoMdClose size={12} />
                    </div>
                </components.MultiValueRemove>
            </div>
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

    const handleEmployeeChange = (selectedOptions) => {
        setSelectedEmployees(selectedOptions);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userDetails)
    }
    if (!showForm) {
        return null
    }
    return (
        <Modal
        // title="Select Destination Batch"
        open={showForm}
        onCancel={() => setShowForm(false)}
        footer={null}
        bodyStyle={{ padding: '0 24px 24px 24px' }}
        width={700}>
        <div className='w-full ps-3'>
            {/* <div className='flex gap-2 items-center mt-3'>
                <button onClick={() => setShowForm(false)}><img src={back} alt='goback' /></button>
                <span className='text-2xl font-semibold neutral-black'>Create Onboarding Batch</span>
            </div> */}


            <form className='stats bg-white gap-2 mt-5 upload-form px-5 py-8 rounded-xl flex flex-col items-center border w-1/2 mx-auto'>
                <h3 className='dark-color font-bold text-2xl'>Add staff to batch</h3>
                <div className='flex flex-col w-full'>
                    <label>Batch Name</label>
                    <input type='text' />
                </div>
                <div className='flex flex-col w-full'>
                    <label>Batch Year</label>
                    <input type='text' />
                </div>


                <div className='flex flex-col w-full'>
                    <label>Employees</label>

                    <Select
                        components={{
                            MultiValue: CustomMultiValue,
                            SingleValue: CustomSingleValue,
                            Control: CustomControl,
                        }}
                        isMulti
                        value={selectedEmployees}
                        onChange={handleEmployeeChange}
                        options={employeeOptions}
                        classNamePrefix="custom-select"
                        styles={{
                            multiValue: (base) => ({
                                ...base,
                                display: 'flex',
                                flexWrap: 'wrap',
                            }),
                            valueContainer: (base) => ({
                                ...base,
                                display: 'flex',
                                flexWrap: 'wrap',
                            }),
                        }}
                    />
                </div>
                <button className='custom-bg-green py-2 mt-3 text-white font-bold w-60 rounded-lg'>Submit</button>
            </form>
        </div>
    </Modal>
    )
}

export default AddStaffToBatch





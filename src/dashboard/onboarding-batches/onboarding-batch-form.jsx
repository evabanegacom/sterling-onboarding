import { useState } from 'react'
import { FiUploadCloud } from "react-icons/fi";
import back from '../../assets/back-icon.svg';

const OnboardingBatchForm = ({ showForm, setShowForm}) => {

    const [bulkUpload, setBulkUpload] = useState({
        batchName: '',
        branch: '',
        file: '',
    })

    const [activeButton, setActiveButton] = useState('singleUpload')

    const handleChange = (e) => {
        setUserDetails({
            ...userDetails,
            [e.target.name]: e.target.value
        })
    }

    const employees = [
        {
            id: 1,
            name: 'John Doe',
            email: 'jonhdoe@sterling.ng',
            department: 'Engineering',
        },
        {
            id: 2,
            name: 'Jane Doe',
            email: 'janedoe@sterling.ng',
            department: 'Engineering',
        },
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userDetails)
    }
    if (!showForm) {
        return null
    }
    return (
        <div className='w-full ps-3'>
            <div className='flex gap-2 items-center mt-3'>
                <button onClick={() => setShowForm(false)}><img src={back} alt='goback' /></button>
                <span className='text-2xl font-semibold neutral-black'>Create Onboarding Batch</span>
            </div>
           
                
                <form className='stats bg-white gap-2 mt-5 upload-form px-5 py-8 rounded-xl flex flex-col items-center border w-1/2 mx-auto'>
                    <h3 className='dark-color font-bold text-2xl'>Create Onboarding batch</h3>
                    <div className='flex flex-col w-full'>
                        <label>Batch Name</label>
                        <input type='text' />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label>Batch Year</label>
                        <input type='text' />
                    </div>


                    <div className='flex flex-col w-full'>
                        <label>Select Employees</label>
                        <input type='text' />
                    </div>

                    <button className='custom-bg-green py-2 mt-3 text-white font-bold w-60 rounded-lg'>Submit</button>
                </form>
        </div>
    )
}

export default OnboardingBatchForm
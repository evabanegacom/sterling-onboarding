import { useState } from 'react'
import { FiUploadCloud } from "react-icons/fi";
import back from '../../assets/back-icon.svg'	
const NewHiresForm = ({ showForm, setShowForm}) => {
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
    })

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
                <span className='text-2xl font-semibold neutral-black'>Profile new hires</span>
            </div>
            <div className='flex gap-2 justify-center'>
                <button className='p-3 rounded-lg text-sm font-bold' style={{ background: activeButton === 'singleUpload' ? '#4B9560' : '', color: activeButton === 'singleUpload' ? '#fff' : '#495057' }} onClick={() => setActiveButton('singleUpload')}>Single Upload</button>
                <button className='p-3 rounded-lg text-sm font-bold' style={{ background: activeButton === 'bulkUpload' ? '#4B9560' : '', color: activeButton === 'bulkUpload' ? '#fff' : '#495057' }} onClick={() => setActiveButton('bulkUpload')}>Bulk Upload</button>
            </div>
            {activeButton === 'singleUpload' ?
                <form onSubmit={handleSubmit} className='stats bg-white gap-2 mt-5 upload-form px-5 py-10 rounded-xl flex flex-col items-center border w-2/5 mx-auto'>
                    <h3 className='dark-color font-bold text-2xl'>Add New Hire</h3>
                    <div className='flex flex-col w-full'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' name='name' value={userDetails.name} onChange={handleChange} />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name='email' value={userDetails.email} onChange={handleChange} />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor='phone'>Phone</label>
                        <input type='text' name='phone' value={userDetails.phone} onChange={handleChange} />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor='role'>Role</label>
                        <input type='text' name='role' value={userDetails.role} onChange={handleChange} />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor='department'>Department</label>
                        <input type='text' name='department' value={userDetails.department} onChange={handleChange} />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor='location'>Location</label>
                        <input type='text' name='location' value={userDetails.location} onChange={handleChange} />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor='employeeId'>Employee ID</label>
                        <input type='text' name='employeeId' value={userDetails.employeeId} onChange={handleChange} />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor='adCredentials'>AD Credentials</label>
                        <input type='text' name='adCredentials' value={userDetails.adCredentials} onChange={handleChange} />
                    </div>

                    <div className='flex flex-col w-full'>
                        <label htmlFor='buddy'>Buddy</label>
                        <input type='text' name='buddy' value={userDetails.buddy} onChange={handleChange} />
                    </div>

                    <div className='w-full text-left neutral-black-2 text-sm'>Work tools</div>
                    <div className='flex items-center gap-3 justify-start w-full'>
                        <input type='checkbox' name='workTools' value='laptop' id='laptop' onChange={handleChange} />
                        <label htmlFor='laptop'>Laptop</label>
                        <input type='checkbox' name='workTools' value='email' id='email' onChange={handleChange} />
                        <label htmlFor='email' className='neutral-grey-2'>Email</label>
                        <input type='checkbox' name='workTools' value='slack' id='slack' onChange={handleChange} />
                        <label htmlFor='slack'>Slack</label>
                    </div>
                    <button className='custom-bg-green w-60 rounded-lg text-base font-semibold text-white py-2 mt-2'>Submit</button>
                </form>
                :
                <form className='stats bg-white gap-2 mt-5 upload-form px-5 py-8 rounded-xl flex flex-col items-center border w-2/5 mx-auto'>
                    <h3 className='dark-color font-bold text-2xl'>Add New Hire</h3>
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
                </form>}
        </div>
    )
}

export default NewHiresForm
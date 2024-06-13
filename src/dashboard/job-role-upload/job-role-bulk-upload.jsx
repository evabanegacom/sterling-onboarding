import React from 'react'
import { FiUploadCloud } from 'react-icons/fi';
import back from '../../assets/back-icon.svg'

const JobRoleBulkUpload = ({ setToggleViews}) => {
  return (
    <div>
        <div className='flex gap-2 items-center mt-3'>
        <button onClick={() => setToggleViews('main view')}><img src={back} alt='goback' /></button>
        <span className='text-2xl font-semibold neutral-black'>Job Role/Upload</span>
      </div>
         <form className='stats bg-white gap-2 mt-5 upload-form px-5 py-8 rounded-xl flex flex-col items-center border w-2/4 mx-auto'>
                    <h3 className='dark-color font-bold text-2xl'>Add Employee Details</h3>
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
    </div>
  )
}

export default JobRoleBulkUpload
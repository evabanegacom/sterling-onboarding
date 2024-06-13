import React from 'react'
import back from '../../assets/back-icon.svg'
import './job-role.css';
import JobRoleForm from './job-role-form';

const JobRoleDetails = ({ selectedUser, setToggleViews }) => {
  const [showJobForm, setShowJobForm] = React.useState(false)

  return (
    <>
    {showJobForm ? <JobRoleForm setToggleViews={setToggleViews}/> :
    <div>
      <div className='flex gap-2 items-center mt-3'>
        <button onClick={() => setToggleViews('main view')}><img src={back} alt='goback' /></button>
        <span className='text-2xl font-semibold neutral-black'>Job Role/Upload</span>
      </div>

      <div className='job-details-header h-64 flex items-center mt-3'>
        <div className='flex items-center justify-between w-full px-20'>
          <div className='flex items-center gap-2'>
            <div className='bg-white rounded-full p-8 font-semibold text-center custom-green text-5xl flex m-auto'>JD</div>
            <div className=''>
              <div className='custom-green font-medium text-xl'>Jonathan Donald</div>
              <div className='custom-green text-base'>Jonathan.donald@gmail.com</div>
            </div>
          </div>
          <button onClick={() => setShowJobForm(true)} className='w-80 custom-bg-green p-2 rounded-lg text-white text-sm font-bold'>Add details</button>
        </div>
      </div>
    </div>}
    </>
  )
}

export default JobRoleDetails
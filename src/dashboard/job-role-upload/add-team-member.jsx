import React from 'react'

const AddTeamMember = () => {
  return (
    <div>
        <form className='stats bg-white gap-2 mt-5 upload-form px-5 py-8 rounded-xl flex flex-col items-center border w-2/5 mx-auto'>
                    <h3 className='dark-color font-bold text-2xl'>Add Team Member</h3>
                    <div className='flex flex-col w-full'>
                        <label>Name</label>
                        <input type='text' />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label>Positipn</label>
                        <input type='text' />
                    </div>
                    <button className='custom-bg-green py-2 mt-3 text-white font-bold w-60 rounded-lg'>Add New Member</button>
                </form>
    </div>
  )
}

export default AddTeamMember
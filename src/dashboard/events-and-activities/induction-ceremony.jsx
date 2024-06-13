import { useState } from 'react'

const InductionCeremony = () => {
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

  return (
    <form onSubmit={handleSubmit} className='stats bg-white gap-2 mt-5 upload-form px-5 py-10 rounded-xl flex flex-col items-center border w-2/5 mx-auto'>
                    <h3 className='dark-color font-bold text-2xl'>Induction Ceremony</h3>
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
  )
}

export default InductionCeremony
import { useState } from 'react'
import statsIcon from '../../assets/stats-icon.svg';
import HiresTable from '../hires-table';
import JobRoleDetails from './job-role-details';

const JobRoleUpload = () => {
    const [ showForm, setShowForm ] = useState(false);
    const [ selectedUser, setSelectedUser ] = useState(null);
  const stats = [
    {
      id: 1,
      title: 'Complete Registration',
      number: 100,
      icon: statsIcon
    },
  ]

  return (
    <>
    {!showForm ?
    <div className='ps-5 pe-10 mt-5'>
      <p className='neutral-black text-2xl font-bold'>Job Role Upload</p>

      <div className='flex justify-between mt-5'>
          <div className='bg-white px-5 py-4 rounded-lg flex justify-between items-center space-x-4 stats'>
            <div>
              <div className='font-semibold text-sm muted-grey'>Total Number Of New Hires</div>
              <div className='mt-2'><span className='text-2xl font-semibold custom-green'>3000 </span><sub className='dark-grey font-bold text-xs'>Since 2017</sub></div>
            </div>
            <div className='flex justify-between items-center'>
              <img src={statsIcon} alt='Total number' className='' />
            </div>
          </div>

          <div><button 
      className="custom-bg-green text-white text-base font-semibold w-56 py-2 rounded-lg">
        Bulk Upload</button></div>
      </div>

      
      <HiresTable setSelectedUser={setSelectedUser} setShowForm={setShowForm}/>
    </div>: <JobRoleDetails showForm={showForm} setShowForm={setShowForm} selectedUser={selectedUser} />}
    </>
  )
}

export default JobRoleUpload
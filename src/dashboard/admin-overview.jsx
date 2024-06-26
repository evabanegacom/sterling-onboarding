import React from 'react'
import statsIcon from '../assets/stats-icon.svg';
import newHires from '../assets/new-hires.svg';	
import onBoardingDoc from '../assets/onboarding-doc.svg';
import jobRoleUpload from '../assets/job-role-upload.svg';
import surveyReport from '../assets/survey-report.svg';
import { useNavigate } from 'react-router-dom';
import GrantAccess from './grant-access/grant-access';
import OverViewChart from './overview-chart';

const AdminOverview = () => {
  const navigate = useNavigate();
  const [ showAccess, setShowAccess ] = React.useState(false);
  const adminActions = [
    {
      id: 1,
      title: 'New Hire Acess',
      icon: newHires,
      onClick: () => setShowAccess(true)
    },

    {
      id: 2,
      title: 'Onboarding Documents',
      icon: onBoardingDoc,
      onClick: () => navigate('/admin/onboarding-batch')
    },

    {
      id: 3,
      title: 'Job Role/Upload',
      icon: jobRoleUpload,
      onClick: () => navigate('/admin/job-role-upload')
    },

    {
      id: 4,
      title: 'Surveys and Reports',
      icon: surveyReport,
      onClick: () => navigate('/admin/survey-report')
    }
  ]

  return (
    <>
    {!showAccess ?
    <div className='ps-5 pe-10 mt-5'>
      <p className='neutral-black text-2xl font-bold'>My Dashboard</p>
      <div className='grid grid-cols-4 gap-5 mt-5'>
        {adminActions.map(action => (
          <div onClick={action?.onClick} key={action.id} className='bg-white cursor-pointer py-5 px-4 rounded-lg flex items-center space-x-4'>
            <img src={action.icon} alt={action.title} />
            <p className='text-base neutral-black font-semibold'>{action.title}</p>
          </div>
        ))}
      </div>
      <p className='mt-5 neutral-black font-semibold text-xl'>Onboarding Batch</p>
      <div className='rounded-lg shadow-md bg-white mt-5 py-5'>
        <div className='flex justify-between items-center px-10 mb-5'>
          <span className='text-lg neutral-black font-bold'>For April</span>
          <select className='custom-select bg-gray-50 rounded-lg p-2 outline-none text-xs font-semibold'>
            <option>May</option>
            <option>October</option>
          </select>
        </div>
      <OverViewChart />

      </div>
    </div>:
    <GrantAccess showAccess={showAccess} setShowAccess={setShowAccess}/>}
    </>
  )
}

export default AdminOverview
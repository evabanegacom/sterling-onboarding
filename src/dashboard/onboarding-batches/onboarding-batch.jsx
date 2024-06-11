import { useState } from 'react'
import statsIcon from '../../assets/stats-icon.svg';
import HiresTable from '../hires-table';
import OnboardingBatchForm from './onboarding-batch-form';
import OnboardedBatches from './onboarded-batches';
import OnboardingTable from './onboarding-table';

const OnboardingBatch = () => {
  const stats = [
    {
      id: 1,
      title: 'Complete Registration',
      number: 100,
      icon: statsIcon
    },
  ]

  const [ showForm, setShowForm ] = useState(false);

  return (
    <>
    {!showForm ? 
    <div className='ps-5 pe-10 mt-5'>
      <p className='neutral-black text-2xl font-bold'>Create Onboarding Batch</p>
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

          <div><button onClick={() => setShowForm(true)}
      className="custom-bg-green text-white text-base font-semibold w-56 py-2 rounded-lg">
        Create Onboarding Batch</button></div>
      </div>
      <OnboardingTable />
    </div>
    :
    <OnboardingBatchForm showForm={showForm} setShowForm={setShowForm} />
    }
    </>
  )
}

export default OnboardingBatch
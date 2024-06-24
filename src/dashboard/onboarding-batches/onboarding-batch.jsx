import { useEffect, useState } from 'react'
import statsIcon from '../../assets/stats-icon.svg';
import OnboardingBatchForm from './onboarding-batch-form';
import OnboardedBatches from './onboarded-batches';
import OnboardingTable from './onboarding-table';
import AddStaffToBatch from './add-staff-toBatch';
import back from '../../assets/back-icon.svg';
import { useNavigate } from 'react-router-dom';

const OnboardingBatch = () => {
  const navigate = useNavigate();
  const stats = [
    {
      id: 1,
      title: 'Complete Registration',
      number: 100,
      icon: statsIcon
    },
  ]

  const [ showForm, setShowForm ] = useState(false);
  const [ showOnboardingBatch, setShowOnboardingBatch ] = useState(false);
  const [ addNewStaff, setAddNewStaff ] = useState(false);
  const [ buttonName, setButtonName ] = useState('Create Onboarding Batch');

  const toggleFormAndButton = () => {
   if(!showOnboardingBatch) {
      setButtonName('Create Onboarding Batch');
   }else {
      setButtonName('Add New Staff');
   }
  }

  const toggleFunctions = () => {
    if(!showOnboardingBatch) {
      setShowForm(true);
    }else if(buttonName === 'Add New Staff' && showOnboardingBatch) {
      setAddNewStaff(true);
    }
  }

  useEffect(() => {
    toggleFormAndButton();
  }, [showOnboardingBatch]);
  return (
    <>
    {!showForm ? 
    <div className='ps-5 pe-10 mt-5'>
      {/* <p className='neutral-black text-2xl font-bold'>Create Onboarding Batch</p> */}
      <div className='flex gap-2 items-center mt-3'>
                <button onClick={() => setShowOnboardingBatch(false)}><img src={back} alt='goback' /></button>
                <span className='text-2xl font-semibold neutral-black'>Create Onboarding Batch</span>
            </div>
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

          <div><button onClick={toggleFunctions}
      className="custom-bg-green text-white text-base font-semibold w-56 py-2 rounded-lg">
        {buttonName} 
        </button></div>
      </div>
      <OnboardingTable showOnboardingBatch={showOnboardingBatch} setShowOnboardingBatch={setShowOnboardingBatch}/>
      <AddStaffToBatch showForm={addNewStaff} setShowForm={setAddNewStaff}/>
    </div>
    :
    <OnboardingBatchForm showForm={showForm} setShowForm={setShowForm} />
    }
    </>
  )
}

export default OnboardingBatch
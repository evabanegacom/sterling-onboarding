import React from 'react'
import statsIcon from '../../assets/stats-icon.svg';
import newGrants from '../../assets/new-grant-access.svg';
import CircularBar from './circular-bar';
import BarChart from './bar-chart';

const ReportsSurveys = () => {
    const stats = [
        {
          id: 1,
          title: 'Total Number Of New Hires',
          number: 100,
          icon: statsIcon,
          color: 'custom-green'
        },
    
        {
            id: 2,
            title: 'New Hires Granted access',
            number: 209,
            icon: newGrants,
            color: 'text-pink-400'
        },

        {
          id: 3,
          title: 'New Hires Granted access',
          number: 209,
          icon: newGrants,
          color: 'text-blue'
      }
      ]

      const onboardingBatches = [
        {
          id: 1,
          title: 'Tech Academy',
          staffCount: 100,
          completion: 100,
          batchYear: 2021
        },

        {
          id: 2,
          title: 'Tech Academy',
          staffCount: 100,
          completion: 100,
          batchYear: 2021
        },

        {
          id: 3,
          title: 'Tech Academy',
          staffCount: 100,
          completion: 100,
          batchYear: 2021
        },

        {
          id: 4,
          title: 'Tech Academy',
          staffCount: 100,
          completion: 100,
          batchYear: 2021
        },

        {
          id: 5,
          title: 'Tech Academy',
          staffCount: 100,
          completion: 100,
          batchYear: 2021
        },
      ]

      const feedback = {
        awesome: 20,
        ok: 20,
        poor: 20,
        veryPoor: 20,
        veryAwesome: 20
      }

  return (
    <>
    <div className='ps-5 pe-10 mt-5'>
      <p className='neutral-black text-2xl font-bold'>Reports And Surveys</p>

        <div className='flex justify-between mt-5'>
            {stats.map(stat => (
                <div key={stat.id} className='bg-white px-5 py-4 rounded-lg flex justify-between items-center space-x-4 stats'>
                    <div>
                        <div className='font-semibold text-sm muted-grey'>{stat.title}</div>
                        <div className='mt-2'><span className={`text-2xl font-semibold ${stat.color}`}>{stat.number} </span><sub className='dark-grey font-bold text-xs'>Since 2017</sub></div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <img src={stat?.icon} alt='Total number' className='' />
                    </div>
                </div>
            ))}
        </div>

        <div className='grid grid-cols-7 gap-5 mt-7'>

           <div className='flex flex-col col-span-4'>

              <div className='shadow-md bg-white rounded-xl p-5'>
                <div className='flex justify-between items-center'>
                  <div className='neutral-black font-semibold text-base'>Onboarding Batches</div>
                  <div className='neutral-black font-semibold text-base'>Batch Year</div>
                </div>
                <div className='mt-3'>
                  {onboardingBatches.map(batch => (
                    <div style={{ borderBottom: '1px solid #298E782B'}} key={batch.id} className='flex justify-between items-center border-b border-gray-200 py-2'>
                      <div>
                        <div className='text-gray-500 font-semibold text-sm'>{batch.title}</div>
                        <div className='text-gray-400 text-xs font-normal'>{`${batch.staffCount} staff - ${batch.completion}% complete`}</div>
                      </div>
                      <div className='custom-green font-bold text-base'>{batch.batchYear}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className='shadow-md bg-white mt-5 rounded-xl p-5'>
                <div className='border-b border-gray-3 py-2 00 neutral-black font-semibold text-base flex items-center justify-between'>
                  <div className='flex flex-col'><span className='text-gray-500 font-normal text-lg'>Completed</span><span className='stats-color font-bold text-xl'>1300</span></div>
                  <div className='stats-color font-bold text-xl'>Staff Onboarded</div>
                  <div className='flex flex-col'><span className='text-red-500 font-normal text-lg'>Incomplete</span><span className='stats-color font-bold text-xl'>600</span></div>
                </div>
                <div className='mt-3 flex justify-center'>
                <CircularBar percentage={70} beforeBg='#DBF1F6' statisticsBg='#009CBD' />

                </div>
              </div>
           </div>

           <div className='shadow-md bg-white col-span-3 rounded-lg p-5'>
              <div className='flex justify-between border-b border-gray-200 pb-2'>
                <div>
                  <div className='flex flex-col'>
                    <span className='text-gray-500'>Monthly Activity</span>
                    <span className='stats-color text-xl font-bold'>Overall Feedback</span>
                  </div>
                </div>
                <div>
                  <button className='bg-gray-100 text-sm p-3 text-gray-500 rounded-lg'>View More</button>
                </div>
              </div>
              <BarChart percentage={feedback} beforeBg='#DBF1F6' statisticsBg='#009CBD' />
           </div>
        </div>
    </div>
    </>
  )
}

export default ReportsSurveys
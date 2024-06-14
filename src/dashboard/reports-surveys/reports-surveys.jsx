import React from 'react'
import statsIcon from '../../assets/stats-icon.svg';
import newGrants from '../../assets/new-grant-access.svg';

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
        }
      ]
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
            <div><button
      className="custom-bg-green text-white text-base font-semibold w-56 py-2 rounded-lg">
        Report And Surveys</button></div>
      
        </div>
    </div>
    </>
  )
}

export default ReportsSurveys
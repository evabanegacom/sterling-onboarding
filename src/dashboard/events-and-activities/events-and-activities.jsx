import React from 'react'
import newHires from '../../assets/new-hires.svg';	
import onBoardingDoc from '../../assets/onboarding-doc.svg';
import jobRoleUpload from '../../assets/job-role-upload.svg';
import surveyReport from '../../assets/survey-report.svg';
import { useNavigate } from 'react-router-dom';
import TeamSchedule from './team-schedule';
import ScheduleOnboarding from './schedule-onboarding';
import InductionCeremony from './induction-ceremony';
import OtherTctivities from './other-activities';

const EventsAndActivities = () => {
  const navigate = useNavigate();
  const [ showAccess, setShowAccess ] = React.useState(false);
  const [ showInduction, setShowInduction ] = React.useState(false);
  const [ showOtherActivities, setShowOtherActivities ] = React.useState(false);
  const [ showScheduleOnboarding, setShowScheduleOnboarding ] = React.useState(false);
  const [ showTeamSchedule, setShowTeamSchedule ] = React.useState(false);

  const adminActions = [
    {
      id: 1,
      title: 'Onboarding Assistant',
      icon: newHires,
      onClick: () => setShowTeamSchedule(true)
    },

    {
      id: 2,
      title: 'Team',
      icon: onBoardingDoc,
      onClick: () => setShowScheduleOnboarding(true)
    },

    {
      id: 3,
      title: 'Induction Ceremony',
      icon: jobRoleUpload,
      onClick: () => setShowInduction(true)
    },

    {
      id: 4,
      title: 'Other Events',
      icon: surveyReport,
      onClick: () => setShowOtherActivities(true)
    }
  ]

  return (
    <>
    <div className='ps-5 pe-10 mt-5'>
      <p className='neutral-black text-2xl font-bold'>Events and Activities Scheduling</p>
      <div className='grid grid-cols-4 gap-5 mt-5'>
        {adminActions.map(action => (
          <div onClick={action?.onClick} key={action.id} className='bg-white cursor-pointer py-5 px-4 rounded-lg flex items-center space-x-4'>
            <img src={action.icon} alt={action.title} />
            <p className='text-base neutral-black font-semibold'>{action.title}</p>
          </div>
        ))}
      </div>
    </div>
    <TeamSchedule showTeamSchedule={showTeamSchedule} setShowTeamSchedule={setShowTeamSchedule}/>
    <ScheduleOnboarding showScheduleOnboarding={showScheduleOnboarding} setShowScheduleOnboarding={setShowScheduleOnboarding}/>
    <InductionCeremony showInduction={showInduction} setShowInduction={setShowInduction}/>
    <OtherTctivities showOtherActivities={showOtherActivities} setShowOtherActivities={setShowOtherActivities}/>
    </>
  )
}

export default EventsAndActivities
import React from 'react'
import { useNavigate } from 'react-router-dom';
import TeamSchedule from './team-schedule';
import ScheduleOnboarding from './schedule-onboarding';
import InductionCeremony from './induction-ceremony';
import OtherActivities from './other-activities';
import { RiCalendarEventFill } from "react-icons/ri";

const EventsAndActivities = () => {
  const navigate = useNavigate();
 const [activeTab, setActiveTab] = React.useState(null)

  const adminActions = [
    {
      id: 1,
      title: 'Onboarding Assistant',
      style: {boxShadow: "0px 4px 12px 0px #DBF3EC82" , color: '#4B9560', background: '#DBF3EC'},
      onClick: () => {
       setActiveTab('onboarding')
      }
    },

    {
      id: 2,
      title: 'Team',
      style: {boxShadow: "0px 4px 12px 0px #DBF3EC82" , color: '#009CBD', background: '#DBF3EC'},
      onClick: () => {
       setActiveTab('team')
      }
    },

    {
      id: 3,
      title: 'Induction Ceremony',
      style: {boxShadow: "0px 4px 12px 0px #F9DEDFB2;" , color: '#DB353A', background: '#F9DEDF'},
      onClick: () => {
       setActiveTab('induction')
      }
    },

    {
      id: 4,
      title: 'Other Events',
      style: {boxShadow: "0px 4px 12px 0px #F5E1A44A" , color: '#F3BC00', background: '#F5E1A4'},
      onClick: () => {
       setActiveTab('other')
      }
      
    }
  ]

  return (
    <>
    <div className='ps-5 pe-10 mt-5'>
      <p className='neutral-black text-2xl font-bold'>Events and Activities Scheduling</p>
      <div className='grid grid-cols-4 gap-5 mt-5'>
        {adminActions.map(action => (
          <div onClick={action?.onClick} key={action.id} className='bg-white cursor-pointer py-5 px-4 rounded-lg flex items-center space-x-4'>
            <div style={action?.style} className='p-3 rounded-lg'><RiCalendarEventFill /></div>
            <p className='text-base neutral-black font-semibold'>{action.title}</p>
          </div>
        ))}
      </div>
    </div>
    {activeTab === 'onboarding' && <ScheduleOnboarding />}
    {activeTab === 'team' && <TeamSchedule />}
    {activeTab === 'induction' && <InductionCeremony />}
    {activeTab === 'other' && <OtherActivities />}
       </>
  )
}

export default EventsAndActivities
import React, { useState, useContext, useEffect, useRef } from 'react';
import { HiOutlineEye } from 'react-icons/hi';
import { BiCheckCircle } from 'react-icons/bi';
import { CiEdit } from 'react-icons/ci';
import { PiProhibitBold } from 'react-icons/pi';
import './onboarding-documents.css';
import ConfirmationModal from '../../modals/confirmation-modal';

const DocumentActions = ({ isOpen, selectedUser, setIsOpen }) => {
  
  const [openConfirmation, setOpenConfirmatiom] = useState(false);
  const ref = useRef(null);

  const fleetActions = [
    {
      id: 1,
      name: 'Download',
      color: '#7975B6',
      // modal: <RiderOverview isOpen={openRiderOverView} setIsOpen={setRiderOverView}/>,
      onClick: () => {
        setRiderOverView(true)
      }
    },
    
    {
      id: 2,
      name: 'Approve',
      icon: <CiEdit color='#C8CC66' />,
      color: '#C8CC66',
      // modal: <EditAccountNumber isOpen={openEditAccountNumber} setIsOpen={setEditAccountNumber} />,
      onClick: () => {
        console.log('hi')
      }
    },
  ]

  useEffect(() => {
    function handleClickOutside(event) {
      // Check if the click is outside of FleetActions container
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        !event.target.closest('.modal-container') // Check if click is inside any modal
      ) {
        // Check if any modal is open, if yes, prevent closing
        if (!openConfirmation) {
          setIsOpen(false);
        }
      }
    }
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setIsOpen, openConfirmation]);  

  if (!isOpen) return null
  return (
    <>
        <div  className='fleet-content-body'>
          <div className='fleet-actions-container' ref={ref}>
            <div className='fleet-action-div'>
              {fleetActions.map((action) => (
                <button key={action.id} onClick={action?.onClick}>
                  {/* {action?.name} */}
                  <span style={{ color: action?.color }}>{action?.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      <ConfirmationModal isOpen={openConfirmation} setIsOpen={setOpenConfirmatiom} selectedUser={selectedUser} />
    </>
  )
}

export default DocumentActions
import { useState } from 'react'
import { CiSearch } from "react-icons/ci";
// import exportIcon from '../../assets/export-icon.svg'	;
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import emptyData from '../../assets/empty-table.svg';
import DocumentActions from './document-actions';

const DocumentsTable = ({ setShowForm }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
   const tableHeader = ['S/N', 'Employee Name', 'Grade', 'HMO Plan', 'HMO Plan Type', 'Status', ""]
   const tableData = [
      {
        sn: 1,
        employeeName: 'John Doe',
        grade: 'Grade 5',
        hmoPlan: 'HMO Plan 1',
        hmoPlanType: 'Family',
        status: 'Complete',
      },
      {
        sn: 2,
        employeeName: 'Jane Doe',
        grade: 'Grade 6',
        hmoPlan: 'HMO Plan 2',
        hmoPlanType: 'Individual',
        status: 'Pending',
      },
      {
        sn: 3,
        employeeName: 'John Doe',
        grade: 'Grade 5',
        hmoPlan: 'HMO Plan 1',
        hmoPlanType: 'Family',
        status: 'Complete',
      },
      {
        sn: 4,
        employeeName: 'Jane Doe',
        grade: 'Grade 6',
        hmoPlan: 'HMO Plan 2',
        hmoPlanType: 'Individual',
        status: 'Pending',
      },
      {
        sn: 5,
        employeeName: 'John Doe',
        grade: 'Grade 5',
        hmoPlan: 'HMO Plan 1',
        hmoPlanType: 'Family',
        status: 'Complete',
      },
      {
        sn: 6,
        employeeName: 'Jane Doe',
        grade: 'Grade 6',
        hmoPlan: 'HMO Plan 2',
        hmoPlanType: 'Individual',
        status: 'Pending',
      },

      {
        sn: 7,
        employeeName: 'John Doe',
        grade: 'Grade 5',
        hmoPlan: 'HMO Plan 1',
        hmoPlanType: 'Family',
        status: 'Complete',
      },
      {
        sn: 8,
        employeeName: 'Jane Doe',
        grade: 'Grade 6',
        hmoPlan: 'HMO Plan 2',
        hmoPlanType: 'Individual',
        status: 'Pending',
      }
    ]
    const toggleForm = (value) => {
      setSelectedUser(value);
      setShowForm(true);
    }
//   const tableData = []
  return (
    <div className='mt-10 bg-white'>
      <div className='flex justify-between items-center px-4 py-3'>
        {tableData?.length > 0 ? <div className='text-left text-black text-lg font-bold'>New Hires</div> : null}
       {tableData.length > 1 ? 
        <div className='flex items-center gap-4 ml-auto'>
        <div className='relative'>
            <CiSearch size={30} className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
            <input
              type='text'
              placeholder='Search'
              className='border border-gray-300 rounded-lg pl-10 pr-3 py-3'
            />
          </div>
          <select
            name='filter'
            id='filter'
            className='border border-gray-300 bg-gray-50 rounded-lg px-3 py-3'
          >
            <option value='filter'>Filter</option>
            <option value='all'>All</option>
            <option value='complete'>Complete</option>
            <option value='pending'>Pending</option>
          </select>
          {/* <button style={{ border: '1px solid #E28604', color: '#E28604'}} className='gap-1 rounded-lg px-3 flex items-center py-3'>
            <img src={exportIcon} alt='export' /><span>Export</span>
          </button> */}
        </div>
          : null}
      </div>

     {tableData?.length > 0 ?
      <div className='overflow-x-auto mt-4'>
        <table className='w-full'>
          <thead>
            <tr>
              {tableHeader.map((header, index) => (
                <th key={index} className='text-left border-b border-gray-200 px-4 py-5 muted-text font-bold text-sm'>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='font-medium text-sm'>
            {tableData.map((data, index) => (
              <tr key={index} className='border-b border-gray-200 cursor-pointer' onClick={() => toggleForm(data)}>
                <td className='px-4 py-5'>{data.sn}</td>
                <td className='px-4 py-5'>{data.employeeName}</td>
                <td className='px-4 py-5'>{data.grade}</td>
                <td className='px-4 py-5'>{data.hmoPlan}</td>
                <td className='px-4 py-5'>{data.hmoPlanType}</td>
                <td style={{ color: data?.status === 'Complete' ? '#298E78' : '#FF9500'}} className='px-4 py-5 font-bold'>{data.status}</td>
                <td
                style={{ position: 'relative' }}
                onClick={() => {
                  setIsOpen(!isOpen);
                  setSelectedUser(data);
                }}
                className="table-action"
              >
                <IoEllipsisVerticalSharp />
                {isOpen && selectedUser?.sn === data?.sn ? (
                  <div><DocumentActions isOpen={true} selectedUser={selectedUser} setIsOpen={setIsOpen} /></div>
                ) : null}
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      : <div className='flex justify-center pb-20'><button ><img src={emptyData} alt='empty data' className='mt-5 h-96' /></button></div>}

    </div>
  )
}

export default DocumentsTable

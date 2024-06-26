// import React from 'react';
// import { FiPlusCircle } from "react-icons/fi";
// import AddTeamMember from './add-team-member';
// import back from '../../assets/back-icon.svg'

// const JobRoleForm = ({ setToggleViews}) => {
//     const [step, setStep] = React.useState(1);
//     const [jobDetails, setJobDetails] = React.useState({
//         jobTitle: '',
//         jobDescription: '',
//         jobType: '',
//         jobLocation: '',
//         jobDepartment: '',
//         jobCategory: '',
//         teamSize: '',
//         teamLead: '',
//         teamMembers: '',
//         jobLinks: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setJobDetails({
//             ...jobDetails,
//             [name]: value,
//         });
//     };

//     const handleNextStep = () => {
//         setStep((prevStep) => prevStep + 1);
//     };

//     const handlePrevStep = () => {
//         setStep((prevStep) => prevStep - 1);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Form submitted:', jobDetails);
//     };

//     return (
//         <>
//         <div className="container mx-auto p-4">
//         <div className='flex gap-2 items-center mt-3'>
//         <button onClick={() => setToggleViews('main view')}><img src={back} alt='goback' /></button>
//         <span className='text-2xl font-semibold neutral-black'>Job Role/Upload</span>
//       </div>
//             <form onSubmit={handleSubmit} className="mt-4 step-form rounded-xl w-5/12 mx-auto bg-white px-4 py-10">
//                 <div className="flex items-center justify-center gap-5">
//                     <button
//                         className={`btn ${step === 1 ? 'btn-active' : 'btn-inactive'}`}
//                         onClick={() => setStep(1)}
//                     >
//                         Job Details
//                     </button>
//                     <button
//                         className={`btn ${step === 2 ? 'btn-active' : 'btn-inactive'}`}
//                         onClick={() => setStep(2)}
//                     >
//                         Team Structure
//                     </button>
//                     <button
//                         className={`btn ${step === 3 ? 'btn-active' : 'btn-inactive'}`}
//                         onClick={() => setStep(3)}
//                     >
//                         Links
//                     </button>
//                 </div>
//                 <h3 className='dark-color font-bold text-2xl text-center mt-5'>Add employee details</h3>
//                 {step === 1 && (
//                     <div className="step step-1 flex flex-col gap-3 w-full">
//                         <div className='flex flex-col w-full'>
//                             <label htmlFor="jobTitle">Job Title</label>
//                             <input
//                                 type="text"
//                                 name="jobTitle"
//                                 placeholder="Job Title"
//                                 value={jobDetails.jobTitle}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div className='flex flex-col w-full'>
//                             <label htmlFor="jobDescription">Job Description</label>
//                             <input
//                                 name="jobDescription"
//                                 placeholder="Job Description"
//                                 value={jobDetails.jobDescription}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div className='flex flex-col w-full'>
//                             <label htmlFor="jobType">Job Type</label>
//                             <input
//                                 type="text"
//                                 name="jobType"
//                                 placeholder="Job Type"
//                                 value={jobDetails.jobType}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div className='flex flex-col w-full'>

//                             <label htmlFor="jobLocation">Job Location</label>
//                             <input
//                                 type="text"
//                                 name="jobLocation"
//                                 placeholder="Job Location"
//                                 value={jobDetails.jobLocation}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div className='flex flex-col w-full'>

//                             <label htmlFor="jobDepartment">Job Department</label>
//                             <input
//                                 type="text"
//                                 name="jobDepartment"
//                                 placeholder="Job Department"
//                                 value={jobDetails.jobDepartment}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div className='flex flex-col w-full'>
//                             <label htmlFor="jobCategory">Job Category</label>
//                             <input
//                                 type="text"
//                                 name="jobCategory"
//                                 placeholder="Job Category"
//                                 value={jobDetails.jobCategory}
//                                 onChange={handleChange}
//                             />
//                         </div>

//                         <div className='flex flex-col w-full'>
//                             <label htmlFor="jobCategory">Job Description</label>
//                             <textarea
//                                 type="text"
//                                 name="jobCategory"
//                                 placeholder="Job Category"
//                                 className='outline-none border border-gray-300 rounded-lg p-2 h-36'
//                                 value={jobDetails.jobCategory}
//                                 onChange={handleChange}
//                             />
//                         </div>

//                         <div className='flex flex-col w-full'>
//                             <label htmlFor="jobCategory">KPI</label>
//                             <input
//                                 type="text"
//                                 name="jobCategory"
//                                 placeholder="Job Category"
//                                 value={jobDetails.jobCategory}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div><button className='custom-green float-right flex items-center gap-2 text-sm font-bold'><FiPlusCircle className='font-bold'/><span>Add KPI</span></button></div>
//                     </div>
//                 )}

//                 {step === 2 && (
//                     <div className="step step-1 flex flex-col gap-3 w-full">
//                         <div className='flex flex-col w-full'>
//                             <label htmlFor="teamSize">Team Size</label>
//                             <input
//                                 type="text"
//                                 name="teamSize"
//                                 placeholder="Team Size"
//                                 value={jobDetails.teamSize}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div className='flex flex-col w-full'>
//                             <label htmlFor="teamLead">Team Lead</label>
//                             <input
//                                 type="text"
//                                 name="teamLead"
//                                 placeholder="Team Lead"
//                                 value={jobDetails.teamLead}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div className='flex flex-col w-full'>
//                             <label htmlFor="teamMembers">Team Members</label>
//                             <input
//                                 type="text"
//                                 name="teamMembers"
//                                 placeholder="Team Members"
//                                 value={jobDetails.teamMembers}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div><button className='custom-green float-right flex items-center gap-2 text-sm font-bold'><FiPlusCircle className='font-bold'/><span>Add Team</span></button></div>

//                     </div>
//                 )}

//                 {step === 3 && (
//                     <div className="step step-1 flex flex-col gap-3 w-full">
//                         <div className='flex flex-col'>
//                             <label htmlFor="jobLinks">Job Links</label>
//                             <input
//                                 type="text"
//                                 name="jobLinks"
//                                 placeholder="Job Links"
//                                 value={jobDetails.jobLinks}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div><button className='custom-green float-right flex items-center gap-2 text-sm font-bold'><FiPlusCircle className='font-bold'/><span>Add Link</span></button></div>
//                     </div>
//                 )}

//                 <div className="flex justify-between mt-4">
//                     {step > 1 && (
//                         <button type="button" className="btn" onClick={handlePrevStep}>
//                             Back
//                         </button>
//                     )}
//                     {step < 3 ? (
//                         <button type="button" className="rounded-lg mx-auto w-64 custom-bg-green py-1 text-white font-semibold" onClick={handleNextStep}>
//                             Proceed
//                         </button>
//                     ) : (
//                         <button type="submit" 
//                         className="rounded-lg w-64 custom-bg-green py-2 mx-auto text-white font-semibold">
//                             Submit
//                         </button>
//                     )}
//                 </div>
//             </form>
//         </div>
//         {/* <AddTeamMember /> */}
//         </>
//     );
// };

// export default JobRoleForm;


import React from 'react';
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import AddTeamMember from './add-team-member';
import back from '../../assets/back-icon.svg'

const JobRoleForm = ({ setToggleViews }) => {
    const [step, setStep] = React.useState(1);
    const [jobDetails, setJobDetails] = React.useState({
        jobTitle: '',
        jobDescription: '',
        jobType: '',
        jobLocation: '',
        jobDepartment: '',
        jobCategory: '',
        jobKPI: [],
        teamSize: '',
        teamLead: '',
        teamMembers: [],
        jobLinks: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobDetails({
            ...jobDetails,
            [name]: value,
        });
    };

    const handleArrayChange = (e, index, field) => {
        const newArray = [...jobDetails[field]];
        newArray[index] = e.target.value;
        setJobDetails({
            ...jobDetails,
            [field]: newArray,
        });
    };

    const handleNextStep = () => {
        setStep((prevStep) => prevStep + 1);
    };

    const handlePrevStep = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', jobDetails);
    };

    const addField = (field) => {
        setJobDetails({
            ...jobDetails,
            [field]: [...jobDetails[field], '']
        });
    };

    const removeField = (index, field) => {
        const newArray = [...jobDetails[field]];
        newArray.splice(index, 1);
        setJobDetails({
            ...jobDetails,
            [field]: newArray,
        });
    };

    return (
        <>
            <div className="container mx-auto p-4">
                <div className='flex gap-2 items-center mt-3'>
                    <button onClick={() => setToggleViews('main view')}><img src={back} alt='goback' /></button>
                    <span className='text-2xl font-semibold neutral-black'>Job Role/Upload</span>
                </div>
                <form onSubmit={handleSubmit} className="mt-4 step-form rounded-xl w-5/12 mx-auto bg-white px-4 py-10">
                    <div className="flex items-center justify-center gap-5">
                        <button
                            type="button"
                            className={`btn ${step === 1 ? 'btn-active' : 'btn-inactive'}`}
                            onClick={() => setStep(1)}
                        >
                            Job Details
                        </button>
                        <button
                            type="button"
                            className={`btn ${step === 2 ? 'btn-active' : 'btn-inactive'}`}
                            onClick={() => setStep(2)}
                        >
                            Team Structure
                        </button>
                        <button
                            type="button"
                            className={`btn ${step === 3 ? 'btn-active' : 'btn-inactive'}`}
                            onClick={() => setStep(3)}
                        >
                            Links
                        </button>
                    </div>
                    <h3 className='dark-color font-bold text-2xl text-center mt-5'>Add employee details</h3>
                    {step === 1 && (
                        <div className="step step-1 flex flex-col gap-3 w-full">
                            <div className='flex flex-col w-full'>
                                <label htmlFor="jobTitle">Job Title</label>
                                <input
                                    type="text"
                                    name="jobTitle"
                                    placeholder="Job Title"
                                    value={jobDetails.jobTitle}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="jobDescription">Job Description</label>
                                <textarea
                                    name="jobDescription"
                                    placeholder="Job Description"
                                    className='outline-none border border-gray-300 rounded-lg p-2 h-36'
                                    value={jobDetails.jobDescription}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="jobType">Job Type</label>
                                <input
                                    type="text"
                                    name="jobType"
                                    placeholder="Job Type"
                                    value={jobDetails.jobType}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="jobLocation">Job Location</label>
                                <input
                                    type="text"
                                    name="jobLocation"
                                    placeholder="Job Location"
                                    value={jobDetails.jobLocation}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="jobDepartment">Job Department</label>
                                <input
                                    type="text"
                                    name="jobDepartment"
                                    placeholder="Job Department"
                                    value={jobDetails.jobDepartment}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="jobCategory">Job Category</label>
                                <input
                                    type="text"
                                    name="jobCategory"
                                    placeholder="Job Category"
                                    value={jobDetails.jobCategory}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="jobKPI">KPI</label>
                                {jobDetails.jobKPI.map((kpi, index) => (
                                    <div key={index} className="flex gap-2 items-center w-full">
                                        <input
                                            type="text"
                                            placeholder="KPI"
                                            value={kpi}
                                            className='w-full mt-2'
                                            onChange={(e) => handleArrayChange(e, index, 'jobKPI')}
                                        />
                                        <button type="button" onClick={() => removeField(index, 'jobKPI')}><FiMinusCircle /></button>
                                    </div>
                                ))}
                                <button type="button" className='custom-green flex items-center gap-2 text-sm font-bold mt-2' onClick={() => addField('jobKPI')}><FiPlusCircle className='font-bold' /><span>Add KPI</span></button>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="step step-2 flex flex-col gap-3 w-full">
                            <div className='flex flex-col w-full'>
                                <label htmlFor="teamSize">Team Size</label>
                                <input
                                    type="text"
                                    name="teamSize"
                                    placeholder="Team Size"
                                    value={jobDetails.teamSize}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="teamLead">Team Lead</label>
                                <input
                                    type="text"
                                    name="teamLead"
                                    placeholder="Team Lead"
                                    value={jobDetails.teamLead}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="teamMembers">Team Members</label>
                                {jobDetails.teamMembers.map((member, index) => (
                                    <div key={index} className="flex gap-2 items-center">
                                        <input
                                            type="text"
                                            placeholder="Team Member"
                                            value={member}
                                            className='w-full mt-2'
                                            onChange={(e) => handleArrayChange(e, index, 'teamMembers')}
                                        />
                                        <button type="button" onClick={() => removeField(index, 'teamMembers')}><FiMinusCircle /></button>
                                    </div>
                                ))}
                                <button type="button" className='custom-green flex items-center gap-2 text-sm font-bold mt-2' onClick={() => addField('teamMembers')}><FiPlusCircle className='font-bold' /><span>Add Team Member</span></button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="step step-3 flex flex-col gap-3 w-full">
                            <div className='flex flex-col'>
                                <label htmlFor="jobLinks">Job Links</label>
                                {jobDetails.jobLinks.map((link, index) => (
                                    <div key={index} className="flex gap-2 items-center">
                                        <input
                                            type="text"
                                            placeholder="Job Link"
                                            value={link}
                                            className='w-full mt-2'
                                            onChange={(e) => handleArrayChange(e, index, 'jobLinks')}
                                        />
                                        <button type="button" onClick={() => removeField(index, 'jobLinks')}><FiMinusCircle /></button>
                                    </div>
                                ))}
                                <button type="button" className='custom-green flex items-center gap-2 text-sm font-bold mt-2' onClick={() => addField('jobLinks')}><FiPlusCircle className='font-bold' /><span>Add Link</span></button>
                            </div>
                        </div>
                    )}

                    <div className="flex justify-between mt-4">
                        {step > 1 && (
                            <button type="button" className="btn" onClick={handlePrevStep}>
                                Back
                            </button>
                        )}
                        {step < 3 ? (
                            <button type="button" className="rounded-lg mx-auto w-64 custom-bg-green py-1 text-white font-semibold" onClick={handleNextStep}>
                                Proceed
                            </button>
                        ) : (
                            <button type="submit"
                                className="rounded-lg w-64 custom-bg-green py-2 mx-auto text-white font-semibold">
                                Submit
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </>
    );
};

export default JobRoleForm;


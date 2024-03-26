import React, { useState } from 'react';

const EditDialog = ({ isOpen, onClose,tasks1 }) => {
console.log(tasks1)
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [team, setTeam] = useState('');
  const [assignees, setAssignees] = useState('');
  const [priority, setPriority] = useState('P1');


  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Handle form submission logic here (e.g., submit the form data to a backend API)
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Team:', team);
    console.log('Assignees:', assignees);
    console.log('Priority:', priority);

    // After submitting the form, you may want to reset the form fields
    setTitle('');
    setDescription('');
    setTeam('');
    setAssignees('');
    setPriority('P1');
  };


  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div className="bg-white p-4  shadow-lg z-10">
     <div className='flex justify-between items-center'>
     <div className='mb-4 bg-white font-bold'>CREATE A TASK</div>
      <button type="button" onClick={onClose} className=" bg-transparent hover:bg-red-700  text-black font-semibold  px-2 rounded-full">
            X
          </button>
     </div>
    <form className="bg-gradient-to-r from-pink-200 to-blue-200 w-[400px] shadow-md p-2 " onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="flex text-gray-700 font-semibold mb-2">
            Title:
            <input
              className="appearance-none bg-gray-300 border ml-16 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={'Task 1'}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="flex text-gray-700 font-semibold mb-2">
            Description:
            <textarea
              className="appearance-none bg-gray-300 border ml-3 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline h-20"
              value={"It seems like you're mentioning  task manager . If you're looking to create a task manager application using React. "}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </label>
        </div>
        <div className="mb-4">
          <label className="flex text-gray-700 font-semibold mb-2">
            Team:
            <input
              className="appearance-none bg-gray-300 border ml-14 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              value={"Avengers"}
              onChange={(e) => setTeam(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="flex text-gray-700 font-semibold mb-2">
            Assignees:
            <input
              className="appearance-none bg-gray-300 ml-5 border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              value={"@Pravin"}
              onChange={(e) => setAssignees(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-4 relative flex">
         <div>
         <label className="flex text-gray-700 mt-6 font-semibold mb-2 ">
            Priority:
            <select
              className="block appearance-none  bg-gray-300 w-12 ml-10  border border-gray-200 text-gray-700 py-2 px-2 pr-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="P1">P1</option>
              <option value="P2">P2</option>
              <option value="P3">P3</option>
            </select>
            <div className="absolute left-24 top-9 right-6  flex items-center px-8 pointer-events-none">
            <svg
              className="fill-current h-4 w-4 text-black"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 12L3 5h14z" />
            </svg>
          </div>
          </label>
         </div>
          <div>
          <label className="flex text-gray-700 font-semibold ml-14  mt-6">
            Status:
            <select
              className="block appearance-none  bg-gray-300 w-32 ml-2 border border-gray-200 text-gray-700 py-2 px-2 pr-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="P1">Pending</option>
              <option defaultValue={"Completed"} value="P2">Completed</option>
              <option value="P3">In Progress</option>
            </select>
          </label>
          </div>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
          Create Task
        </button>
        
      </form>
      
      </div>
    </div>
  );
};

export default EditDialog
import React from 'react'

const Dialog = ({ isOpen, onClose }) => {

  
  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
    <div className="absolute inset-0 bg-gray-900 opacity-30"></div>
    <div className="bg-white p-6 w-48 rounded-lg shadow-lg z-10">
      <button onClick={onClose} className="absolute top-[39%] right-[43%] m-4 text-gray-500 hover:text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className='flex flex-col items-center'>
         {/* Button to open dialog for editing */}
      <button  className="bg-gray-400 w-24 ml-2 mb-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2" >
        Edit
      </button>

      {/* Button to open dialog for deleting */}
      <button className="bg-gray-400  w-24 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Delete
      </button>
      </div>
    </div>
  </div>
  )
}

export default Dialog
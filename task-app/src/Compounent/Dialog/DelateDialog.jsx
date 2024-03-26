import React from 'react'

const DelateDialog = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
    <div className="absolute inset-0 bg-gray-900 opacity-30"></div>
    <div className="bg-white p-6 w-[450px] shadow-lg z-10">
      <button onClick={onClose} className="absolute top-[36%] right-[35%] m-4 text-gray-500 hover:text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div  >
     <div className='mb-4 bg-white font-bold'>DELATE TASK</div>
      <div className="bg-gradient-to-r from-pink-200 to-blue-200 w-[400px] shadow-md p-2 ">

      <p className='mb-10'>Do Yoe Wish to Delate Task</p>
    
        <div className='flex justify-around'>
         <div >Task 1</div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-0 h-7 px-10 rounded">
         Yes
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-0 h-7 px-10 rounded">
    No
        </button>
        
        </div>
      </div>
      </div>
    </div>
  </div>
  )
}

export default DelateDialog
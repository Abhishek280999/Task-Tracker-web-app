import React, { useEffect, useRef, useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';



const InPrograss = ({tasks2}) => {

  

    const [isOptionsVisible, setIsOptionsVisible] = useState(false);
    const [isDialogOpen1, setIsDialogOpen1] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const optionsRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (optionsRef.current && !optionsRef.current.contains(event.target)) {
          setIsOptionsVisible(false);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
    const handleOptionClick = (option) => {
      setSelectedOption(option);
      setIsOptionsVisible(false);
      setIsDialogOpen1(true);
    }
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5  p-2  ">
        <div className="bg-orange-400 h-10 flex items-center justify-center font-bold rounded-t-lg ">
          In Prograss
        </div>

        <div className="bg-white h-auto flex flex-col px-3 py-4 rounded-b-lg shadow-xl">
          {tasks2.map((task, index) => (
            <div key={index} className="bg-gray-200 p-4 mb-2  rounded-md   ">
            <div className="flex justify-between border-black border-b-2 pb-2">
              <div className="font-semibold  ">
                {task.Name}
              </div>
              <div>
              <select className="appearance-none block w-8 bg-blue-600 text-white  rounded py-1 px-1 leading-tight focus:outline-none focus:bg-gray-800 focus:border-black">
              <option className="text-white">P0</option>
              <option>P1</option>
              <option>P2</option>
              <option>P3</option>

            </select>
              </div>
              </div>
              <p className="text-gray-700 pt-2 text-sm mb-2">{task.description}</p>
              <div className="flex justify-between">
              <div className="text-gray-500">{task.User}</div>
              <div className="relative" ref={optionsRef}>
    <button className="bg-transparent  text-blue-800 font-bold py-2 px-4 rounded" onClick={() => setIsOptionsVisible(!isOptionsVisible)}>
    <MoreVertIcon />
    </button>
    {isOptionsVisible && (
      <div className="absolute right-0 left-4 mt-2 w-32 bg-white rounded-md overflow-hidden shadow-xl z-10">
        <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleOptionClick('Option 1')}>
        Edit
        </button>
        <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleOptionClick('Option 2')}>
         Delate
        </button>
      </div>
    )}
  </div>
              </div>
              <button className="bg-blue-500 w-32 mt-3 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded">
              {task.Status}
          </button>
            </div>
          ))}
        </div>
      </div>
  )
}

export default InPrograss
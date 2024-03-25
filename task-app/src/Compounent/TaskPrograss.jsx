import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const TaskPrograss = ({ tasks1, tasks2, tasks3, tasks4, tasks5 }) => {
  return (
    <div className="flex flex-wrap justify-center mx-6 ">
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5  p-2  ">
        <div className="bg-gray-400 h-10 flex items-center justify-center font-bold rounded-t-lg ">
          Pending
        </div>

        <div className="bg-white h-auto flex flex-col  px-3 py-4 rounded-b-lg shadow-xl ">
          {tasks1.map((task, index) => (
            <div key={index} className="bg-gray-200 p-4 mb-2  rounded-md ">
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
              <p className="text-gray-700 pt-2  text-sm mb-2">{task.description}</p>
              <div className="flex justify-between ">
              <div className="text-gray-500">{task.User}</div>
              <div style={{ color: 'blue' }}><MoreVertIcon/></div>
              </div>
              <button className="bg-blue-500 w-32 mt-3 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded">
              {task.Status}
          </button>
            </div>
          ))}
        </div>
      </div>
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
              <div style={{ color: 'blue' }}><MoreVertIcon/></div>
              </div>
              <button className="bg-blue-500 w-32 mt-3 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded">
              {task.Status}
          </button>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5  p-2  ">
        <div className="bg-green-400 h-10 flex items-center justify-center font-bold rounded-t-lg ">
          Completed
        </div>

        <div className="bg-white h-auto flex flex-col px-3 py-4 rounded-b-lg shadow-xl">
          {tasks3.map((task, index) => (
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
              <div style={{ color: 'blue' }}><MoreVertIcon/></div>
              </div>
              <button className="bg-blue-500 w-32 mt-3 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded">
              {task.Status}
          </button>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5  p-2  ">
        <div className="bg-blue-400 h-10 flex items-center justify-center font-bold rounded-t-lg ">
          Deployed
        </div>

        <div className="bg-white h-auto flex flex-col px-3 py-4 rounded-b-lg shadow-xl">
          {tasks4.map((task, index) => (
            <div key={index} className="bg-gray-200 p-4 mb-2  rounded-md  ">
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
              <div style={{ color: 'blue' }}><MoreVertIcon/></div>
              </div>
              <button className="bg-blue-500 w-32 mt-3 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded">
              {task.Status}
          </button>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5  p-2  ">
        <div className="bg-red-400 h-10 flex items-center justify-center font-bold rounded-t-lg ">
          Defferrd
        </div>

        <div className="bg-white h-auto flex flex-col px-3 py-4 rounded-b-lg shadow-xl">
          {tasks5.map((task, index) => (
            <div key={index} className="bg-gray-200 p-4 mb-2  rounded-md   ">
            <div className="flex justify-between border-black border-b-2 pb-2">
              <div className="font-semibold   ">
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
              <div style={{ color: 'blue' }}><MoreVertIcon/></div>
              </div>
               <button className="bg-blue-500 w-32 mt-3 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded">
              {task.Status}
          </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskPrograss;

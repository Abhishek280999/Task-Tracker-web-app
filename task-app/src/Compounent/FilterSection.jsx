import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const FilterSection = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };
  return (
    <div>
       <div className="flex flex-col md:flex-row justify-around flex-wrap ">
       <div className="flex flex-wrap  items-center  pt-5 ">
          <label htmlFor="assignee" className="mr-2 font-semibold ">
            Filter By:
          </label>
          <input
            className="appearance-none block w-52 mr-5 bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="    Assignee Name"
          />
          <div className="relative">
        
            <select className="appearance-none block w-52 mr-5 bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option className="text-gray-700 appearance-none">Priority</option>
              <option>P1</option>
              <option>P2</option>
              <option>P3</option>

            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-8 pointer-events-none">
              <svg
                className="fill-current h-4 w-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 12L3 5h14z" />
              </svg>
            </div>
          </div>

         <div className="">
         <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsStart
            placeholderText="DD/MM/YY-"
            className="appearance-none block w-28  bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsEnd
            placeholderText="DD/MM/YY"
            className="appearance-none block w-32 bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
         </div>
         
        </div>
        <div className="pt-5 ">
          <button className="bg-blue-500 w-44 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add New Task
          </button>
        </div>
       </div>
        
  
      <div className="flex flex-wrap  items-center ml-[120px]   pt-5">
        <label htmlFor="sort" className="mr-4 font-semibold">
          Sort By:
        </label>
        <div className="relative">
        <select className="appearance-none block w-52 mr-5 bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option className="text-gray-700 appearance-none ">Priority</option>
              <option>P1</option>
              <option>P2</option>
              <option>P3</option>

            </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-8 pointer-events-none">
            <svg
              className="fill-current h-4 w-4 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 12L3 5h14z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;

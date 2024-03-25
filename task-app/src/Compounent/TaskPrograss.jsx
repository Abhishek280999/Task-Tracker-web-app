import React from 'react'

const TaskPrograss = ({PendingArray}) => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
        <div className="bg-gray-200 h-48">Div 1</div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
        <div className="bg-gray-200 h-48">Div 2</div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
        <div className="bg-gray-200 h-48">Div 3</div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
        <div className="bg-gray-200 h-48">Div 4</div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
        <div className="bg-gray-200 h-48">Div 5</div>
      </div>
    </div>
  )
}

export default TaskPrograss
import React from 'react'
import FilterSection from './FilterSection'
import TaskPrograss from './TaskPrograss'

const TaskBoard = () => {
  return (
    <div class=" w-full">
          <div className='flex justify-center flex-col mx-10 border-solid border-4 border-sky-500 pb-10 rounded-md  h-auto  '>
            <FilterSection/>
          <div className='pt-6 w-full  '>
          <TaskPrograss    />
          </div>
          </div>
          
</div>
  )
}

export default TaskBoard
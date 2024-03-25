import React from 'react'
import FilterSection from './FilterSection'
import TaskPrograss from './TaskPrograss'

const TaskBoard = () => {
  return (
    <div class=" w-full">
          <div className='border-solid border-4 border-sky-500 rounded-md w-full'>
            <FilterSection/>
          <div className='pt-6 w-full '>
          <TaskPrograss/>
          </div>
          </div>
          
</div>
  )
}

export default TaskBoard
import React from 'react'
import FilterSection from './FilterSection'
import TaskPrograss from './TaskPrograss'
import { CompletedArray, DefferedArray, DeployedArray, PendingArray, PrograssArray } from '../Data'

const TaskBoard = () => {
  return (
    <div class=" w-full">
          <div className='flex justify-center flex-col mx-10 border-solid border-4 border-sky-500 pb-10 rounded-md  h-auto  '>
            <FilterSection/>
          <div className='pt-6 w-full  '>
          <TaskPrograss  tasks1={PendingArray } tasks2={PrograssArray }  tasks3={CompletedArray } tasks4={DeployedArray } tasks5={DefferedArray }   />
          </div>
          </div>
          
</div>
  )
}

export default TaskBoard
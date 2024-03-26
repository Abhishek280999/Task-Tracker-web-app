import React from 'react';
import FilterSection from './FilterSection';
import TaskProgress from './TaskPrograss'; // Corrected component name to TaskProgress

// TaskBoard component responsible for displaying the main task board layout
const TaskBoard = () => {
  return (
    <div class="w-full"> {/* Container for the entire task board */}
      <div className='flex justify-center flex-col mx-10 border-solid border-4 border-sky-500 pb-10 rounded-md h-auto'>
        {/* Filter section for filtering tasks */}
        <FilterSection />
        
        <div className='pt-6 w-full'>
          {/* Task progress section for displaying task progress */}
          <TaskProgress />
        </div>
      </div>
    </div>
  );
}

export default TaskBoard;

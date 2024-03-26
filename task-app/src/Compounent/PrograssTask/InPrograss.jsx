import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditDialog from '../Dialog/EditDialog';
import DelateDialog from '../Dialog/DelateDialog';



const InPrograss = ({tasks2}) => {

  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const openEditDialog = () => {
    setEditDialogOpen(true);
    setIsOptionsVisible(false); // Close options when opening edit dialog
  };

  const closeEditDialog = () => {
    setEditDialogOpen(false);
  };

  const openDeleteDialog = () => {
    setDeleteDialogOpen(true);
    setIsOptionsVisible(false); // Close options when opening delete dialog
  };

  const closeDeleteDialog = () => {
    setDeleteDialogOpen(false);
  };
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
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
              <div className="relative" >
    <button className="bg-transparent  text-blue-800 font-bold py-2 px-4 rounded" onClick={() => setIsOptionsVisible(!isOptionsVisible)}>
    <MoreVertIcon />
    </button>
    {isOptionsVisible && (
      <div className="absolute right-0 left-4 mt-2 w-32 bg-white rounded-md overflow-hidden shadow-xl z-10">
      <button onClick={openEditDialog} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Edit
                    </button>
                    <button onClick={openDeleteDialog} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Delete
                    </button>
      </div>
    )}
  </div>
              </div>
              <button className="bg-blue-500 w-32 mt-3 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded">
              {task.Status}
          </button>
          <EditDialog isOpen={editDialogOpen} onClose={closeEditDialog} />
            <DelateDialog isOpen={deleteDialogOpen} onClose={closeDeleteDialog} />
            </div>
          ))}
        </div>
      </div>
  )
}

export default InPrograss
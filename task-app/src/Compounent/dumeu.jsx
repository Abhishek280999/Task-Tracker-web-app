import React, { useState } from 'react';
import Dialog from './Dialog'; // Import your dialog component

const ExampleComponent = () => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOptionsVisible(false);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <div>
      <div className="relative">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setIsOptionsVisible(!isOptionsVisible)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        {isOptionsVisible && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleOptionClick('Option 1')}>
              Option 1
            </button>
            <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleOptionClick('Option 2')}>
              Option 2
            </button>
          </div>
        )}
      </div>

      {/* Dialog */}
      {isDialogOpen && (
        <Dialog isOpen={isDialogOpen} onClose={handleDialogClose}>
          <div className="p-4">
            <p>Dialog Content for {selectedOption}</p>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default ExampleComponent;

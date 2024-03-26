import React from 'react';
import PersonIcon from '@mui/icons-material/Person';

// Header component responsible for displaying the application header
const Header = () => {
  return (
    <div className='flex justify-around pt-6 w-full'>
      {/* Application title */}
      <div className='font-extrabold text-2xl'>Task Board</div>
      
      {/* User profile icon */}
      <div className='h-10 w-10 rounded-full ring-2 ring-white'>
        <PersonIcon fontSize="large" />
      </div>
    </div>
  );
}

export default Header;

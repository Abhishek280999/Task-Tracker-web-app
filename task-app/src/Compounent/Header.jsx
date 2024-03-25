import React from 'react'
import PersonIcon from '@mui/icons-material/Person';

const Header = () => {
  return (
    <div className='flex justify-around pt-6  w-full'>
        <div className='font-extrabold text-2xl'>Task Board</div>
        <div className=' h-10 w-10 rounded-full ring-2 ring-white '><PersonIcon fontSize="large" /></div>
    </div>
  )
}

export default Header
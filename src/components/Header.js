import React from 'react'

const Header = () => {
  return (
<div className="grid grid-flow-col p-2">

<div className='flex justify-center items-center col-span-1'>

<img className="w-8 h-8 cursor-pointer" alt="hamberbburg" src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png" />

<img className="w-32 h-12 ml-4" alt="youtube -logo" src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"/>

</div>
<div className='col-span-10 text-center mt-2'>
  <input className="w-1/2 border border-gray-600 p-2 rounded-l-full border-r-0" type="text" />
  <button className='border border-gray-600 p-2 rounded-r-full'>Search</button>
</div>
<div className='col-span-1 mt-2'>
  <img className="w-10 h-10" alt="user-icon" src="https://static.vecteezy.com/system/resources/previews/020/911/740/original/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png" />
</div>
</div>
  )
}

export default Header
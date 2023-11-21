import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-40 h-1/2 overflow-hidden overflow-y-auto'>
      <ul className='p-4 m-2 border-b-2'>
        <li className='p-2'>Home</li>
        <li className='p-2'>Shorts</li>
        <li className='p-2'>Subscriptions</li>
      </ul>
      <ul className='p-4 m-2 border-b-2'>
        <li className='p-2'>You</li>
        <li className='p-2'>History</li>
      </ul>

      <h2 className='font-bold pt-2 pl-2'>Explore</h2>
      <ul className='p-4 m-2'>
        <li className='p-2'>Trending</li>
        <li className='p-2'>Shopping</li>
        <li className='p-2'>Music</li>
        <li className='p-2'>Flims</li>
        <li className='p-2'>Live</li>
        <li className='p-2'>Gaming</li>
        <li className='p-2'>News</li>
        <li className='p-2'>Sport</li>
        <li className='p-2'>Learning</li>
        <li className='p-2'>Fasion & beauty</li>
        <li className='p-2'>Podcast</li>

      </ul>




    </div>
  )
}

export default Sidebar
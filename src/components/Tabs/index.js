import React,{useEffect, useState} from 'react'
import Tab from './tab'
import './style.css'


const Tabs = ({tabList}) => {

    const [isActive,setIsActive] = useState(0);
    


const handleChange = (index) => {

    setIsActive(index)

}

const handleClick = (value) => {

    const tabs = document.querySelector('.tabContainer')

    if(value === 'left') {
        tabs.scrollLeft -= 200
    }
    else {
        tabs.scrollLeft += 200
    }

}




  return (
    <div className='tabs'>
    <div className='tabContainer'>

    
<button className='btn' onClick={() => handleClick('left')}>{"<"}</button>
        {
            
            tabList.map((tab,index) => <Tab key={tab.label} tabObj={tab} isActive={isActive} index={index} handleChange={handleChange}/>)

        }
        <button className='btn-right'onClick={() => handleClick('right')}>{">"}</button>


            </div>
        
        
        {

   tabList[isActive].Component
        }

     
      

    </div>
  )
}

export default Tabs
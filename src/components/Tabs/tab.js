import React from 'react';
import './style.css'

const Tab = ({tabObj,isActive,index,handleChange}) => {

  return (
    <div className={`${isActive === index ? "tab active" : "tab"}`} onClick={() => handleChange(index)}>{tabObj.label}</div>
  )
}

export default Tab
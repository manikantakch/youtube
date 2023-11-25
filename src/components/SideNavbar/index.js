import React,{useState} from 'react'
import {FaBars, FaCommentAlt, FaRegChartBar, FaShoppingBag, FaTh,FaThList,FaUserAlt } from 'react-icons/fa';
import './style.css';
import { NavLink } from 'react-router-dom';

const SideNavbar = ({children}) => {

  const [toggle,setToggle] = useState(false);

  const getToggle = () => setToggle(!toggle);

  const menuItems = [
    {
      path:'/',
      name:"Dashboard",
      icon: <FaTh/>
    },
    {
      path:'/about',
      name:"About",
      icon: <FaUserAlt/>
    },
    {
      path:'/analytics',
      name:"Analytics",
      icon: <FaRegChartBar/>
    },
    {
      path:'/product',
      name:"Product",
      icon:  <FaCommentAlt/>
    },
    {
      path:'/Productlist',
      name:"Product-List",
      icon: <FaShoppingBag/>
    },
    {
      path:'/components',
      name:"Components",
      icon: <FaThList/>
    },
  ]
  return (
    <div className='container'>

      <div style={{width: toggle ? "50px" : "260px"}} className='side-bar'>
        <div className='top-selection'>
          <h1 style={{display : toggle ? "none" : "block"}} className='logo'>Logo</h1>
          <div style={{marginLeft : toggle ? "0%" : "40%"}} className='bars'>
            <FaBars onClick={getToggle}/>
          </div>
        </div>

        {
          menuItems.map((item,index) => (
            <NavLink key={index}  to={item.path} className={"link"} activeClassname="active">
              <div style={{marginLeft : toggle ? "5px" : "10px"}} className='icon'>{item.icon}</div>
              <div style={{display : toggle ? "none" : "block"}} className='link-text'>{item.name}</div>
              
              </NavLink>
          ))
        }
     

      </div>

      <main>{children}</main>



    </div> 
  )
}

export default SideNavbar
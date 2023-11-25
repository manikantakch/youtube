import React from 'react';
import SideNavbar from './components/SideNavbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from './components/SideNavbar/pages/Dashboard';
import About from './components/SideNavbar/pages/About';
import Analytics from './components/SideNavbar/pages/Analytics';
import Product from './components/SideNavbar/pages/Product';
import ProductList from './components/SideNavbar/pages/ProductList';
import Components from './components/SideNavbar/pages/Components';



// import Tabs from './components/Tabs';

// const FirstTab = () => {
//   return <div>first tab</div>
// }

// const SecondTab = () => {
//   return <div>second tab</div>
// }

// const ThridTab = () => {
//   return <div>Third tab</div>
// }


function App() {

  // const tabList = [
  //   {
  //     label:'Tab-1',
  //     Component:<FirstTab />
  //   },
  //   {
  //     label:'Tab-2',
  //     Component:<SecondTab />
  //   },
  //   {
  //     label:'Tab-3',
  //     Component:<ThridTab />

  //   },
  //   {
  //     label:'Tab-4',
  //     Component:<FirstTab />
  //   },
  //   {
  //     label:'Tab-5',
  //     Component:<SecondTab />
  //   },
  //   {
  //     label:'Tab-6',
  //     Component:<ThridTab />

  //   },
  //   {
  //     label:'Tab-1',
  //     Component:<FirstTab />
  //   },
  //   {
  //     label:'Tab-2',
  //     Component:<SecondTab />
  //   },
  //   {
  //     label:'Tab-3',
  //     Component:<ThridTab />

  //   },
  //   {
  //     label:'Tab-4',
  //     Component:<FirstTab />
  //   },
  //   {
  //     label:'Tab-5',
  //     Component:<SecondTab />
  //   },
  //   {
  //     label:'Tab-6',
  //     Component:<ThridTab />

  //   },
  //   {
  //     label:'Tab-1',
  //     Component:<FirstTab />
  //   },
  //   {
  //     label:'Tab-2',
  //     Component:<SecondTab />
  //   },
  //   {
  //     label:'Tab-3',
  //     Component:<ThridTab />

  //   },
  //   {
  //     label:'Tab-4',
  //     Component:<FirstTab />
  //   },
  //   {
  //     label:'Tab-5',
  //     Component:<SecondTab />
  //   },
  //   {
  //     label:'Tab-6',
  //     Component:<ThridTab />

  //   }
  // ]
  // <Tabs tabList={tabList}/> 

  return (
 
    
//     <div >
      
//    <h1 className='underline'>namaster js</h1>
   



// </div>
<BrowserRouter>
<SideNavbar>
<Routes>
  <Route path='/' element={<Dashboard/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/analytics' element={<Analytics/>}/>
  <Route path='/product' element={<Product/>}/>
  <Route path='/Productlist' element={<ProductList/>}/>
  <Route path='/components' element={<Components/>}/>

</Routes>
</SideNavbar>
</BrowserRouter> 

  )
 
}

export default App;

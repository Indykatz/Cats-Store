import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'
import About from '../pages/About';
import Home from '../pages/Home';
import Breeds from '../pages/Breeds';
import Contact from '../pages/Contact';
import Basket from '../pages/Basket';
import Bengals from '../pages/Bengals';

const Sidebar = ({isOpen, toggle}) => {
  return (

  <>
  <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
    <SidebarWrapper>
        <SidebarMenu>
            <SidebarLink to = "/About" onClick={toggle}>About</SidebarLink>
            <SidebarLink to = "/Breeds" onClick={toggle}>Breeds</SidebarLink>
            <SidebarLink to = "/Bengals" onClick={toggle}>Bengals</SidebarLink>
            <SidebarLink to = "/Contact" onClick={toggle}>Contact</SidebarLink>
            <SidebarLink to = "/Basket" onClick={toggle}>Basket</SidebarLink>
        </SidebarMenu>

        <SideBtnWrap>
            <SidebarRoute to = '/Demo'>Button</SidebarRoute>
        </SideBtnWrap>


    </SidebarWrapper>
    

    </SidebarContainer>

    <Routes>
            <Route path ='/Home' element={<Home />} />
            <Route path ='/About' element={<About />} />
            <Route path ='/Breeds' element={<Breeds />} />
            <Route path ='/Bengals' element={<Bengals />} />
            <Route path ='/Contact' element={<Contact />} />
            <Route path ='/Basket' element={<Basket />} />
        </Routes>
    

    </>
  )
}

export default Sidebar
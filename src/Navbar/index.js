import React from 'react'
import {GiCat, GiBasket} from 'react-icons/gi'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem,
    NavLink,
    NavBtn,
    NavBtnLink
} from './NavbarElements'
import {Routes, Route} from 'react-router-dom'
import About from '../pages/About';
import Home from '../pages/Home';
import Breeds from '../pages/Breeds'
import Contact from '../pages/Contact'
import Basket from '../pages/Basket'
import Bengals from '../pages/Bengals'




const Navbar = ({toggle}) => {
  return (
    
<>
          <Nav>

              <NavbarContainer>
                  <NavLogo to='/'>
                      Logo
                  </NavLogo>
                 
                  <MobileIcon onClick={toggle}>
                      <GiCat />
                  </MobileIcon>

                  <NavMenu>
                      <NavItem>
                          <NavLink to='/About'>About</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink to='/Breeds'>Breeds</NavLink>
                      </NavItem>
                      <NavItem>
                      <NavLink to='/Bengals'>Bengals</NavLink>
                      </NavItem>
                      <NavItem>
                      <NavLink to='/Contact'>Contact</NavLink>
                      </NavItem>
                 </NavMenu>

              <NavBtn>
                    <NavBtnLink >
                  <GiBasket to='/Basket' />
                    </NavBtnLink>
              </NavBtn>
          </NavbarContainer>

        </Nav>      

         <Routes>
              <Route path ='/' element={<Home />} />
              <Route path='/About' element={<About />} />
              <Route path='/Breeds' element={<Breeds />} />
              <Route path='/Bengals' element={<Bengals />} />
              <Route path='/Contact' element={<Contact />} />
              <Route path='/Basket' element={<Basket />} />
          </Routes>
</>  
    
  )
}

export default Navbar

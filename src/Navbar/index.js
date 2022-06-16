import React from "react";
import { GiCat } from "react-icons/gi";
// GiBasket
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  //   NavBtn,
  //   NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Logo</NavLogo>

          <MobileIcon onClick={toggle}>
            <GiCat />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/breeds">Breeds</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/bengals">Bengals</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact">Contact</NavLink>
            </NavItem>
          </NavMenu>

          {/* <NavBtn>
            <NavBtnLink>
              <GiBasket to="/Basket" />
            </NavBtnLink>
          </NavBtn> */}
        </NavbarContainer>
      </Nav>

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Breeds" element={<Breeds />} />
        <Route path="/Bengals" element={<Bengals />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Basket" element={<Basket />} />
      </Routes> */}
    </>
  );
};

export default Navbar;

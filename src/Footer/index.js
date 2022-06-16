import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink } from './FooterElements'
import {Routes, Route} from 'react-router-dom'
import About from '../pages/About'

const Footer = () => {
  return (

<>

    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>

                    <FooterLinksItems>
                    <FooterLinkTitle>/About Us</FooterLinkTitle>
                            
                           
                            <FooterLink to='/About'>Testimonials</FooterLink>
                            <FooterLink to='/About'>Careers</FooterLink>
                            <FooterLink to='/About'>Investors</FooterLink>
                            <FooterLink to='/About'>/About</FooterLink>

                        
                    </FooterLinksItems>

                    <FooterLinksItems>
                    <FooterLinkTitle>/About Us</FooterLinkTitle>
                            
                           
                            <FooterLink to='/About'>Testimonials</FooterLink>
                            <FooterLink to='/About'>Careers</FooterLink>
                            <FooterLink to='/About'>Investors</FooterLink>
                            <FooterLink to='/About'>/About</FooterLink>

                        
                    </FooterLinksItems>

                </FooterLinksWrapper>

                <FooterLinksWrapper>
                    
                    <FooterLinksItems>
                    <FooterLinkTitle>/About Us</FooterLinkTitle>
                            
                           
                            <FooterLink to='/About'>Testimonials</FooterLink>
                            <FooterLink to='/About'>Careers</FooterLink>
                            <FooterLink to='/About'>Investors</FooterLink>
                            <FooterLink to='/About'>/About</FooterLink>

                        
                    </FooterLinksItems>


                    <FooterLinksItems>
                    <FooterLinkTitle>/About Us</FooterLinkTitle>
                            
                           
                            <FooterLink to='/About'>Testimonials</FooterLink>
                            <FooterLink to='/About'>Careers</FooterLink>
                            <FooterLink to='/About'>Investors</FooterLink>
                            <FooterLink to='/About'>/About</FooterLink>

                        
                    </FooterLinksItems>

                </FooterLinksWrapper>

            </FooterLinksContainer>

        </FooterWrap>

    </FooterContainer>
    <Routes>
    <Route path='/About' element={<About />} />
    </Routes>

</>

)
}

export default Footer
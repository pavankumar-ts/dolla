import React,{useState, useEffect} from 'react'
import { FaLinkedin, FaFacebook, FaInstagram,FaTwitter,FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinkContainer,
FooterLinkWrapper, FooterLinkItems, FooterlinkTitle,
FooterLink, SocialMedia,SocialMediaWrap, SocialLogo,WebsiteRights,
SocialIcons, SocialIconLink } from './FooterElements'
import { animateScroll as scroll } from 'react-scroll'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinkContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterlinkTitle>About Us</FooterlinkTitle>
                                <FooterLink to="/">How it works</FooterLink>
                                <FooterLink to="/">Testinomials</FooterLink>
                                <FooterLink to="/">Careers</FooterLink>
                                <FooterLink to="/">Investors</FooterLink>
                                <FooterLink to="/">Term of Service</FooterLink> 
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterlinkTitle>Video</FooterlinkTitle>
                                <FooterLink to="/">Submit video</FooterLink>
                                <FooterLink to="/">Ambassadors</FooterLink>
                                <FooterLink to="/">Agency</FooterLink>
                                <FooterLink to="/">Influencer</FooterLink>
                                
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterlinkTitle>Contact Us</FooterlinkTitle>
                                <FooterLink to="/">Support</FooterLink>
                                <FooterLink to="/">Destination</FooterLink>
                                <FooterLink to="/">Contact</FooterLink>
                                <FooterLink to="/">Sponsorship</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterlinkTitle>Social Media</FooterlinkTitle>
                                <FooterLink to="/">Instagram</FooterLink>
                                <FooterLink to="/">FaceBook</FooterLink>
                                <FooterLink to="/">Youtube</FooterLink>
                                <FooterLink to="/">Twitter</FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                </FooterLinkContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome} >
                            dollo
                        </SocialLogo>
                        <WebsiteRights>developer: pavan kumar
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com" target="_blabk" aria-label="facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="//instagram.com" target="_blabk" aria-label="imstagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="//youtube" target="_blabk" aria-label="youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="//twitter.com" target="_blabk" aria-label="twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="//linkedin" target="_blabk" aria-label="linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer

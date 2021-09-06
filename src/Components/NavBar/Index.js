import React,{useState,useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo,MobileIcon,NavItem,
    NavMenu,NavLinkS,NavBtb,NavBtnLink} from './NavBarElements'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () =>{
        if(window.scrollY >=80 ) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    },[])
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav scrollNav={scrollNav} >
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome} >Dolla</NavLogo>
                    <MobileIcon onClick={toggle} >
                    <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinkS to="about"
                            smooth={true} 
                            duration={500} 
                            spy={true} //trigers &:active from NavElementes.js
                            exact="true" 
                            offset={-80}
                            >About</NavLinkS>
                        </NavItem>
                        <NavItem>
                            <NavLinkS to="discover" 
                            smooth={true} 
                            duration={500} 
                            spy={true} //trigers &:active from NavElementes.js
                            exact="true" 
                            offset={-80}
                            >Discover</NavLinkS>
                        </NavItem>
                        <NavItem>
                            <NavLinkS to="services" 
                            smooth={true} 
                            duration={500} 
                            spy={true} //trigers &:active from NavElementes.js
                            exact="true" 
                            offset={-80}
                            >Services</NavLinkS>
                        </NavItem>
                        <NavItem>
                            <NavLinkS to="signup" 
                            smooth={true} 
                            duration={500} 
                            spy={true} //trigers &:active from NavElementes.js
                            exact="true" 
                            offset={-80}
                            >Sign Up</NavLinkS>
                        </NavItem>
                    </NavMenu>
                    <NavBtb>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtb>
                </NavbarContainer>

            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar

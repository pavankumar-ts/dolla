import React,{useState,useEffect} from 'react'
import Footer from '../Components/Footer/Index'
import HeroSection from '../Components/HeroSection/Index'
import { homeObjOne,homeObjTwo,homeObjThree } from '../Components/InfoSection/Data'
import { InfoSection } from '../Components/InfoSection/Index'
import Navbar from '../Components/NavBar/Index'
import Services from '../Components/Services/Index'
import Sidebar from '../Components/SideBar/Index'

function Home() {
    const [isOpen,setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    } 
    useEffect(() => {
        console.log(isOpen);
    }, [])

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} setIsOpen={setIsOpen} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection  {...homeObjOne} />
            <InfoSection  {...homeObjTwo} />
            <Services />
            <InfoSection  {...homeObjThree} />
            <Footer />
            
        </>
    )
}

export default Home

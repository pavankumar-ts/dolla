import React,{useState} from 'react';
import video from '../../video/video.mp4';
import {HeroContainer, HeroBg, VideoBg,HeroContent,HeroP,HeroH1, HeroBtnWrapper,ArrowRight,ArrowForward} from './HeroElements';
import { Button } from '../ButtonElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () =>{
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={video} type='video/mp4' src={video} />
            </HeroBg>
            <HeroContent>
                <HeroH1> Virtual Banking Made Easy </HeroH1>
                <HeroP>
                    Sign Up for a New Account today and recieve $250 in credits towards 
                    your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    < Button to='signup'
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80} >
                    get Started {hover ? <ArrowForward /> : <ArrowRight /> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
        
    )
}

export default HeroSection;
import {Button} from '../ButtonElements'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight } from './HeroElements';
import { useState } from 'react'

const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        
        setHover(!hover);
    };


  return (
      <HeroContainer>
          <HeroBg>
              <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
          </HeroBg>
          <HeroContent>
              <HeroH1>Find Missing Persons</HeroH1>
              <HeroP> Sign Up now to help the community of drug abusers</HeroP>
              <HeroBtnWrapper>
                  <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
                      primary='true'
                      dark = 'true'
                  >
                      Get Started! {hover ? <ArrowForward />:<ArrowRight />}
                  </Button>
              </HeroBtnWrapper>
          </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
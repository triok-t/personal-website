import React, { useState } from 'react'
import { Button } from '../ButtonElements'
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroH2,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  ContainerModal,
} from './HeroElements'
import Video from '../../videos/video.mp4'
import { Modal } from '../Modal/Modal'

export const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  // const [showModal, setShowModal] = useState(false)

  // const openModal = () => {
  //   setShowModal((prev) => !prev)
  // }

  return (
    <>
      <HeroContainer id='home'>
      {/* <ContainerModal>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </ContainerModal> */}
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH1>Hi I'm Kittipong</HeroH1>
          <HeroH2>Full Stack Developer</HeroH2>
          <HeroP>
            Years of experience in full-stack development and derivering quality
            works.
          </HeroP>
          <HeroBtnWrapper>
            <Button
              to='about'
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary='true'
              dark='true'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
              // onClick={openModal}
            >
              Work Experiences {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  )
}

export default HeroSection

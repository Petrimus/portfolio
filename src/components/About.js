import React from 'react'

import { StyledAbout, StyledAboutText, StyledTitle, StyledSubTitle } from './styles/aboutStyles'


const About = () => {

  return (
    <StyledAbout id="about">
      <StyledAboutText>
        <StyledTitle>Petri Palmu</StyledTitle>
        <StyledSubTitle>Web Developer</StyledSubTitle>
      </StyledAboutText>
    </StyledAbout>
  )
}

export default About
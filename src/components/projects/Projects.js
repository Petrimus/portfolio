import React, { useState } from 'react'

import Project from './Project'
import { StyledButton } from '../styles/StyledButton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import {
  StyledProjectSection,
  StyledProjectGrid, 
  StyledHeader2 }
from '../styles/projectStyles'



const Projects = ({ projects }) => {

  const [howMany, setHowMany] = useState(6)
  const [pressed, setPressed] = useState(false)

  const handleButtonClick = () => {
    pressed ? setHowMany(6) : setHowMany(projects.length)
    setPressed(!pressed)
  }
  
  return (
    <StyledProjectSection id="project">
      <StyledHeader2>These are some of my projects</StyledHeader2>
      <StyledProjectGrid>
        {projects.slice(0, howMany).map(pro => <Project key={pro.id}
          name={pro.name} image={pro.image} url={pro.url} id={pro.id} />
        )}
      </StyledProjectGrid>
      <StyledButton handleClick={handleButtonClick}>
        {
          pressed ? <div>Show less <FontAwesomeIcon icon={faChevronLeft} /></div> :
            <div>Show more <FontAwesomeIcon icon={faChevronRight} /></div>
        }
      </StyledButton>      
    </StyledProjectSection>
  )
}


export default Projects
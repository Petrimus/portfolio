import React, { useState } from 'react'

import { StyledButton } from './styles/StyledButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import fullstack from '../images/certificate-fullstackopen.png'
import mooc from '../images/moockuva.jpg'
import docker from '../images/certificate-docker.png'

import {  
  StyledCertificationSection,  
  CertiGrid,
  StyledImage
}
from './styles/certiStyles'
import { StyledHeader2 } from './styles/projectStyles'


const Certificates = () => {
  const [pressed, setPressed] = useState(false)

  const handleButtonClick = () => {    
    setPressed(!pressed)
  }

  return (
    <StyledCertificationSection>      
      <StyledHeader2>... and my certificates</StyledHeader2>
      <CertiGrid>
        <StyledImage src={mooc} alt="certificate mooc" offset='0px' />
        <StyledImage src={fullstack} alt="certificate fullstack" offset='0' />
        {
          pressed && <StyledImage src={docker} alt="certificate Docker" offset='0' />
        }
      </CertiGrid>
      <StyledButton handleClick={handleButtonClick}>
        {
          pressed ? <div>Show less <FontAwesomeIcon icon={faChevronLeft} /></div> :
            <div>Show more <FontAwesomeIcon icon={faChevronRight} /></div>
        }
      </StyledButton>      
    </StyledCertificationSection>
  )
}

export default Certificates



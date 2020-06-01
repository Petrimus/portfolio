import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin  } from '@fortawesome/free-brands-svg-icons'
import { faAt, faMobileAlt } from '@fortawesome/free-solid-svg-icons'

import {
  StyledContactWrapper,
  StyledContactLinks,
  StyledContactDetails
} from './styles/contactStyles'


const Contacts = () => (
  <StyledContactWrapper id='contact'>
    <h2>Please, for more information...</h2>
    <StyledContactLinks>
      <StyledContactDetails
        href="https://github.com/Petrimus"
        target="_blank">
        <FontAwesomeIcon icon={faGithub} style={{marginRight: '0.5rem'}} />
          GitHub
      </StyledContactDetails>

      <StyledContactDetails
        href="https://www.linkedin.com/in/petri-palmu"
        target="_blank">
        <FontAwesomeIcon icon={faLinkedin} style={{marginRight: '0.5rem'}} />
          Linkedin
      </StyledContactDetails>

      <StyledContactDetails
        href="tel:+358 504285790">
        <FontAwesomeIcon icon={faMobileAlt} style={{marginRight: '0.5rem'}} />
          Call me
      </StyledContactDetails>

      <StyledContactDetails
        href="mailto:petrimus76@gamil.com">
        <FontAwesomeIcon icon={faAt} style={{marginRight: '0.5rem'}} />
          or send mail
      </StyledContactDetails>
    </StyledContactLinks>

  </StyledContactWrapper>
)

export default Contacts
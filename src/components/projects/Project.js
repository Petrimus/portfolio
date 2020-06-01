import React from 'react'

import {
  StyledProject, 
  StyledImg,
  ProjectNameContainer,
  StyledProjectTitle,
  StyledSpan,
} from '../styles/projectStyles'


const Project = (props) => {

  return (
    <StyledProject to={`projects/${props.id}`}>
      <StyledImg src={require(`../../images/${props.image}`).default} alt="project" />
      <ProjectNameContainer>
        <StyledProjectTitle>
          <StyledSpan className="code">&lt;</StyledSpan>
          {props.name}
          <StyledSpan>&#47;&gt;</StyledSpan>
        </StyledProjectTitle>
      </ProjectNameContainer>
    </StyledProject>
  )
}

export default Project
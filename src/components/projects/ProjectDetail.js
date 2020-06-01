import React from 'react'
import styled from 'styled-components'

import { StyledLink } from '../styles/StyledLink'

const Container = styled.div`
position: absolute;
width: 100vw;
height: 100vh;
background-color: ${props => props.theme.OVERCAST}

`
const StyledWrapper = styled.div`
margin: 100px auto;
width: 70%;
padding: 2em;
background-color: white;
`

const StyledTitle = styled.div`
margin-bottom: 60px;
text-align: center;

`
const StyledDiv = styled.div`
margin-bottom: 10px;
opacity: 0.6;

a {
  text-decoration: none;
}
`

const ProjectDetail = ({ project }) => {
  if (project === undefined) {
    return null
  }


  // console.log('project', project)

  return (
    <Container>
      <StyledWrapper>
        <StyledTitle><h1>{project.name}</h1></StyledTitle>
        {
          project.url.length > 0 &&
          <StyledDiv><span><b>Demo:</b></span> <a href={project.url} target="blank">{project.url}</a></StyledDiv>
        }
        <StyledDiv><span><b>GitHub:</b></span> <a href={project.github} target="blank">{project.github}</a></StyledDiv>

        <StyledDiv><span><b>Description:</b></span> <span>{project.description}</span></StyledDiv>
        {
          project.instructions.length > 0 &&
          <StyledDiv><span><b>Instructions:</b></span> <span>{project.instructions}</span></StyledDiv>
        }
        <StyledLink to="/#project">back to portfolio</StyledLink>
      </StyledWrapper>
    </Container>
  )
}

export default ProjectDetail
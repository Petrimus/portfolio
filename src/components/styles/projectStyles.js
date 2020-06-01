import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledProjectSection = styled.section`
text-align: center;
padding: 6rem 2rem;
background-color: ${props => props.theme.PAPER};
`
// layout
export const StyledProjectGrid = styled.div`
width: 100%;  
display: grid;
grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
grid-gap: 4rem;
max-width: 1280px;
margin: 0 auto;
margin-bottom: 6rem;

`

export const StyledHeader2 = styled.h2`
font-size: 2em;
opacity: 0.7;
width: 640px;
margin: 0 auto 3em auto;  
border-bottom: 0.rem solid #6D7993; 
`

export const StyledSpan = styled.span`
  color: ${props => props.theme.OVERCAST};
  transition: color 0.3s ease-out;
`



export const StyledImg = styled.img`
  height: 480px;
  width: 100%;
  object-fit: cover;
  display: block;
`

export const StyledProjectTitle = styled.p` 
  color: whitesmoke;
  font-size: 1.5em;
  padding: 0.5em 0.5em; 
  transition: color 0.3s ease-out;
`

export const ProjectNameContainer = styled.div`
  height: 140px;
  background-color: ${props => props.theme.OVERCAST};
`

export const StyledProject = styled(Link)`
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  border-radius: 2px;
  background-color: whitesmoke;
  text-decoration: none;
  transition: color 0.3s ease-out; 

  &:hover {
    ${StyledSpan}{
    color: white;
    }
  }
`
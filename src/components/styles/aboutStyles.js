import styled, { css } from 'styled-components'

import personImg from '../../images/IMG_outdoor1.jpg'
console.log('person image', personImg)


export const StyledAbout = styled.div` 
  width: 100%;
  height: 100vh;
  display: flex; 
  justify-content: flex-end;
  align-items: center;
  position: relative;
  
  ::before {
    background-image: url(${personImg});
    background-size: cover;
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
    opacity: 0.8;
    }

  ::after {
    background-color: ${props => props.theme.DUSTY};
    content: "";
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100vh;
    z-index: -1;
    opacity: 0.2;
    }    
`

export const StyledAboutText = styled.div`
  color:${props => props.theme.LEVANDAR};  
  width: 40%;
  height: 20%;  
  margin-top: 2em; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  

  ::before {
    content: "";    
    width: 40%;
    height: 20%;   
    position: absolute;     
    opacity: 0.5;
    border-radius: 10px;
    background-color: ${props => props.theme.DUSTY};
    z-index: -1;   
  }
`
const sharedStyle = css` 
 color: white;
 opacity: 1;
 
`
export const StyledTitle = styled.h1` 
${sharedStyle}
 
  text-transform: uppercase;  
`

export const StyledSubTitle = styled.h2`
${sharedStyle}
`


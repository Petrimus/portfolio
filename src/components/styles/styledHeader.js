import styled, { css } from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link'

export const StyledNavBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center; 
  position: fixed;
  background-color: ${props => props.theme.DUSTY};
  z-index: 1;
  /* visibility: ${props => props.isOpen ? 'visible' : 'hidden'}; */
  // animation-related styles:
  -webkit-transform: translate3d(0,0,0);
    -moz-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    -webkit-transition: -webkit-transform .3s;
    -moz-transition: -moz-transform .3s;
    -o-transition: transform .3s;
    transition: transform .3s;
  /* transform: translate3d(0, 0, 0); 
  transition: transform .7s; */

  &.hidden {
    -webkit-transform: translate3d(0,-100%,0);
    -moz-transform: translate3d(0,-100%,0);
    transform: translate3d(0,-100%,0);
    /*
    transform: translate3d(0, -100%, 0);
    transition: transform .7s;  
    */  
  }
`
// links
export const StyledNavLinks = styled.div`
display: flex;
margin-right: 2em;

`
const sharedLink = css`
  text-align: center;
  text-decoration: none;
  color: white;
  padding: 0.1em 0.5em 0.1em 0.5em;
  /* z-index: 2; */
  &:hover {  
    color: ${props => props.theme.LAVENDAR};
    font-weight: bold;
  }
`

export const StyledNavLink = styled(Link)`
${sharedLink}
`
export const StyledHyperLink = styled.a`
${sharedLink}
`

// images
export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5em;
 
`
export const StyledImg = styled.img` 
  width: 1.2em;
  height: 1.2em;  
`

export const BorderRight = styled.div` 
  height: 1.5em;
  margin: 0 0.5em 0 0.5em;
  border-left: 1px solid black; 
`

// menu dropdown
export const StyledMenuDropdownContainer = styled.div`  
  right: 1em;
  position: absolute; 
  background-color: ${props => props.theme.DUSTY};  
`

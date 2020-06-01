import styled, { keyframes }from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center; 
  width: 100%;
  height: 100vh;
  background: #333;
  list-style: none;
`

export const SkillsDiv = styled.div`
padding: 2em 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 80%;
  height: 100%;  
  color: white;

  @media (min-width: 75em) {   
    width: 60%;  
  }
  
  
  h1 {
  text-shadow: #2187e7b3 2px 2px;
  opacity: 0.8;
 }  
`


export const ListItem = styled.li`
 /* margin: 30px 0; */
 padding-left: 20px;

 h3 {
   margin-bottom: 10px;
   opacity: 0.8;   
 } 
`

export const BarWrapper = styled.span`
  background: #353b48;
  display: block;
  height: 5px;
  border: 1px solid rgba(0,0,0,0.3);
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 0 10px #2187e7b3; 
`

export const Bar = styled(BarWrapper)`
  height: 5px;
  float: left;
  background: #2187e7b3;
  width: ${props => props.width};
  animation: ${props => animation(props.width)} 2s;
`

const animation = (width) => keyframes`
  0%{
    width: 0%;
  }
  100%{
    width: ${width}
  }
  `



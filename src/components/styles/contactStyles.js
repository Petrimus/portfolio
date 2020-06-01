import styled from 'styled-components'

export const StyledContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center; 
  height: 80vh;  
  background: ${props => props.theme.LAVENDAR};

  h2 {
    color: whitesmoke;
    font-size: 3.5rem;
  } 
`

export const StyledContactLinks = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  max-width: 980px;
  margin-top: 4em;
  flex-wrap: wrap;
`

export const StyledContactDetails = styled.a` 
  font-size: 2em;
  text-shadow: 2px 2px 1px #1f1f1f;
  text-decoration: none;
  color: whitesmoke; 
  transition: transform 0.3s ease-out;
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 2px;

  :hover {
    transform: translateY(8px);
  }
`
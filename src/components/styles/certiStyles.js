import styled from 'styled-components'
 
 export const StyledCertificationSection = styled.div`
  text-align: center;
  padding: 6em 2rem 6rem 2rem;
  background-color: ${props => props.theme.OVERCAST};
`

export const CertiGrid = styled.div`
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(640px, 1fr));
  grid-gap: 4rem; 
  margin-bottom: 6rem;
`

export const StyledImage = styled.img` 
  height: 600px;
  width: 100%;
  object-fit: cover;
  display: block;
  overflow: hidden; 

   @media only screen and (max-width: 1200px) {
    width: 400px;
  }
 
`
export const StyledCertiWrapper = styled.div`
  margin-bottom: 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
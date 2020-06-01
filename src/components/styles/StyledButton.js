import styled from 'styled-components'
import Button from '../Button'

export const StyledButton = styled(Button)`
  padding: 1rem 1.5rem;
  margin-bottom: 3rem;
  border-radius: 5px;
  color: whitesmoke;
  background-color: #303841;
  font-size: 2rem;
  outline:none;
  transition: color 0.3s ease-out;

  :hover{
  color: ${props => props.theme.LAVENDAR};
}
`
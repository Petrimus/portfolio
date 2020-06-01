import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CheckWrapper = styled.div`
  position: absolute;
`
const StyledLabel = styled.label`
  display: inline-block;
  margin: 3px 0 0 10px;
  width: 20px;
  height: 20px;
  background-color: whitesmoke;
  border-radius: 3px;
  position: relative;
  transition: background-color .5s;

  &:after {
    content: '';
    position: absolute;
    width: 9px;
    height: 12px;
    border-right: 3px solid #fff;
    border-bottom: 3px solid #fff;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%) rotateZ(40deg);
    opacity: 0;
    transition: all .4s;
  } 
 
`

const StyledInput = styled.input`
  opacity: 0;

  &:checked ~ ${StyledLabel} {
    background-color: ${props => props.theme.LAVENDAR}
       /* background-color: #08bb68; */  
    }

  &:checked {
   & ~ ${StyledLabel}:after {
      opacity: 1;    
    }
  }

`

const Checkbox = ({ id, isSelected, onCheckboxChange }) => {
  return (
    <CheckWrapper>
      <StyledInput
        type='checkbox'
        id={id}
        checked={isSelected}
        onChange={onCheckboxChange(id)}
      />
      <StyledLabel htmlFor={id}></StyledLabel>
    </CheckWrapper>
  )
}

export default Checkbox

Checkbox.propTypes = {
  id: PropTypes.string,
  isSelected: PropTypes.bool,
  handleChange: PropTypes.func
}
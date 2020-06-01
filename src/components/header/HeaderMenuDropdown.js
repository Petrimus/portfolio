import React, { useState, useRef, useEffect } from 'react'

import menuImg from '../../images/menu.svg'
import NavMenuTable from './NavMenuTable'

import {
  ImageContainer,
  StyledImg, 
  StyledMenuDropdownContainer 
} from '../styles/styledHeader'


const HeaderMenuDropdown = ({ links, onCheckboxChange }) => {
  const node = useRef();

  const [open, setOpen] = useState(false);

  const handleClickOutside = e => {
    console.log("clicking anywhere");
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    setOpen(false);
  }

  const handleChange = selectedValue => {
    setOpen(!open);
  }

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open])

  return (
    <div style={{ marginRight: '1em' }} ref={node}>
      <ImageContainer  onClick={handleChange}>
        <StyledImg
          src={menuImg}
          alt='menu'
        />
      </ImageContainer> 
      {open && (
        <StyledMenuDropdownContainer>
          <NavMenuTable 
          links={links}
          onCheckboxChange={onCheckboxChange}
          />
        </StyledMenuDropdownContainer>
      )}     
    </div>
  )
}

export default HeaderMenuDropdown

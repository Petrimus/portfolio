import React, { useRef, useEffect } from 'react'
import styled, { css } from 'styled-components'
import searchImg from '../../images/search.svg'

import {
  ImageContainer,
  StyledImg,
  StyledNavLink,
  StyledHyperLink,
  BorderRight
} from '../styles/styledHeader'


import { useField } from '../../hooks/hooks'

const shareStyles = css`
  cursor: pointer;
  line-height: 1.2em;
  
`
const Label = styled.label`
${shareStyles}
  width: 12em;
  padding-left: 10px; 
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 2em;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;   
 
`

const Input = styled.input`
${shareStyles}
  height: 1.3em;
  width: 85%;
  /* flex: 0 0 6em; */
  margin: 0 0.5em 0 0.5em;
  border: none;
  font-size: 0.8em;
  border-radius: 5px;
  color: white;
  background-color: ${props => props.theme.PAPER};
  transition: background-color .4s color 0.4s;

  @supports(-webkit-appearance: none) or (-moz-appearance: none) {  
    -webkit-appearance: none;
    -moz-appearance: none;  
}

&:hover ${Input} {
  &:not(:focus) {
    color: black;
    background-color: white;    
  } 
}

&:focus {
  background-color: white;
  color: black;
}
`
const SearchMenuContainer = styled.div`
  width: 12em;
  position: absolute; 
  background-color: ${props => props.theme.DUSTY};
`

const SearchBar = ({ links }) => {
  const searchField = useField('search')

  const handleReset = () => {
    searchField.reset()
  }
  const availlableLinks = () => {
    if (searchField.value === '') {
      return []
    } else {
      return links.filter(link => link.name.includes(searchField.value))
    }
  }

  return (
    <div>
      <Label >
        <ImageContainer>
          <StyledImg
            src={searchImg}
            alt='searc icon'
          />
        </ImageContainer>
        <BorderRight />
        <Input
          {...searchField.withoutReset}
          placeholder=' ... search'
          name='searchInput'
          autocomplete='off'
        />
      </Label>
      <SearchMenu
        isOpen={searchField.value !== ''}
        links={availlableLinks()}
        reset={handleReset}
      />
    </div>
  )
}

export default SearchBar


const SearchMenu = ({ isOpen, links, reset }) => {
  // console.log('links', links)

  if (!isOpen) {
    document.removeEventListener('mousedown', handleClick)
    return null
  }

  const node = useRef()

  const handleClick = (event) => {
    if (node.current.contains(event.target)) {
      return
    }
    reset()
    document.removeEventListener('mousedown', handleClick)
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [])

  return (
    <SearchMenuContainer ref={node} >
      {
        links.length === 0 ? <div>No matches found</div>
          : links.map((link) => {
            return (
              <div
                key={link.name}
              >
                {
                  link.type === 'link' ?
                    <StyledNavLink
                      to={link.url}
                    >{link.name} </StyledNavLink>
                    : <StyledHyperLink
                      href={link.url}
                      target='blank'
                    >
                      {link.name}
                    </StyledHyperLink>
                }
              </div>
            )
          })
      }
    </SearchMenuContainer>
  )
}

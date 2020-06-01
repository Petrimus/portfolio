import React, { useEffect, useState } from 'react'

import { linksData } from '../../links'
import HeaderMenuDropdown from './HeaderMenuDropdown'

import {
  StyledNavBar,
  StyledNavLinks,
  StyledNavLink,
  StyledHyperLink
} from '../styles/styledHeader'

import SearchBar from './SearchBar'


const Header = ({ isOpen }) => {

  const [links, setLinks] = useState([])

  useEffect(() => {
    setLinks(linksData)
  }, [])

  const handleIncludeChange = (name) => () => {
    const changeIndex = links.findIndex(link => link.name === name)
    let newArray = [...links]
    newArray[changeIndex] =
      { ...newArray[changeIndex], checked: !newArray[changeIndex].checked }
    setLinks(newArray)
  }

  const showLinks = links.filter(link => link.checked)
  // console.log('header links ', links)

  return (
    <StyledNavBar className={ !isOpen && 'hidden' } >
      <SearchBar links={links} />
      <StyledNavLinks>
        {
          showLinks.map((link) => {
            return (
              link.type === 'link' ?
                <StyledNavLink
                  key={link.name}
                  to={link.url}
                >
                  {link.name}
                </StyledNavLink>
                : <StyledHyperLink
                  key={link.name}
                  href={link.url}
                  target='blank'
                >
                  {link.name}
                </StyledHyperLink>
            )
          })
        }          

      </StyledNavLinks>
      <HeaderMenuDropdown
        links={links}
        onCheckboxChange={handleIncludeChange}
      />

    </StyledNavBar>
  )
}

export default Header


import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Checkbox from './Checkbox'
import {
  StyledNavLink,
  StyledHyperLink
} from '../styles/styledHeader'

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  background-color: ${props => props.theme.PAPER}
`

const Th = styled.th`
  padding: 0.25rem;
  text-align: left;
  border: 1px solid #ccc;
  font-size: 0.8em;
`

const Td = styled.td`
  font-size: 0.7em;
  padding: 0.25rem;
  text-align: left;
  /* border: 1px solid #ccc; */
`

const StyledBody = styled.tbody`
& tr:nth-child(odd) {
  background: ${props => props.theme.LIGHTGRAY};
}
`

const NavMenuTable = ({ links, onCheckboxChange }) => {
  // console.log('links ', links)

  if (links.length === 0) {
    return null
  }
  
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <Th>Go</Th>
            <Th>Link</Th>
            <Th>Description</Th>
            <Th>URL</Th>
            <Th>Include</Th>
          </tr>
        </thead>
        <StyledBody>
          {
            links.map((link) => {
            return (
              <tr key={link.name}>
                <td>
                  {
                    link.type === 'link' ?
                      <StyledNavLink
                        to={link.url}
                      > > </StyledNavLink>
                      : <StyledHyperLink
                        href={link.url}
                        target='blank'
                      >
                        >
                    </StyledHyperLink>
                  }
                </td>
                <Td>{link.name}</Td>
                <Td>{link.description}</Td>
                <Td>{link.url}</Td>
                <Td style={{ verticalAlign: 'top' }}>
                  <Checkbox
                    id={link.name}
                    onCheckboxChange={onCheckboxChange}
                    isSelected={link.checked}
                  />
                </Td>
              </tr>
            )
          })
          }
        </StyledBody>
      </Table>
    </div >
  )
}

export default NavMenuTable

NavMenuTable.propTypes = {
  links: PropTypes.array,
  handleChange: PropTypes.func
}

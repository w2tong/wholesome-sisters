import React from 'react'
import styled from 'styled-components'
import { TextHighlightColor } from '../styles'

const StyledA = styled.a`
  color: ${TextHighlightColor};
  text-decoration: none;
  &:hover {
    color: #FFFFFF;
  }
`

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

function Link (props: LinkProps) {
  return (
    <StyledA className={props.className} href={props.href} target="_blank" rel="noreferrer">{props.children}</StyledA>
  )
}

export default Link

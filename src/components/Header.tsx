import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import media from '../media'
import { ContentBackgroundColor, Content2BackgroundColor, BackgroundHighlightColor, TextHighlightColor } from '../styles'

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: flex-cenb;
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: ${ContentBackgroundColor};
  border-bottom: solid 2px ${Content2BackgroundColor};
`

const LogoNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
`

const Logo = styled.div`
  font-family: 'Helvetica';
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  width: 100px;
  padding: 0 5px;
  &:hover {
    color: ${TextHighlightColor};
  }
`

const HiddenLogo = styled(Logo)`
  visibility: hidden;
  @media (max-width: ${media.XSmall}px) {
    display: none;
  }
`

const Links = styled.div`
  display: flex;
  height: 100%;
  @media (max-width: ${media.XSmall}px) {
    margin-left: 5%;
    margin-right: 10%;
  }
`

const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 55px;
  max-width: 80px;
  height: 100%;
  padding: 0 20px;
  color: white;
  text-decoration: none;
  &:hover {
    color: ${TextHighlightColor};
    text-shadow: 0 0 5px ${TextHighlightColor};
    background-color: ${BackgroundHighlightColor};
    transition: text-shadow 500ms;
  }
  &.active {
    color: ${TextHighlightColor};
  }
  @media (max-width: ${media.XSmall}px) {
    padding: 0 5px;
  }
`

function Header () {
  return (
    <NavBar>
      <LogoNavLink to="/"><Logo>Wholesome Sisters</Logo></LogoNavLink>
      <Links>
        <div><StyledNavLink to="/">Home</StyledNavLink></div>
        <div><StyledNavLink to="/news">News</StyledNavLink></div>
        <div><StyledNavLink to="/roster">Roster</StyledNavLink></div>
      </Links>
      <HiddenLogo></HiddenLogo>
    </NavBar>
  )
}

export default Header

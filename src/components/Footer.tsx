import styled from 'styled-components'
import { ContentBackgroundColor, Icon } from '../styles'
import media from '../media'

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${ContentBackgroundColor};
  width: 100%;
  // max-width: ${media.XXLarge}px;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  padding: 25px 0;
  
  align-items: center;
  & > * {
    padding: 0 10px;
  }
`

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  padding-bottom: 10px;
`

const Links = styled.div`
  display: flex;
  flex-direction: row;
`

function Footer ({ className } : {className?: string}) {
  return (
    <StyledFooter className={className}>
      <Title>Links</Title>
      <Links>
        <a href="https://raider.io/guilds/us/bleeding-hollow/Wholesome%20Sisters" target="_blank" rel="noreferrer">
          <Icon title="View Raider.IO Page" src="https://assets.rpglogs.com/img/warcraft/raiderio_square_xl.png" alt="View Raider.IO Page"/>
        </a>
        <a href="https://www.warcraftlogs.com/guild/us/bleeding-hollow/wholesome%20sisters" target="_blank" rel="noreferrer">
          <Icon title="View Warcraft Logs Page" src="https://assets.rpglogs.com/img/warcraft/favicon.png" alt="View Warcraft Logs Page"/>
        </a>
      </Links>
    </StyledFooter>
  )
}

export default Footer

import styled from 'styled-components'

const ContactUs = styled.div`
`

const Links = styled.div`
`
const StyledFooter = styled.div`
  height: 5vh;
  margin: 0;
  padding: 0;
`

function Footer () {
  return (
    <StyledFooter>
      Footer here
      <ContactUs>
        Contact Us
      </ContactUs>
      <Links>
        Links here
        <a href="https://raider.io/guilds/us/bleeding-hollow/Wholesome%20Sisters" target="_blank" rel="noreferrer">Raider.IO</a>
        <a href="https://www.warcraftlogs.com/guild/us/bleeding-hollow/wholesome%20sisters" target="_blank" rel="noreferrer">Warcraft Logs</a>
      </Links>
    </StyledFooter>
  )
}

export default Footer

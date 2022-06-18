import styled from 'styled-components'

const StyledFooter = styled.div`
  padding: 25px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  & > * {
    padding: 0 25px;
  }
`

const ContactUs = styled.div`
  display: flex;
  flex-direction: column;
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
`

function Footer () {
  return (
    <StyledFooter>
      <ContactUs>
        <Title>Contact Us</Title>
        <div>123 Street St.</div>
        <div>1800 180 000</div>
        <div>email@gmail.com</div>
      </ContactUs>
      <Links>
        <Title>Links</Title>
        <a href="https://raider.io/guilds/us/bleeding-hollow/Wholesome%20Sisters" target="_blank" rel="noreferrer">Raider.IO</a>
        <a href="https://www.warcraftlogs.com/guild/us/bleeding-hollow/wholesome%20sisters" target="_blank" rel="noreferrer">Warcraft Logs</a>
      </Links>
    </StyledFooter>
  )
}

export default Footer
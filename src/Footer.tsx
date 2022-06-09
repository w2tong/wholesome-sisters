import styled from 'styled-components'

const ContactUs = styled.div`
`

const Links = styled.div`
`

function Footer () {
  return (
    <div className="footerWindow">
      Footer here
      <ContactUs>
        Contact Us
      </ContactUs>
      <Links>
        Links here
        <a href="https://raider.io/guilds/us/bleeding-hollow/Wholesome%20Sisters" target="_blank" rel="noreferrer">Raider.IO</a>
        <a href="https://www.warcraftlogs.com/guild/us/bleeding-hollow/wholesome%20sisters" target="_blank" rel="noreferrer">Warcraft Logs</a>
      </Links>
    </div>
  )
}

export default Footer

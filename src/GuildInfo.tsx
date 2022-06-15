import styled from 'styled-components'
import IFrame from './IFrame'
import media from './media'

const FlexboxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

`

const Container = styled.div`
  border: white solid 1px;
  padding-bottom: 25px;
`

const raiderIOCharWidgetWidth = 400
const raiderIOCharWidgetHeight = 180
const raiderIOCharWidgetScale = 1
const mobileScale = (media.Min - 50) / raiderIOCharWidgetWidth
const IFrameContainer = styled.div`
  width: ${raiderIOCharWidgetWidth * raiderIOCharWidgetScale}px;
  height: ${raiderIOCharWidgetHeight * raiderIOCharWidgetScale}px;
  transform-origin: 0 0;
  @media (max-width: ${media.Mobile}px) {
    transform: scale(${mobileScale});
    width: ${raiderIOCharWidgetWidth * mobileScale}px;
    height: ${raiderIOCharWidgetHeight * mobileScale}px;
  }
`

const BossProgressURL = 'https://raider.io/widgets/boss-progress?raid=sepulcher-of-the-first-ones&difficulty=heroic&region=us&realm=bleeding-hollow&guild=Wholesome+Sisters&boss=latest&period=until_kill&hide=&chromargb=transparent'
// const GearCompositionURL = 'https://raider.io/widgets/guild-gear-composition?raid=sepulcher-of-the-first-ones&min_tier_tokens=1&region=us&realm=bleeding-hollow&guild=Wholesome+Sisters&scope=role&tier_placement=column&chromargb=transparent'

function GuildInfo () {
  return (
    <Container>
      <h1>Guild Info here</h1>
      <FlexboxContainer>
        <IFrameContainer>
          <IFrame url={BossProgressURL} width={400} height={180}/>
        </IFrameContainer>
        {/* <IFrame src={GearCompositionURL}/> */}
      </FlexboxContainer>
    </Container>
  )
}

export default GuildInfo

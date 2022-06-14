import styled from 'styled-components'

const IFrame = styled.iframe`
  width: 400px;
  height: 180px;
`

const FlexboxContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

const BossProgressURL = 'https://raider.io/widgets/boss-progress?raid=sepulcher-of-the-first-ones&difficulty=heroic&region=us&realm=bleeding-hollow&guild=Wholesome+Sisters&boss=latest&period=until_kill&hide=&chromargb=transparent'
// const GearCompositionURL = 'https://raider.io/widgets/guild-gear-composition?raid=sepulcher-of-the-first-ones&min_tier_tokens=1&region=us&realm=bleeding-hollow&guild=Wholesome+Sisters&scope=role&tier_placement=column&chromargb=transparent'

function GuildInfo () {
  return (
    <div>
      <h1>Guild Info here</h1>
      <FlexboxContainer>
        <IFrame src={BossProgressURL} width="400px" height="180px" frameBorder="0"/>
        {/* <IFrame src={GearCompositionURL}/> */}
      </FlexboxContainer>

    </div>
  )
}

export default GuildInfo

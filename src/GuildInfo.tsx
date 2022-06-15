import styled from 'styled-components'
import IFrame from './IFrame'

const FlexboxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

`

const BossProgressURL = 'https://raider.io/widgets/boss-progress?raid=sepulcher-of-the-first-ones&difficulty=heroic&region=us&realm=bleeding-hollow&guild=Wholesome+Sisters&boss=latest&period=until_kill&hide=&chromargb=transparent'
// const GearCompositionURL = 'https://raider.io/widgets/guild-gear-composition?raid=sepulcher-of-the-first-ones&min_tier_tokens=1&region=us&realm=bleeding-hollow&guild=Wholesome+Sisters&scope=role&tier_placement=column&chromargb=transparent'

function GuildInfo () {
  return (
    <div style={{ border: 'white solid 1px' }}>
      <h1>Guild Info here</h1>
      <FlexboxContainer>
        <IFrame url={BossProgressURL} width={400} height={180}/>
        {/* <IFrame src={GearCompositionURL}/> */}
      </FlexboxContainer>
    </div>
  )
}

export default GuildInfo

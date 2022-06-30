import styled from 'styled-components'
import ImageModal from './ImageModal'
import Link from '../Link'
import { Text } from '../../styles'

const StyledImageModal = styled(ImageModal)`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`

function getImage (src: string) {
  return require(`../../img/${src}`)
}

/* eslint-disable react/no-unescaped-entities */
const articles = [
  {
    id: 'valtan-hard-cleared',
    title: 'Valtan Hard Cleared',
    category: 'la',
    date: 'May 25, 2022',
    content: (
    <Text>
      <Text>Congratulations to the first Wholesome Sisters members clear Legion Raid Valtan Hard gates 1 and 2. Participating members include:</Text>
      <ul>
        <li>Jorbi - Soulfist</li>
        <li>Leesanghyeok - Shadowhunter</li>
      </ul>
    </Text>
    ),
    summary: 'Wholesome Sisters clear Valtan hard mode.',
    imgFile: 'valtan2.jpg',
    imgAlt: 'Lost Ark Valtan',
    objectPosition: '',
    tags: [
      'lost ark',
      'la',
      'clear'
    ]
  },
  {
    id: 'valtan-normal-cleared',
    title: 'Valtan Normal Cleared',
    category: 'la',
    date: 'May 18, 2022',
    content: (
    <Text>
      <Text>Congratulations to the first Wholesome Sisters members clear Legion Raid Valtan Normal gates 1 and 2. Participating members include:</Text>
      <ul>
        <li>Cazaji - Berserker</li>
        <li>Wongwongwong - Sorceress</li>
        <li>Razashi - Artillerist</li>
        <li>Glucke - Bard</li>
      </ul>
    </Text>
    ),
    summary: 'Wholesome Sisters clear Valtan normal mode.',
    imgFile: 'valtan.jpg',
    imgAlt: 'Lost Ark Valtan',
    objectPosition: 'top',
    tags: [
      'lost ark',
      'la',
      'clear'
    ]
  },
  {
    id: 'argos-cleared',
    title: 'Argos Cleared',
    category: 'la',
    date: 'March 17, 2022',
    content: (
    <Text>
      <Text>Congratulations to the first Wholesome Sisters members clear Abyss Raid Argos phases 1 to 3. Participating members include: </Text>
      <ul>
        <li>Jorbi - Soulfist</li>
        <li>Leesanghyeok - Shadowhunter</li>
        <li>Senjyogahara - Deathblade</li>
        <li>Haiji - Bard</li>
        <li>Amazonpm - Berserker</li>
      </ul>
    </Text>
    ),
    summary: 'Wholesome Sisters clear all three phases of Abyss Raid Argos.',
    imgFile: 'argos.jpg',
    imgAlt: 'Lost Ark Argos',
    objectPosition: 'top',
    tags: [
      'lost ark',
      'la',
      'clear'
    ]
  },
  {
    id: 'lost-ark-guild-established-on-na-east-una',
    title: 'Lost Ark Guild established on NA East Una',
    category: 'la',
    date: 'February 10, 2022',
    content: (
    <Text>
      <Text>The Wholesome Sisters World of Warcraft guild has decided to expand to Lost Ark. Many members of the World of Warcraft guild have decided to try out Lost Ark and many new members will be joining us including:</Text>
      <ul>
        <li>Amazonpm - Berserker</li>
        <li>Haiji - Bard</li>
        <li>Senjyogahara - Deathblade</li>
        <li>Leesanghyeok - Shadowhunter</li>
      </ul>
    </Text>
    ),
    summary: 'Wholesome Sisters create a guild on Lost Ark NA East Una.',
    imgFile: 'lost-ark.jpg',
    imgAlt: 'Lost Ark',
    objectPosition: '',
    tags: [
      'lost ark',
      'la'
    ]
  },
  {
    id: 'season-2-keystone-master',
    title: 'Season 2 Keystone Master',
    category: 'wow',
    date: 'August 11, 2021',
    content: (
    <Text>
      <Text>Congratulations to the first Wholesome Sisters members to obtain Keystone Master in Shadowlands Season 2.</Text>
      <br/>
      <Text>July 24, 2021</Text>
      <ul>
        <li><Link href="https://raider.io/characters/us/bleeding-hollow/Yarnbrew">Yarnbrew</Link> - Brewmaster Monk</li>
      </ul>
      <br/>
      <Text>August 11, 2021</Text>
      <ul>
        <li><Link href="https://raider.io/characters/us/bleeding-hollow/Cowo">Cowo</Link> - Guardian Driud</li>
        <li><Link href="https://raider.io/characters/us/bleeding-hollow/Zarashii">Zarashii</Link> - Elemental Shaman</li>
      </ul>
    </Text>
    ),
    summary: "Wholesome Sisters' first members to obtain Keystone Master in Shadowlands Season 2.",
    imgFile: 'ksm-season-2.jpg',
    imgAlt: 'Shadowlands Season 2 Keystone Master mount',
    objectPosition: '',
    tags: [
      'wow',
      'word of warcraft',
      'ksm',
      '9.1',
      'shadowlands'
    ]
  },
  {
    id: 'sanctum-of-domination-normal-cleared',
    title: 'Sanctum of Domination Normal Cleared',
    category: 'wow',
    date: 'July 23, 2021',
    content: (
    <Text>
      <Text>Wholesome Sisters clear Sanctum of Domination Normal difficulty on the third week of its release. A few members of the guild couldn't show up for the raid night so a few players were picked up to fill missing spots. View the log of Sylvanas Windrunner that secured the clear below.</Text>
      <br/>
      <Link href="https://www.warcraftlogs.com/reports/92NdnvgYPHVtChAL#fight=7">View the log on Warcraft Logs</Link>
    </Text>
    ),
    summary: 'Wholesome Sisters clear Sanctum of Domination normal difficulty on the third week of its release.',
    imgFile: 'sylvanas-windrunner.jpg',
    imgAlt: 'alt text here',
    objectPosition: '',
    tags: [
      'world of warcraft',
      'wow',
      'sod',
      'clear',
      '9.1',
      'shadowlands'
    ]
  },
  {
    id: 'wholesome-sisters-return-for-shadowlands-season-2',
    title: 'Wholesome Sisters return for Shadowlands Season 2',
    category: 'wow',
    date: 'July 18, 2021',
    content: (
    <Text>
      Wholesome Sisters have decided to return for Shadowlands Season 2. The plan for this season will be to clear the new raid Sanctum of Domination on Heroic difficulty and Keystone Master.
    </Text>
    ),
    summary: 'Wholesome Sisters have decided to return for Shadowlands Season 2.',
    imgFile: 'wow-chains-of-domination.png',
    imgAlt: 'World of Warcraft Chains of Domination',
    objectPosition: '',
    tags: [
      'world of warcraft',
      'wow',
      'sod',
      'clear',
      '9.1',
      'shadowlands'
    ]
  },
  {
    id: 'castle-nathria-heroic-cleared',
    title: 'Castle Nathria Heroic Cleared',
    category: 'wow',
    date: 'February 18, 2021',
    content: (
    <Text>
      <Text>Wholesome Sisters finally manage to defeat Sire Denathrius with three weeks of progression and clear Castle Nathria Heroic on the 11th raid week! View the log of the kill below.</Text>
      <br/>
      <Link href="https://www.warcraftlogs.com/reports/FXqcbjR7f8HaLW6n#fight=67">View the log on Warcraft Logs</Link>
      <br/>
      <StyledImageModal src={getImage('heroic-sire-denathrius-killed.png')} alt='First Wholesome Sisters group on their Shadowlands Season 1 Keystone Master mounts'/>
    </Text>
    ),
    summary: 'Wholesome Sisters clear Castle Nathria normal difficulty on the 11th week of its release.',
    imgFile: 'heroic-sire-denathrius-killed.png',
    imgAlt: 'Wholesome Sisters after defeating Sire Denathrius',
    objectPosition: '',
    tags: [
      'world of warcraft',
      'wow',
      'cn',
      'clear',
      '9.0',
      'shadowlands'
    ]
  },
  {
    id: 'season-1-keystone-master',
    title: 'Season 1 Keystone Master',
    category: 'wow',
    date: 'February 16, 2021',
    content: (
      <Text>
        <Text>Congratulations to the first group to earn Keystone Master in Season 1 of Shadowlands! View their Spires of Ascension +15 run that secured it below.</Text>
        <br/>
        <Text>Party:</Text>
        <ul>
          <li><Link href="https://raider.io/characters/us/bleeding-hollow/Detharon">Detharon</Link> - Blood Death Knight</li>
          <li><Link href="https://raider.io/characters/us/bleeding-hollow/Rothanice">Rothanice</Link> - Holy Paladin</li>
          <li><Link href="https://raider.io/characters/us/bleeding-hollow/Chanart">Chanart</Link> - Fire Mage</li>
          <li><Link href="https://raider.io/characters/us/bleeding-hollow/Finattok">Finattok</Link> - Affliction Warlock</li>
          <li><Link href="https://raider.io/characters/us/bleeding-hollow/Jorbi">Jorbi</Link> - Enhancement Shaman</li>
        </ul>
        <br/>
        <Link href="https://raider.io/mythic-plus-runs/season-sl-1/18736279-15-spires-of-ascension">View the run on Raider.IO</Link>
        <br/>
        <StyledImageModal src={getImage('ksm-season-1.jpg')} alt='First Wholesome Sisters group on their Shadowlands Season 1 Keystone Master mounts'/>
      </Text>
    ),
    summary: "Wholesome Sisters' first group to obtain Keystone Master in Shadowlands Season 1.",
    imgFile: 'ksm-season-1.jpg',
    imgAlt: 'First Wholesome Sisters group on their Shadowlands Season 1 Keystone Master mounts',
    objectPosition: '',
    tags: [
      'wow',
      'word of warcraft',
      'ksm',
      '9.0',
      'shadowlands'
    ]
  },
  {
    id: 'ulduar-timewalking-cleared',
    title: 'Ulduar Timewalking Cleared',
    category: 'wow',
    date: 'December 30, 2020',
    content: (
    <Text>
      After four hours of struggling, Wholesome Sisters have managed to defeat Yogg-Saron and clear Ulduar Timewalking. Participating members include:
      <ul>
        <li><Link href="https://raider.io/characters/us/bleeding-hollow/Maikoe">Maikoe</Link> - Marksmanship Hunter</li>
        <li><Link href="https://raider.io/characters/us/bleeding-hollow/Jorbi">Jorbi</Link> - Enhancement Shaman</li>
        <li><Link href="https://raider.io/characters/us/bleeding-hollow/Aethne">Aethne</Link> - Outlaw Rogue</li>
        <li><Link href="https://raider.io/characters/us/bleeding-hollow/Cazzaji">Cazzaji</Link> - Fury Warrior</li>
        <li><Link href="https://raider.io/characters/us/bleeding-hollow/Glucke">Glucke</Link> - Fire Mage</li>
        <li><Link href="https://raider.io/characters/us/bleeding-hollow/Kankarot">Kankarot</Link> - Restoration Druid</li>
        <li><Link href="https://raider.io/characters/us/bleeding-hollow/Banestus">Banestus</Link> - Discipline Priest</li>
        <li><Link href="https://raider.io/characters/us/bleeding-hollow/Yarnbrew">Yarnbrew</Link> - Brewmaster Monk</li>
        <li><Link href="https://raider.io/characters/us/bleeding-hollow/Finattok">Finattok</Link> - Affliction Warlock</li>
        <li><Link href="https://raider.io/characters/us/bleeding-hollow/Parzlor">Parzlor</Link> - Balance Druid</li>
        <li><Link href="https://raider.io/characters/us/bleeding-hollow/Veriyn">Veriyn</Link> - Unholy Death Knight</li>
      </ul>
      <StyledImageModal src={getImage('ulduar-timewalking.jpg')} alt='Wholesome Sisters after clearing Ulduar Timewalking'/>
    </Text>
    ),
    summary: 'Wholesome Sisters clear Ulduar Timewalking.',
    imgFile: 'ulduar-timewalking.jpg',
    imgAlt: 'Wholesome Sisters after clearing Ulduar Timewalking',
    objectPosition: '',
    tags: [
      'world of warcraft',
      'wow',
      'clear',
      '9.0',
      'shadowlands'
    ]
  },
  {
    id: 'castle-nathria-normal-cleared',
    title: 'Castle Nathria Normal Cleared',
    category: 'wow',
    date: 'December 26, 2020',
    content: (
    <div>
      <Text>"On the third week of Castle Nathria's relase, the Wholesome Sisters manage to take down Sire Denathrius and clear Castle Nathria normal difficulty."</Text>
      <br/>
      <Link href="https://www.warcraftlogs.com/reports/9p8NRGJk1c4zTtMZ#fight=9">View the log on Warcraft Logs</Link>
    </div>
    ),
    summary: 'Wholesome Sisters clear Castle Nathria normal difficulty on the third week of its release.',
    imgFile: 'castle-nathria.jpg',
    imgAlt: 'Castle Nathria',
    objectPosition: '',
    tags: [
      'world of warcraft',
      'wow',
      'clear',
      '9.0',
      'shadowlands'
    ]
  },
  {
    id: 'wholesome-sister-established-in-world-of-warcraft',
    title: 'Wholesome Sister established in World of Warcraft',
    category: 'wow',
    date: 'December 26, 2020',
    content: (
    <Text>
      <Text>
      "Due to queue times lasting hours on the realm Area 52, the original Wholesome Sister's guild Deep Deep Deep has decided to transfer to the realm Bleeding Hollow."
      </Text>
    </Text>
    ),
    summary: 'Wholesome Sisters migrate from Area 52 to Bleeding Hollow due to queue times.',
    imgFile: 'shadowlands.jpg',
    imgAlt: 'World of Warcraft: Shadowlands',
    objectPosition: 'top',
    tags: [
      'world of warcraft',
      'wow',
      'shadowlands'
    ]
  }
]

export default articles

import styled from 'styled-components'
import ImageModal from './ImageModal'
import Link from '../Link'

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
    <div>
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
    </div>
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
    <div>
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
    </div>
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
    <div>
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
    </div>
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
    <div>
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
    </div>
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
    <div>
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
    </div>
    ),
    summary: "Wholesome Sisters' first group to obtain Keystone Master in Shadowlands Season 2.",
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
    <div>
      <div>"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."</div>
      <br/>
      <Link href="https://www.warcraftlogs.com/reports/92NdnvgYPHVtChAL#fight=7">View the log on Warcraft Logs</Link>
    </div>
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
    <div>
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
    </div>
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
    <div>
      <div>"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."</div>
      <br/>
      <Link href="https://www.warcraftlogs.com/reports/FXqcbjR7f8HaLW6n#fight=67">View the log on Warcraft Logs</Link>
      <br/>
      <StyledImageModal src={getImage('heroic-sire-denathrius-killed.png')} alt='First Wholesome Sisters group on their Shadowlands Season 1 Keystone Master mounts'/>
    </div>
    ),
    summary: 'Wholesome Sisters clear Castle Nathria normal difficulty on the third week of its release.',
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
      <div>
        <div>"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."</div>
        <br/>
        <div>Party:</div>
        <ul>
          <li>Detharon - Blood Death Knight</li>
          <li>Rothanice - Holy Paladin</li>
          <li>Chanart - Fire Mage</li>
          <li>Finattok - Affliction Warlock</li>
          <li>Jorbi - Enhancement Shaman</li>
        </ul>
        <br/>
        <Link href="https://raider.io/mythic-plus-runs/season-sl-1/18736279-15-spires-of-ascension">View the run on Raider.IO</Link>
        <br/>
        <StyledImageModal src={getImage('ksm-season-1.jpg')} alt='First Wholesome Sisters group on their Shadowlands Season 1 Keystone Master mounts'/>
      </div>
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
    <div>
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
      <StyledImageModal src={getImage('ulduar.jpg')} alt='Wholesome Sisters after clearing Ulduar Timewalking'/>
    </div>
    ),
    summary: 'Wholesome Sisters clear Ulduar Timewalking.',
    imgFile: 'ulduar.jpg',
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
      <div>"On the third week of Castle Nathria's relase, the Wholesome Sisters manage to take down Sire Denathrius and clear Castle Nathria normal difficulty."</div>
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
    <div>
      "Due to queue times lasting hours on the realm Area 52, the original Wholesome Sister's guild Deep Deep Deep has decided to transfer to the realm Bleeding Hollow."
    </div>
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

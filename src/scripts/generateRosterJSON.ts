import fetch from 'node-fetch'
const fs = require('fs')
require('dotenv').config()
const roster = require('./input.json')

interface Roster {
  wow?: {
    name: string
  }
}

interface RaiderIOCharacterResponse {
  name: string,
  race: string,
  class: string,
  active_spec_name: string,
  active_spec_role: string,
  thumbnail_url: string
  gear: {
    item_level_equipped: number
  },
  mythic_plus_scores_by_season: Array<{
    segments: {
      all: {
        score: number,
        color: string
      }
    }
  }>
}

interface WowCharacter {
  name: string,
  race: string,
  class: string,
  spec: string,
  role: string,
  portraitURL: string
  itemLevel: number,
  mythicPlus: {
    score: number,
    color: string
  }
}

const fetchChar = async (name: string): Promise<WowCharacter> => {
  const response = await fetch(`https://raider.io/api/v1/characters/profile?region=us&realm=bleeding-hollow&name=${name}&fields=gear%2Cmythic_plus_scores_by_season%3Acurrent`)
  const char: RaiderIOCharacterResponse = await response.json() as RaiderIOCharacterResponse
  return {
    name: char.name,
    race: char.race,
    class: char.class,
    spec: char.active_spec_name,
    role: char.active_spec_role,
    portraitURL: char.thumbnail_url,
    itemLevel: char.gear.item_level_equipped,
    mythicPlus: {
      score: char.mythic_plus_scores_by_season[0].segments.all.score,
      color: char.mythic_plus_scores_by_season[0].segments.all.color
    }
  }
}

const updateRoster = async () => {
  await Promise.all(
    roster.map(async (member: Roster) => {
      if (member.wow) {
        member.wow = await fetchChar(member.wow.name)
      }
    })
  )
  const rosterData = {
    date: new Date().toLocaleDateString(),
    roster
  }
  fs.writeFileSync('src/json/roster.json', JSON.stringify(rosterData, null, 4))
}

const main = async () => {
  await updateRoster()
}

main()

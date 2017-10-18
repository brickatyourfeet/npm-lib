const faker = require('faker')
const _ = require('lodash')

let sports = ['Baseball', 'Football', 'Soccer', 'Hockey', 'Cycling', 'Rowing', 'Skiing', 'BMX', 'Rollerblading', 'Volleyball', 'Bowling']


// faker.address.city
// faker.catchPhraseNoun

//console.log(faker.company.catchPhraseNoun())
console.log(faker.company.bsNoun())


function generateBusinessTeam() {

  let team = {
    city: faker.address.city(),
    mascot: _.capitalize(faker.company.bsNoun()),
    sport: _.sample(sports),
    players: []
  }
  let numberOfPlayers = _.random(3, 10)
  for (let i = 0; i < numberOfPlayers; i++) {
    team.players.push(generatePlayer())
  }
  return team;
}

function buildTeams(num) {
  let teamArray = []
  for (let i = 0; i < num; i++) {
    teamArray.push(generateBusinessTeam())
  }
  console.log(teamArray)
  return teamArray
}

function generatePlayer() {
  let player = {
    first: faker.name.firstName(),
    last: faker.name.lastName(),
    number: _.random(0, 99)
  }
  return player
}


buildTeams(10)
//console.log(generateBusinessTeam())

module.exports = buildTeams

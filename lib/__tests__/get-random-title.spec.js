const test = require('tape')
const { includes } = require('ramda')
const titles = require('../../data/titles.json')
const getRandomTitle = require('../get-random-title')

test('It returns a random episode title', assert => {
  let actual = includes(getRandomTitle(), titles)
  assert.ok(actual)
  assert.end()
})
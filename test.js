const assert = require('assert')
const t = require('./t')

const check = t.Union([
  t.Intersection([
    t.Struct({
      a: t.Literal('test'),
      b: t.String,
    }),
    t.Partial({
      c: t.Number,
      d: t.UnknownList,
      e: t.UnknownStruct
    })
  ]),
  t.Boolean,
])

assert.ok(check(false) && check({
  a: 'test',
  b: 'x',
  c: 5,
  d: [1, 2, 3],
}))

assert.ok(check(1) === false)

assert.ok(check('test') === false)

assert.ok(check({
  a: 'err',
  b: 'x',
  c: 5,
  d: [1, 2, 3],
}) === false)


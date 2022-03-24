# t.js

simple runtime type system.

## Example

```js
const t = require('@onur1/t')

const Foo = t.Intersection([
  t.Struct({
    bar: t.Literal('baz'),
    qux: t.String,
  }),
  t.Partial({
    quu: t.Number,
    bla: t.Boolean,
  })
])

assert.ok(Foo({ bar: 'baz', qux: 'xyz', quu: 2 })
```

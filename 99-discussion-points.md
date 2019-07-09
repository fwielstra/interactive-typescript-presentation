# Discussion points

- Part of a "moving the pain forward" development strategy
  - errors in editor
  - errors during transcompilation
  - instead of errors during runtime / after browser refresh / after endpoint has been called.
- Less scanning docs / code
  - expected in / output
- Catching subtle errors
  - JS is very forgiving
  - recent example; what is wrong (or, not correct) in this code?

```javascript
const migrationsToRun = (await getAvailableMigrations())
  .filter(file => !/^\d+?\.example\.ts$/.test(file))
  .filter(val => val.sequence > lastMigration)
  .sort((a, b) => a.sequence > b.sequence);
```

1. file is actually an object with a property `fileName`. Did not break because `.test()` will coerce file to a string, `"[object Object]"`.
2. sort method should return an int instead of a boolean. Did not break because boolean is coerced into an int, true = 1, false = 0. Expected is also a negative result.

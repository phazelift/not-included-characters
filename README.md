# not-included-characters


### Find characters in a string that do not occur in another string


<br/>

---

```typescript
const notIncludedChars = require('@sygn/not-included-characters');
const LOWER_ALPHAS = 'abcdefghijklmnopqrstuvwxyz';

// the first argument is the query, the second the 'included' characters
notIncludedChars(' finD nOt iNcluded charactErs! ', LOWER_ALPHAS).join('').trim();
// DONE!


// you can add a handler for handling type errors (see: message-events npm package)
notIncludedChars.onError(console.error);
```
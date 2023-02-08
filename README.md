# tokens
Absolutely tiny library to handle token generation, inspired by [slugid](github.com/taskcluster/slugid).

## How to use
This library provides two functions: `genToken`, which creates new tokens, and `tokenLength`, which calculates the expected token length. TypeSript:

```typescript
import { genToken, tokenLength } from "@sqrls/tokens"; // or import default

console.log("Random base64url encoded token:", genToken());
console.log("A small token with 5 bytes (40 bits):", genToken(5));
console.log("A much larger token with 100 bytes (800 bits):", genToken(100));

console.log(`A 30-byte token should have a string length ${tokenLength(30)}`);
```

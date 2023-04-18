<p align="center"><img width="600" height="100" src="https://github.com/Axorax/hecon.js/blob/main/hecon.js.png?raw=true"></p>

<p align="center">HTML Entity Converter</p>

## ⚙️ Installation

```js
npm i hecon
```

**CDN Links:**

- https://www.unpkg.com/hecon@1.0.0/hecon.js
- https://cdn.jsdelivr.net/npm/hecon@1.0.0/hecon.js

## 📘 Documentation

#### ⇒ Import hecon

**ES6**

```js
import hecon from 'hecon';
```

**commonjs**

```js
const hecon = require('hecon');
```

#### ⇒ Encode string to HTML entity

```js
console.log(hecon.encode('< Hello />'));
```

output:

```js
&#60;&#32;&#72;&#101;&#108;&#108;&#111;&#32;&#47;&#62;
```

#### ⇒ Encode string to HTML entity (Type - 2)

```js
console.log(hecon.encode('< Hello />', true));
```

output:

```js
&#60; Hello &#47;&#62;
```

#### ⇒ Decode HTML entity from string

```js
console.log(hecon.decode('&#60; Hello &#47;&#62;'));
```

```js
console.log(hecon.decode('&#60;&#32;&#72;&#101;&#108;&#108;&#111;&#32;&#47;&#62;'));
```

output:

```js
< Hello />
```

---

[Support me on Patreon](https://www.patreon.com/axorax) - 
[Check out my socials](https://github.com/axorax/socials)
---
id: not
title: .not
sidebar_label: .not 
---

Inverts the chained assertion to test the opposite.

### Usage

```text
expect(value).not
```

### Returns

`Expect`: An Expect instance to allow function chaining.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

### Examples

Not visible:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const $button = await element(by.label("button")); 

  return expect($button).not.toBeVisible();
})();
```

Not equal:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const $input = element(by.label("text-input"));

  return expect($input).not.toEqual("Hello World!");
})();
```

Not focused:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const $input = element(by.label("text-input"));

  await expect($input).not.toBeFocused();
})();
```

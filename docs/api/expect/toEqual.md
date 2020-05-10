---
id: toEqual
title: .toEqual(value)
sidebar_label: .toEqual(value)
---

Asserts the value is strictly equal to `value`.

#### Usage

```text
expect(value).toEqual(value)
```

#### Parameters

1. `value` (`Any`): Value to compare against.

#### Returns

`Promise`: A promise that resolves if the assertion is successful.

#### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

## Examples

Numeric value:

```javascript
const { expect } = require("appdriver");

(async () => {
  await expect(5).toEqual(5);
})();
```

String value:

```javascript
const { expect } = require("appdriver");

(async () => {
  await expect("Hello World!").toEqual("Hello World!");
})();
```

Promise value:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const $box = await element(by.label("box"));

  return expect($box.getSize()).toEqual({
    width: 100,
    height: 100
  });
})();
```

## Related Methods

- [`.toMatch(pattern)`](./toMatch.md)
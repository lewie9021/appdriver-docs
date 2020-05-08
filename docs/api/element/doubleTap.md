---
id: doubleTap
title: .doubleTap(options)
sidebar_label: .doubleTap(options)
---

Performs double tap gesture on element.

#### Parameters

1. `options` (`Object?`):
    - `options.x` (`Number?`): x offset from left of element. Defaults to center point.
    - `options.y` (`Number?`): y offset from top of element. Defaults to center point.

#### Returns

[`Element`](/intro): A new element to avoid mutation and allow function chaining.

## Examples

Perform double tap gesture at element center point:

```javascript
const { element, by } = require("appdriver");

(async () => {
  await element(by.label("button"))
    .doubleTap();
})();
```

Perform double tap gesture at (200, 0), relative to the element location:

```javascript
const { element, by } = require("appdriver");

(async () => {
  await element(by.label("button"))
    .doubleTap({ x: 200 });
})();
```

## Related Methods

- [`.tap(options)`](tap.md)
- [`.longPress(options)`](longPress.md)

## Related Docs

- [W3C Actions (Appium)](http://appium.io/docs/en/commands/interactions/actions/)
- [Actions (W3C)](https://www.w3.org/TR/webdriver/#actions)
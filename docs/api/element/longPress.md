---
id: longPress
title: .longPress(options)
sidebar_label: .longPress(options)
---

Performs long press gesture on the element.

#### Usage

```text
element(matcher).longPress(options)
```

#### Parameters

1. `options` (`Object?`):
    - `options.x` (`Number?`): x offset from left of element. Defaults to center point.
    - `options.y` (`Number?`): y offset from top of element. Defaults to center point.
    - `options.duration` (`Number?`): Time in milliseconds to perform the press gesture. Defaults to 750.

#### Returns

[`Element`](../element.md): A new element to avoid mutation and allow function chaining.

#### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | No        |

## Examples

Perform long press gesture at element center point:

```javascript
const { element, by } = require("appdriver");

(async () => {
  await element(by.label("button"))
    .longPress();
})();
```

Perform long press gesture at (100, 25), relative to the element location:

```javascript
const { element, by } = require("appdriver");

(async () => {
  await element(by.label("button"))
    .longPress({ x: 100, y: 25 });
})();
```

## Related Methods

- [`.tap(options)`](./tap.md)
- [`.doubleTap(options)`](./doubleTap.md)

## Related Docs

- [W3C Actions (Appium)](http://appium.io/docs/en/commands/interactions/actions/)
- [Actions (W3C)](https://www.w3.org/TR/webdriver/#actions)
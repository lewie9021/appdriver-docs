---
id: tap
title: .tap(options)
sidebar_label: .tap(options)
---

Performs tap gesture on element.

### Usage

```text
element(matcher).tap(options)
```

### Parameters

1. `options` (`Object?`):
    - `options.x` (`Number?`): x offset from left of element. Defaults to center point.
    - `options.y` (`Number?`): y offset from top of element. Defaults to center point.

### Returns

[`Element`](../element.md): A new element to avoid mutation and allow function chaining.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Partial   |

### Examples

Perform tap gesture at element center point:

```javascript
const { element, by } = require("appdriver");

(async () => {
  await element(by.label("button"))
    .tap();
})();
```

Perform tap gesture at (0, 50), relative to the element location:

```javascript
const { element, by } = require("appdriver");

(async () => {
  await element(by.label("button"))
    .tap({ y: 50 });
})();
```

### Known Issues

- `options` are not supported within the Web context.

### Related Methods

- [`.doubleTap(options)`](./doubleTap.md)
- [`.longPress(options)`](./longPress.md)

### Related Docs

- [Click (Appium)](http://appium.io/docs/en/commands/element/actions/click/)
- [Element Click (W3C)](https://www.w3.org/TR/webdriver/#element-click)
- [W3C Actions (Appium)](http://appium.io/docs/en/commands/interactions/actions/)
- [Actions (W3C)](https://www.w3.org/TR/webdriver/#actions)
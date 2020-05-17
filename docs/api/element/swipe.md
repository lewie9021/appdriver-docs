---
id: swipe
title: .swipe(options)
sidebar_label: .swipe(options)
---

Performs a swipe gesture on the element.

### Usage

```text
element(matcher).swipe(options)
```

### Parameters

1. `options` (`Object?`):
    - `options.x` (`Number?`): X coordinate to begin the gesture from. Defaults to 0.
    - `options.y` (`Number?`): Y coordinate to begin the gesture from. Defaults to 0.
    - `options.distance` (`Number`): Distance of swipe in density independent pixels (DIP).
    - `options.direction` (`Number`): Direction in degrees (0-359) of swipe.
    - `options.duration` (`Number?`): Time in milliseconds to perform the swipe gesture.

### Returns

[`Element`](../element.md): A new element to avoid mutation and allow function chaining.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | No        |

### Examples

Swipe left 100 pixels. This will swipe left from the coordinate (100, 24) to (0, 24), relative to the element:

```javascript
const { element, by } = require("appdriver");

(async () => {
  await element(by.label("list-item"))
    .swipe({ x: 100, y: 24, distance: 100, direction: 270 });
})();
```

### Related Methods

- [`.swipeUp(options)`](./swipeUp.md)
- [`.swipeDown(options)`](./swipeDown.md)
- [`.swipeLeft(options)`](./swipeLeft.md)
- [`.swipeRight(options)`](./swipeRight.md)

### Related Docs

- [W3C Actions (Appium)](http://appium.io/docs/en/commands/interactions/actions/)
- [Actions (W3C)](https://www.w3.org/TR/webdriver/#actions)
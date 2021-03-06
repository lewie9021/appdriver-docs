---
id: swipeRight
title: .swipeRight(options)
sidebar_label: .swipeRight(options)
---

Performs a swipe right gesture on the element.

### Usage

```text
element(matcher).swipeRight(options)
```

### Parameters

1. `options` (`Object?`):
    - `options.x` (`Number?`): X coordinate to begin the gesture from. Defaults to 0.
    - `options.y` (`Number?`): Y coordinate to begin the gesture from. Defaults to 0.
    - `options.distance` (`Number`): Distance of swipe in density independent pixels (DIP). Required if `percentage` isn't provided.
    - `options.percentage` (`Number?`): Percentage distance (0-1) of swipe relative to the height of the element. Required if `distance` isn't provided. 
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

Swipe right 100 pixels. This will swipe right from the coordinate (0, 24) to (100, 24), relative to the element:

```javascript
const { element, by } = require("appdriver");

(async () => {
  await element(by.label("list-item"))
    .swipeRight({ y: 24, distance: 100 });
})();
```

Swipe right 75% of the element width. Given the element has a width of 120, this will swipe right from the coordinate (0, 0) to (90, 0), relative to the element:

```javascript
const { element, by } = require("appdriver");

(async () => {
  await element(by.label("list-item"))
    .swipeRight({ percentage: 0.75 });
})();
```

### Related Methods

- [`.swipe(options)`](./swipe.md)
- [`.swipeUp(options)`](./swipeUp.md)
- [`.swipeDown(options)`](./swipeDown.md)
- [`.swipeLeft(options)`](./swipeLeft.md)

### Related Docs

- [W3C Actions (Appium)](http://appium.io/docs/en/commands/interactions/actions/)
- [Actions (W3C)](https://www.w3.org/TR/webdriver/#actions)
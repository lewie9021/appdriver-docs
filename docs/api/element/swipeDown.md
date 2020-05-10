---
id: swipeDown
title: .swipeDown(options)
sidebar_label: .swipeDown(options)
---

Performs a swipe down gesture on the element.

#### Usage

```text
element(matcher).swipeDown(options)
```

#### Parameters

1. `options` (`Object?`):
    - `options.x` (`Number?`): X coordinate to begin the gesture from. Defaults to 0.
    - `options.y` (`Number?`): Y coordinate to begin the gesture from. Defaults to 0.
    - `options.distance` (`Number`): Distance of swipe in density independent pixels (DIP). Required if `percentage` isn't provided.
    - `options.percentage` (`Number?`): Percentage distance (0-1) of swipe relative to the height of the element. Required if `distance` isn't provided. 
    - `options.duration` (`Number?`): Time in milliseconds to perform the swipe gesture.

#### Returns

[`Element`](../element.md): A new element to avoid mutation and allow function chaining.

#### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | No        |

## Examples

Swipe down 48 pixels. This will swipe down from the coordinate (100, 0) to (100, 48), relative to the element:

```javascript
const { element, by } = require("appdriver");

(async () => {
  await element(by.label("list-item"))
    .swipeDown({ x: 100, distance: 48 });
})();
```

Swipe down 25% of the element height. Given the element has a height of 40, this will swipe down from the coordinate (0, 0) to (0, 10), relative to the element:

```javascript
const { element, by } = require("appdriver");

(async () => {
  await element(by.label("list-item"))
    .swipeDown({ percentage: 0.25 });
})();
```

## Related Methods

- [`.swipe(options)`](./swipe.md)
- [`.swipeUp(options)`](./swipeUp.md)
- [`.swipeLeft(options)`](./swipeLeft.md)
- [`.swipeRight(options)`](./swipeRight.md)

## Related Docs

- [W3C Actions (Appium)](http://appium.io/docs/en/commands/interactions/actions/)
- [Actions (W3C)](https://www.w3.org/TR/webdriver/#actions)
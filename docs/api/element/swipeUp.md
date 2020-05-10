---
id: swipeUp
title: .swipeUp(options)
sidebar_label: .swipeUp(options)
---

Performs a swipe up gesture on the element.

#### Usage

```text
element(matcher).swipeUp(options)
```

#### Parameters

1. `options` (`Object?`):
    - `options.x` (`Number?`): X coordinate to begin the gesture from. Defaults to 0.
    - `options.y` (`Number?`): Y coordinate to begin the gesture from. Defaults to either `options.distance` or the derived distance from `options.percentage`.
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

Swipe up 48 pixels. This will swipe up from the coordinate (100, 48) to (100, 0), relative to the element:

```javascript
const { element, by } = require("appdriver");

(async () => {
  await element(by.label("list-item"))
    .swipeUp({ x: 100, distance: 48 });
})();
```

Swipe up 50% of the element height. Given the element height is 200, this will swipe up from the coordinate (0, 100) to (0, 0), relative to the element:

```javascript
const { element, by } = require("appdriver");

(async () => {
  await element(by.label("list-item"))
    .swipeUp({ y: 100, percentage: 0.5 });
})();
```

## Related Methods

- [`.swipe(options)`](./swipe.md)
- [`.swipeDown(options)`](./swipeDown.md)
- [`.swipeLeft(options)`](./swipeLeft.md)
- [`.swipeRight(options)`](./swipeRight.md)

## Related Docs

- [W3C Actions (Appium)](http://appium.io/docs/en/commands/interactions/actions/)
- [Actions (W3C)](https://www.w3.org/TR/webdriver/#actions)
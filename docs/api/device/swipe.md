---
id: swipe
title: .swipe(options)
sidebar_label: .swipe(options)
---

Performs a swipe gesture in the context of the device viewport.

#### Usage

```text
device.swipe(options)
```

#### Parameters

1. `options` (`Object`):
    - `options.x` (`Number?`): X coordinate to begin the gesture from. Defaults to 0.
    - `options.y` (`Number?`): Y coordinate to begin the gesture from. Defaults to 0.
    - `options.distance` (`Number`): Distance of swipe in density independent pixels (DIP).
    - `options.direction` (`Number`): Direction in degrees (0-359) of swipe.
    - `options.duration` (`Number?`): Time in milliseconds to perform the swipe gesture.

#### Returns

`Promise`: A promise that resolves after the gesture is complete.

#### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | No        |

## Examples

Swipe left 100 pixels. This will swipe left from the coordinate (200, 200) to (100, 200), relative to the device viewport:

```javascript
const { device } = require("appdriver");

(async () => {
  await device.swipe({ x: 200, y: 200, distance: 100, direction: 270 });
})();
```

#### Related Methods

- [`.swipeUp(options)`](./swipeUp.md)
- [`.swipeDown(options)`](./swipeDown.md)
- [`.swipeLeft(options)`](./swipeLeft.md)
- [`.swipeRight(options)`](./swipeRight.md)

#### Related Docs

- [W3C Actions (Appium)](http://appium.io/docs/en/commands/interactions/actions/)
- [Actions (W3C)](https://www.w3.org/TR/webdriver/#actions)
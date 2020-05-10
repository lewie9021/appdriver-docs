---
id: swipeDown
title: .swipeDown(options)
sidebar_label: .swipeDown(options)
---

Performs a swipe down gesture in the context of the device viewport.

#### Usage

```text
device.swipeDown(options)
```

#### Parameters

1. `options` (`Object`):
    - `options.x` (`Number?`): X coordinate to begin the gesture from. Defaults to 0.
    - `options.y` (`Number?`): Y coordinate to begin the gesture from. Defaults to 0.
    - `options.distance` (`Number?`): Distance of swipe in density independent pixels (DIP). Required if `percentage` isn't provided.
    - `options.percentage` (`Number?`): Percentage distance (0-1) of swipe relative to the height of the device viewport. Required if `distance` isn't provided. 
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

Swipe down 50% of the screen. Given a viewport height of 800, this will swipe down from the coordinate (0, 100) to (0, 500), relative to the device viewport:

```javascript
const { device } = require("appdriver");

(async () => {
  await device.swipeDown({ y: 100, percentage: 0.5 });
})();
```

Swipe down 200 pixels. This will swipe down from the coordinate (100, 50) to (100, 250), relative to the device viewport:

```javascript
const { device } = require("appdriver");

(async () => {
  await device.swipeDown({ x: 100, y: 50, distance: 200 });
})();
```

Swipe down 100 pixels. This will swipe down from the coordinate (0, 0) to (0, 100), relative to the device viewport:

```javascript
const { device } = require("appdriver");

(async () => {
  await device.swipeDown({ distance: 100 });
})();
```

#### Related Methods

- [`.swipe(options)`](./swipe.md)
- [`.swipeUp(options)`](./swipeUp.md)
- [`.swipeLeft(options)`](./swipeLeft.md)
- [`.swipeRight(options)`](./swipeRight.md)

#### Related Docs

- [W3C Actions (Appium)](http://appium.io/docs/en/commands/interactions/actions/)
- [Actions (W3C)](https://www.w3.org/TR/webdriver/#actions)
---
id: swipeRight
title: .swipeRight(options)
sidebar_label: .swipeRight(options)
---

Performs a swipe right gesture in the context of the device viewport.

#### Usage

```text
device.swipeRight(options)
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

Swipe right 50% of the screen. Given a viewport width of 350, this will swipe right from the coordinate (0, 0) to (175, 0), relative to the device viewport:

```javascript
const { device } = require("appdriver");

(async () => {
  await device.swipeRight({ percentage: 0.5 });
})();
```

Swipe right 200 pixels. This will swipe right from the coordinate (300, 200) to (500, 200), relative to the device viewport:

```javascript
const { device } = require("appdriver");

(async () => {
  await device.swipeRight({ x: 300, y: 200, distance: 200 });
})();
```

#### Related Methods

- [`.swipe(options)`](./swipe.md)
- [`.swipeUp(options)`](./swipeUp.md)
- [`.swipeDown(options)`](./swipeDown.md)
- [`.swipeLeft(options)`](./swipeLeft.md)

#### Related Docs

- [W3C Actions (Appium)](http://appium.io/docs/en/commands/interactions/actions/)
- [Actions (W3C)](https://www.w3.org/TR/webdriver/#actions)
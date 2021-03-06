---
id: swipeLeft
title: .swipeLeft(options)
sidebar_label: .swipeLeft(options)
---

Performs a swipe left gesture in the context of the device viewport.

### Usage

```text
device.swipeLeft(options)
```

### Parameters

1. `options` (`Object`):
    - `options.x` (`Number?`): X coordinate to begin the gesture from. Defaults to either `distance` or the derived distance from `percentage`.
    - `options.y` (`Number?`): Y coordinate to begin the gesture from. Defaults to 0.
    - `options.distance` (`Number?`): Distance of swipe in density independent pixels (DIP). Required if `percentage` isn't provided.
    - `options.percentage` (`Number?`): Percentage distance (0-1) of swipe relative to the height of the device viewport. Required if `distance` isn't provided. 
    - `options.duration` (`Number?`): Time in milliseconds to perform the swipe gesture.

### Returns

`Promise`: A promise that resolves after the gesture is complete.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | No        |

### Examples

Swipe left 50% of the screen. Given a viewport width of 350, this will swipe left from the coordinate (175, 0) to (0, 0), relative to the device viewport:

```javascript
const { device } = require("appdriver");

(async () => {
  await device.swipeLeft({ percentage: 0.5 });
})();
```

Swipe left 200 pixels. This will swipe left from the coordinate (300, 200) to (100, 200), relative to the device viewport:

```javascript
const { device } = require("appdriver");

(async () => {
  await device.swipeLeft({ x: 300, y: 200, distance: 200 });
})();
```

#### Related Methods

- [`.swipe(options)`](./swipe.md)
- [`.swipeUp(options)`](./swipeUp.md)
- [`.swipeDown(options)`](./swipeDown.md)
- [`.swipeRight(options)`](./swipeRight.md)

#### Related Docs

- [W3C Actions (Appium)](http://appium.io/docs/en/commands/interactions/actions/)
- [Actions (W3C)](https://www.w3.org/TR/webdriver/#actions)
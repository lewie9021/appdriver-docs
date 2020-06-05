---
id: scroll
title: .scroll(options)
sidebar_label: .scroll(options) 
---

Performs a scroll gesture in the context of the device viewport.

### Usage

```text
device.scroll(options)
```

### Parameters

1. `options` (`Object`):
    - `options.x` (`Number?`): X coordinate to begin the gesture from. Defaults to 0.
    - `options.y` (`Number?`): Y coordinate to begin the gesture from. Defaults to 0.
    - `options.distance` (`Number`): Distance of scroll in density independent pixels (DIP).
    - `options.direction` (`Number`): Direction in degrees (0-359) of scroll.

### Returns

`Promise`: A promise that resolves after the gesture is complete.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

### Examples

Scroll down 100 pixels. This will scroll from the coordinate (200, 200) to (200, 300), relative to the device viewport:

```javascript
const { device } = require("appdriver");

(async () => {
  await device.scroll({ x: 200, y: 200, direction: 180, distance: 100 });
})();
```

#### Related Methods

- [`.swipe(options)`](./swipe.md)
- [`.swipeUp(options)`](./swipeUp.md)
- [`.swipeDown(options)`](./swipeDown.md)
- [`.swipeLeft(options)`](./swipeLeft.md)
- [`.swipeRight(options)`](./swipeRight.md)

#### Related Docs

- [W3C Actions (Appium)](http://appium.io/docs/en/commands/interactions/actions/)
- [Actions (W3C)](https://www.w3.org/TR/webdriver/#actions)
- [Execute Script (Appium)](http://appium.io/docs/en/commands/web/execute/)
- [Execute Script (W3C)](https://www.w3.org/TR/webdriver/#dfn-execute-script)
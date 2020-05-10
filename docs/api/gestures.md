---
id: gestures
title: Gestures
sidebar_label: Gestures 
---

The `gestures` object provides a toolbox of presets and utility functions for composing a range of custom gestures to be executed via `device.performGesture()`.

#### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | No       |

## Examples

Rotate Gesture:

```javascript
const { device, gestures } = require("appdriver");

(async () => {
  const viewport = await device.getViewport();
  const rotate90 = gestures.rotate({
    x: viewport.width / 2,
    y: viewport.height / 2,
    radius: 25,
    direction: [ 90, 180 ]
  });
  
  await device.performGesture(rotate90);
})();
```
---
id: device
title: Device
sidebar_label: Device 
---

The `device` object provides a way of performing interactions within the application that aren't directly linked with elements.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

### Examples

TODO: Description here.

```javascript
const { device } = require("appdriver");

(async () => {
  await device.setPortrait();
})();
```

TODO: Description here.

```javascript
const { device } = require("appdriver");

(async () => {
  await device.restartApp();
})();
```

TODO: Description here.

```javascript
const { device, gestures } = require("appdriver");

(async () => {
  const swipeUp = gestures.series([
    press({ x: 160, y: 200 }),
    wait(250),
    moveTo({ y: -100, relative: true }),
    release()
  ]);
  
  await device.performGesture(swipeUp);
})();
```

TODO: Description here.

```javascript
const { device } = require("appdriver");
const path = require("path");

(async () => {
  await device.startScreenRecording({
    filePath: path.join(__dirname, "recordings", "test-case-1.mp4"),
    format: "mp4",
    quality: "high",
    size: {
      width: 1280,
      height: 720
    }
  });
  
  // Test code here...
  
  await device.stopScreenRecording(); 
})();
```
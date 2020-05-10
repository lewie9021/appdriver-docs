---
id: stopScreenRecording
title: .stopScreenRecording()
sidebar_label: .stopScreenRecording()
---

Stops a screen recording currently in progress. See [`.startScreenRecording`](./startScreenRecording.md) to start a recording.

#### Usage

```text
device.stopScreenRecording()
```

#### Returns

`Promise` (`Buffer`): A promise containing a base64 buffer.

#### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Unknown   |

## Examples

Store a screen recording on disk:

```javascript
const { device } = require("appdriver");
const path = require("path");

(async () => {
  const filePath = path.join(__dirname, "videos", "example.mp4");
  await device.startScreenRecording({ filePath });
  
  // ...
  
  await device.stopScreenRecording();
})();
```

Manually store a screen recording on disk:

```javascript
const { device } = require("appdriver");
const fs = require("fs");
const path = require("path");

(async () => {
  await device.startScreenRecording();
  
  // ...
  
  const video = await device.stopScreenRecording();
  fs.writeFileSync(path.join(__dirname, "videos", "example.mp4"), video);
})();
```

## Related Methods

- [`.takeScreenshot(options)`](./takeScreenshot.md)
- [`.startScreenRecording(options)`](./startScreenRecording.md)

## Related Docs

- [Stop Recording Screen (Appium)](http://appium.io/docs/en/commands/device/recording-screen/stop-recording-screen/)
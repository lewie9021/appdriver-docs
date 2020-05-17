---
id: takeScreenshot
title: .takeScreenshot(options)
sidebar_label: .takeScreenshot(options)
---

Takes a screenshot (PNG) of the entire screen and saves the result on disk at the given `filePath` location.

### Usage

```text
device.takeScreenshot(options)
```

### Parameters

1. `options` (`Object?`):
    - `options.filePath` (`String?`): Absolute path on disk to store the screenshot. 

### Returns

`Promise` (`Buffer`): A promise containing a base64 buffer.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Unknown   |

### Examples

Take a screenshot and save in a relative 'screenshots' directory:

```javascript
const { device } = require("appdriver");
const path = require("path");

(async () => {
  const filePath = path.join(__dirname, "screenshots", "screenshot.png");
  await device.takeScreenshot({ filePath });
})();
```

### Related Methods

- [`.startScreenRecording(options)`](./startScreenRecording.md)
- [`.stopScreenRecording()`](./stopScreenRecording.md)

### Related Docs

- [Take Screenshot (Appium)](http://appium.io/docs/en/commands/session/screenshot/)
- [Take Screenshot (W3C)](https://www.w3.org/TR/webdriver/#dfn-take-screenshot)
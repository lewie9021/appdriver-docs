---
id: readFile
title: 🔬 .readFile(filePath)
sidebar_label: 🔬 .readFile(filePath)
---

> This is a proposal for functionality that **may** be implemented in the future.

TODO: Description here.

#### Usage

```text
device.readFile(filePath)
```

#### Parameters

1. `filePath` (`String`): TODO: Description here.

#### Returns

`Promise` (`Buffer`): A promise containing a base64 buffer.

#### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Unknown   |

## Examples

Retrieve contents of file on device:

```javascript
const { device } = require("appdriver");

(async () => {
  await device.readFile("/data/local/tmp/file.txt");
})();
```

## Related Docs

- [Pull File (Appium)](http://appium.io/docs/en/commands/device/files/pull-file/)
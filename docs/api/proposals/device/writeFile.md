---
id: writeFile
title: 🔬 .writeFile(filePath, data)
sidebar_label: 🔬 .writeFile(filePath, data)
---

> This is a proposal for functionality that **may** be implemented in the future.

TODO: Description here.

### Usage

```text
device.writeFile(filePath, data)
```

### Parameters

1. `filePath` (`String`): TODO: Description here.
2. `data` (`Buffer | String`): TODO: Description here.

### Returns

`Promise`: TODO: Description here.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Unknown   |

### Examples

Store file on device:

```javascript
const { device } = require("appdriver");

(async () => {
  const data = new Buffer("Hello World!");
  await device.writeFile("/data/local/tmp/file.txt", data);
})();
```

### Related Docs

- [Push File (Appium)](http://appium.io/docs/en/commands/device/files/push-file/)
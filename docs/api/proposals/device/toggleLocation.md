---
id: toggleLocation
title: 🔬 .toggleLocation()
sidebar_label: 🔬 .toggleLocation()
---

> This is a proposal for functionality that **may** be implemented in the future.

TODO: Description here.

### Usage

```text
device.toggleLocation()
```

### Returns

`Promise`: TODO: Description here.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | No        |
| Android  | Emulator  |
| Web      | Unknown   |

### Examples

Toggle location:

```javascript
const { device } = require("appdriver");

(async () => {
  await device.toggleLocation();
})();
```
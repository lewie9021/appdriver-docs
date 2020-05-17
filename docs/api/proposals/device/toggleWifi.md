---
id: toggleWifi
title: 🔬 .toggleWifi()
sidebar_label: 🔬 .toggleWifi()
---

> This is a proposal for functionality that **may** be implemented in the future.

TODO: Description here.

### Usage

```text
device.toggleWifi()
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

Toggle Wifi:

```javascript
const { device } = require("appdriver");

(async () => {
  await device.toggleWifi();
})();
```
---
id: isReal
title: 🔬 .isReal
sidebar_label: 🔬 .isReal
---

> This is a proposal for functionality that **may** be implemented in the future.

Returns whether the device is real. Returns false for simulators and emulators.

### Usage

```text
device.isReal
```

### Returns

`Boolean`: Whether the device is real.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

### Examples

Check if the device is real:

```javascript
const { device, expect } = require("appdriver");

(async () => {
  await expect(device.isReal).toBeTruthy();
})();
```
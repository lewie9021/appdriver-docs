---
id: getSettings
title: 🔬 .getSettings()
sidebar_label: 🔬 .getSettings()
---

> This is a proposal for functionality that **may** be implemented in the future.

TODO: Description here.

### Usage

```text
device.getSettings()
```

### Returns

`Promise` (`Object`): TODO: Description here.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Unknown   |

### Examples

Get device settings:

```javascript
const { device } = require("appdriver");

(async () => {
  await device.getSettings();
})();
```
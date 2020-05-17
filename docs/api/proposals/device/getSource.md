---
id: getSource
title: 🔬 .getSource()
sidebar_label: 🔬 .getSource()
---

> This is a proposal for functionality that **may** be implemented in the future.

TODO: Description here.

### Usage

```text
device.getSource()
```

### Returns

`Promise` (`String`): Page source contents.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Unknown   |
| Android  | Unknown   |
| Web      | Unknown   |

### Examples

Get page source contents:

```javascript
const { device } = require("appdriver");

(async () => {
  await device.getSource();
})();
```
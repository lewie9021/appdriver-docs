---
id: getClipboard
title: 🔬 .getClipboard(options)
sidebar_label: 🔬 .getClipboard(options)
---

> This is a proposal for functionality that **may** be implemented in the future.

TODO: Description here.

### Usage

```text
device.getClipboard(options)
```

### Parameters

1. `options` (`Object?`):
    - `options.contentType` (`String?`): TODO: Description here.

### Returns

`Promise` (`String`): TODO: Description here.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Unknown   |
| Android  | Unknown   |
| Web      | Unknown   |

### Examples

Retrieve clipboard contents:

```javascript
const { device } = require("appdriver");

(async () => {
  await device.getClipboard();
})();
```
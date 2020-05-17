---
id: setClipboard
title: 🔬 .setClipboard(value, options)
sidebar_label: 🔬 .setClipboard(value, options)
---

> This is a proposal for functionality that **may** be implemented in the future.

TODO: Description here.

### Usage

```text
device.setClipboard(value, options)
```

### Parameters

1. `value` (`String`):
2. `options` (`Object?`):
    - `options.contentType` (`String?`): TODO: Description here.
    - `options.label` (`String?`): TODO: Description here.

### Returns

`Promise`: TODO: Description here.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Unknown   |
| Android  | Unknown   |
| Web      | Unknown   |

### Examples

Set clipboard contents:

```javascript
const { device } = require("appdriver");

(async () => {
  await device.setClipboard("Hello World!");
})();
```
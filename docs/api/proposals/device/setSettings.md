---
id: setSettings
title: 🔬 .setSettings(settings)
sidebar_label: 🔬 .setSettings(settings)
---

> This is a proposal for functionality that **may** be implemented in the future.

TODO: Description here.

### Usage

```text
device.setSettings(settings)
```

### Parameters

1. `settings` (`Object`): TODO: Description here.

### Returns

`Promise`: TODO: Description here.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Unknown   |

### Examples

Set device settings:

```javascript
const { device } = require("appdriver");

(async () => {
  await device.setSettings({
    shouldUseCompactResponses: false,
    ignoreUnimportantViews: true
  });
})();
```
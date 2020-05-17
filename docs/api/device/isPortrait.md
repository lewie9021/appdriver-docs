---
id: isPortrait
title: .isPortrait()
sidebar_label: .isPortrait()
---

Returns whether the device is in a portrait or landscape orientation.

### Usage

```text
device.isPortrait()
```

### Returns

`Promise` (`Boolean`): A promise that resolves with the orientation status.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Unknown   |

### Examples

Check if the device is in a portrait orientation:

```javascript
const { device, expect } = require("appdriver");

(async () => {
  const portrait = await device.isPortrait();

  return expect(portrait).toBeTruthy();
})();
```

### Related Methods

- [`.setPortrait()`](./setPortrait.md)
- [`.setLandscape()`](./setLandscape.md)

### Related Docs

- [Get Orientation (Appium)](http://appium.io/docs/en/commands/session/orientation/get-orientation/)
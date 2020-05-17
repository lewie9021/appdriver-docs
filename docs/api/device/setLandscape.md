---
id: setLandscape
title: .setLandscape()
sidebar_label: .setLandscape()
---

Sets the device orientation to landscape.

### Usage

```text
device.setLandscape()
```

### Returns

`Promise`: A promise that resolves once the orientation has been set.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Unknown   |

### Examples

Set device orientation to landscape:

```javascript
const { device, expect } = require("appdriver");

(async () => {
  await device.setLandscape();

  return expect(device.isPortrait()).toBeFalsy();
})();
```

### Related Methods

- [`.isPortrait()`](./isPortrait.md)
- [`.setPortrait()`](./setPortrait.md)

### Related Docs

- [Set Orientation (Appium)](http://appium.io/docs/en/commands/session/orientation/set-orientation/)
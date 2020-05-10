---
id: setPortrait
title: .setPortrait()
sidebar_label: .setPortrait()
---

Sets the device orientation to portrait.

#### Usage

```text
device.setPortrait()
```

#### Returns

`Promise`: A promise that resolves once the orientation has been set.

#### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Unknown   |

## Examples

Set device orientation to portrait:

```javascript
const { device, expect } = require("appdriver");

(async () => {
  await device.setPortrait();

  return expect(device.isPortrait()).toBeTruthy();
})();
```

## Related Methods

- [`.isPortrait()`](./isPortrait.md)
- [`.setLandscape()`](./setLandscape.md)

## Related Docs

- [Set Orientation (Appium)](http://appium.io/docs/en/commands/session/orientation/set-orientation/)
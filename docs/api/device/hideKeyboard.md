---
id: hideKeyboard
title: .hideKeyboard()
sidebar_label: .hideKeyboard()
---

Hides the on-screen keyboard.

#### Usage

```text
device.hideKeyboard()
```

#### Returns

`Promise`: A promise that resolves once the keyboard is no longer visible.

#### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Unknown   |

## Examples

Hide on-screen keyboard:

```javascript
const { device, expect } = require("appdriver");

(async () => {
  await device.hideKeyboard();

  return expect(device.isKeyboardVisible()).toBeFalsy();
})();
```

## Related Methods

- [`.isKeyboardVisible()`](./isKeyboardVisible.md)

#### Related Docs

- [Hide Keyboard (Appium)](http://appium.io/docs/en/commands/device/keys/hide-keyboard/)
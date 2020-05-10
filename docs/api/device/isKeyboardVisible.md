---
id: isKeyboardVisible
title: .isKeyboardVisible()
sidebar_label: .isKeyboardVisible()
---

Returns whether the keyboard is visible or not.

#### Usage

```text
device.isKeyboardVisible()
```

#### Returns

`Promise` (`Boolean`): A promise that resolves with the keyboard visibility status.

#### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Unknown   |

## Examples

Check if the keyboard is visible:

```javascript
const { device, expect } = require("appdriver");

(async () => {
  const visible = await device.isKeyboardVisible();

  return expect(visible).toBeTruthy();
})();
```

## Related Methods

- [`.hideKeyboard()`](./hideKeyboard.md)

## Related Docs

- [Is Keyboard Shown (Appium)](http://appium.io/docs/en/commands/device/keys/is-keyboard-shown/)
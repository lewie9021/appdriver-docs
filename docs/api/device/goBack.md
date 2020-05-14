---
id: goBack
title: .goBack()
sidebar_label: .goBack()
---

Go to the previous screen. On Android, this will use the hardware back button.

#### Usage

```text
device.goBack()
```

#### Returns

`Promise`: A promise that resolves after navigating to the previous screen.

#### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Not Supported |
| Android  | Yes       |
| Web      | Yes       |

## Examples

Go to previous screen or exit app.

```javascript
const { device } = require("appdriver");

(async () => {
  await device.goBack();
})();
```

## Related Docs

- [Go Back (Appium)](http://appium.io/docs/en/commands/session/back/)
- [Back (W3C)](https://www.w3.org/TR/webdriver/#dfn-back)
---
id: dismiss
title: .dismiss()
sidebar_label: .dismiss()
---

Attempts to dismiss a native alert. If an alert is not visible, an error will be thrown.

#### Usage

```text
alert.dismiss()
```

#### Returns

`Promise`: A promise that resolves once the alert has been dismissed and no longer visible.

#### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

## Examples

TODO: Description here.

```javascript
const { element, by, alert, expect } = require("appdriver");

(async () => {
  await element(by.label("button")).tap();
  await alert.waitToBeVisible();
  await alert.dismiss();

  return expect(alert).not.toBeVisible();
})();
```

## Known Issues

- In a scenario where alerts stack, all alerts will be dismissed (not just the top one). This is behaviour that comes directly from Appium.

## Related Methods

- [`.accept()`](./accept.md)
- [`.isVisible()`](./isVisible.md)
- [`.waitToBeVisible(options)`](./waitToBeVisible.md)

## Related Docs

- [Dismiss Alert (W3C)](https://www.w3.org/TR/webdriver/#dismiss-alert)
- [Get Alert Text (W3C)](https://www.w3.org/TR/webdriver/#get-alert-text)
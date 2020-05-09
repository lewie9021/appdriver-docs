---
id: accept
title: .accept()
sidebar_label: .accept()
---

Attempts to accept a native alert. If an alert is not visible, an error will be thrown.

#### Usage

```text
alert.accept()
```

#### Returns

`Promise`: A promise that resolves once the alert has been accepted and no longer visible.

## Examples

```javascript
const { element, by, alert, expect } = require("appdriver");

(async () => {
  await element(by.label("button")).tap();
  await alert.waitToBeVisible();
  await alert.accept();

  return expect(alert).not.toBeVisible();
})();
```

## Known Issues

- In a scenario where alerts stack, all alerts will be accepted (not just the top one). This is behaviour that comes directly from Appium.

## Related Methods

- [`.dismiss()`](./dismiss.md)
- [`.isVisible()`](./isVisible.md)
- [`.waitToBeVisible(options)`](./waitToBeVisible.md)

## Related Docs

- [Accept Alert (W3C)](https://www.w3.org/TR/webdriver/#accept-alert)
- [Get Alert Text (W3C)](https://www.w3.org/TR/webdriver/#get-alert-text)
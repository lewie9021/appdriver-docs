---
id: isVisible
title: .isVisible()
sidebar_label: .isVisible()
---

Returns whether an alert is visible.

#### Usage

```text
alert.isVisible()
```

#### Returns

`Promise` (`Boolean`): Whether the alert is visible or not.

#### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

## Examples

TODO: Description here.

```javascript
const { alert, expect } = require("appdriver");

(async () => {
  const visible = await alert.isVisible();
  await expect(visible).toBeTruthy();
})();
```

## Related Methods

- [`.waitToBeVisible(options)`](./waitToBeVisible.md)

## Related Docs

- [Get Alert Text (W3C)](https://www.w3.org/TR/webdriver/#get-alert-text)
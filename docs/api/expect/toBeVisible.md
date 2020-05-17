---
id: toBeVisible
title: .toBeVisible()
sidebar_label: .toBeVisible()
---

Asserts visibility status of [elements](../element.md) and [alerts](../alert.md).

### Usage

```text
expect(value).toBeVisible()
```

### Returns

`Promise`: A promise that resolves if the assertion is successful.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

### Examples

Check if the image is visible:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const $image = await element(by.label("image"));

  return expect($image).toBeVisible();
})();
```

Check if an alert is visible:

```javascript
const { alert, expect } = require("appdriver");

(async () => {
  await expect(alert).toBeVisible();
})();
```

### Related Methods

- [`.toExist()`](./toExist.md)

### Related Docs

- [Is Element Displayed](http://appium.io/docs/en/commands/element/attributes/displayed/)
- [Get Alert Text (W3C)](https://www.w3.org/TR/webdriver/#get-alert-text)
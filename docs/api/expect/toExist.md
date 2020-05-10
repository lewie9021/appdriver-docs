---
id: toExist
title: .toExist()
sidebar_label: .toExist()
---

Asserts the element exists.

#### Usage

```text
expect(value).toExist()
```

#### Returns

`Promise`: A promise that resolves if the assertion is successful.

#### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

## Examples

Check if the button exists:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const $button = element(by.label("button"));

  await expect($button).toExist();
})();
```

## Related Methods

- [`.toBeVisible()`](./toBeVisible.md)

## Related Docs

- [Find Element (Appium)](http://appium.io/docs/en/commands/element/find-element/)
- [Find Element (W3C)](https://www.w3.org/TR/webdriver/#find-element)
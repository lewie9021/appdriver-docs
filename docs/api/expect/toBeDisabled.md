---
id: toBeDisabled
title: .toBeDisabled()
sidebar_label: .toBeDisabled()
---

Asserts disabled status of [element](../element.md).

#### Usage

```text
expect(value).toBeDisabled()
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

Check if the button is disabled:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const $button = await element(by.label("button"));

  return expect($button).toBeDisabled();
})();
```

## Related Methods

- [`.toBeSelected()`](./toBeSelected.md)
- [`.toBeFocused()`](./toBeFocused.md)

## Related Docs

- [Is Element Enabled (Appium)](http://appium.io/docs/en/commands/element/attributes/enabled/)
- [Is Element Enabled (W3C)](https://www.w3.org/TR/webdriver/#dfn-is-element-enabled)

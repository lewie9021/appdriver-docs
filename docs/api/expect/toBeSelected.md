---
id: toBeSelected
title: .toBeSelected()
sidebar_label: .toBeSelected()
---

Asserts selected status of [element](../element.md).

#### Usage

```text
expect(value).toBeSelected()
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

Check if the tab is selected:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const $tab = await element(by.label("tab"));

  return expect($tab).toBeSelected();
})();
```

## Related Methods

- [`.toBeDisabled()`](./toBeDisabled.md)
- [`.toBeFocused()`](./toBeFocused.md)

## Related Docs

- [Is Element Selected (Appium)](http://appium.io/docs/en/commands/element/attributes/selected/)
- [Is Element Selected (W3C)](https://www.w3.org/TR/webdriver/#dfn-is-element-selected)
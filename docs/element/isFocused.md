---
id: isFocused
title: .isFocused()
sidebar_label: .isFocused()
---

Retrieves focused status of element.

#### Returns

`Promise` (`Boolean`): Element focused status.

## Examples

Text input:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const focused = await element(by.label("text-input"))
    .isFocused();

  return expect(focused).toBeTruthy();
})();
```

## Related Methods

- [`.isDisabled()`](./isDisabled.md)
- [`.isSelected()`](./isSelected.md)

## Related Docs

- [Get Active Element (Appium)](http://appium.io/docs/en/commands/element/other/active/)
- [Get Active Element (W3C)](https://www.w3.org/TR/webdriver/#get-active-element)
- [Get Element Attribute (Appium)](http://appium.io/docs/en/commands/element/attributes/attribute/)
- [Get Element Attribute (W3C)](https://www.w3.org/TR/webdriver/#dfn-get-element-attribute)
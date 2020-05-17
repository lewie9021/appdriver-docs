---
id: toBeFocused
title: .toBeFocused()
sidebar_label: .toBeFocused()
---

Asserts focus status of [element](../element.md).

### Usage

```text
expect(value).toBeFocused()
```

### Returns

`Promise`: A promise that resolves if the assertion is successful.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | TODO      |

### Examples

Check if the text input is focused:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const $input = await element(by.label("text-input"));

  return expect($input).toBeFocused();
})();
```

### Related Methods

- [`.toBeDisabled()`](./toBeDisabled.md)
- [`.toBeSelected()`](./toBeSelected.md)

### Related Docs

- [Get Active Element (Appium)](http://appium.io/docs/en/commands/element/other/active/)
- [Get Active Element (W3C)](https://www.w3.org/TR/webdriver/#get-active-element)
- [Get Element Attribute (Appium)](http://appium.io/docs/en/commands/element/attributes/attribute/)
- [Get Element Attribute (W3C)](https://www.w3.org/TR/webdriver/#dfn-get-element-attribute)

---
id: toHaveAttribute
title: .toHaveAttribute(attribute, value)
sidebar_label: .toHaveAttribute(attribute, value)
---

Asserts the element has `attribute` strictly equal to `value`.

### Usage

```text
expect(value).toHaveAttribute(attribute, value)
```

### Parameters

1. `attribute` (`String`): Name of attribute. See [`.getAttribute`](../element/getAttribute.md) for available attributes.
2. `value` (`Any`): Value to compare against the element's attribute.

### Returns

`Promise`: A promise that resolves if the assertion is successful.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

### Examples

Check if the button is enabled:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const $button = await element(by.label("button"));

  await expect($button).toHaveAttribute("enabled", true);
})();
```

### Related Docs

- [Get Element Attribute (Appium)](http://appium.io/docs/en/commands/element/attributes/attribute/)
- [Get Element Attribute (W3C)](https://www.w3.org/TR/webdriver/#dfn-get-element-attribute)
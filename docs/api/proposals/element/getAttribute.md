---
id: getAttribute
title: 🔬 .getAttribute(attribute)
sidebar_label: 🔬 .getAttribute(attribute)
---

> This is a proposal for functionality that **may** be implemented in the future.

TODO: Description here.

#### Usage

```text
element(matcher).getAttribute(attribute)
```

#### Parameters

1. `attribute` (`String`): TODO: Description here.

#### Returns

`Promise` (`Any`): TODO: Description here.

#### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

## Examples

Get button "enabled" attribute:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const enabled = await element(by.label("button"))
    .getAttribute("enabled");
  
  return expect(enabled).toBeTruthy();
})();
```

## Related Docs

- [Get Element Attribute (Appium)](http://appium.io/docs/en/commands/element/attributes/attribute/)
- [Get Element Attribute (W3C)](https://www.w3.org/TR/webdriver/#dfn-get-element-attribute)
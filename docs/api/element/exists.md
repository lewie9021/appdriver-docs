---
id: exists
title: .exists()
sidebar_label: .exists()
---

Retrieve existence status of element.

### Usage

```text
element(matcher).exists()
```

### Returns

`Promise` (`Boolean`): Element existence status.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

### Examples

Existence status of button:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const exists = await element(by.label("button"))
    .exists();

  return expect(exists).toBeTruthy();
})();
```

### Related Methods

- [`.isVisible()`](./isVisible.md)

### Related Docs

- [Find Element (Appium)](http://appium.io/docs/en/commands/element/find-element/)
- [Find Element (W3C)](https://www.w3.org/TR/webdriver/#find-element)
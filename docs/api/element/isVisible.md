---
id: isVisible
title: .isVisible()
sidebar_label: .isVisible()
---

Retrieves visibility status of element.

#### Usage

```text
element(matcher).isVisible()
```

#### Returns

`Promise` (`Boolean`): Element visibility status.

#### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

## Examples

Visibility status of button:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const visible = await element(by.label("button"))
    .isVisible();

  return expect(visible).toBeTruthy();
})();
```

## Related Methods

- [`.exists()`](./exists.md)

## Related Docs

- [Is Element Displayed (Appium)](http://appium.io/docs/en/commands/element/attributes/displayed/)
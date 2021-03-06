---
id: getText
title: .getText()
sidebar_label: .getText()
---

Retrieves text content of a native alert. If an alert is not visible, an error will be thrown.

### Usage

```text
alert.getText()
```

### Returns

`Promise` (`String`): Alert text contents.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

### Examples

TODO: Description here.

```javascript
const { alert, expect } = require("appdriver");

(async () => {
  const text = await alert.getText();

  expect(text).toEqual([
    "Alert", // Title
    "Hello World!" // Description
  ].join("\n"))
})();
```

### Known Issues

- In a scenario where alerts stack, text of the alert opened first will be returned. This is behaviour that comes directly from Appium.

### Related Methods

- [`.isVisible()`](./isVisible.md)

### Related Docs

- [Get Alert Text (W3C)](https://www.w3.org/TR/webdriver/#get-alert-text)
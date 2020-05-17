---
id: getText
title: .getText(options)
sidebar_label: .getText(options)
---

Retrieves text content of element.

### Usage

```text
element(matcher).getText(options)
```

### Parameters

1. `options` (`Object?`):
    - `options.recursive` (`Boolean?`): Determines whether to recursively retrieve the inner text. Often useful on Android when text is fragmented, but can be used to retrieve text from grouping elements such as list items. Defaults to false.

### Returns

`Promise` (`String`): Element text contents.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

### Examples

Text element:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const text = await element(by.label("text"))
    .getText();

  await expect(text).toEqual("Hello World!");
})();
```

Button (nested text):

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const text = await element(by.label("button"))
    .getText({ recursive: true });

  await expect(text).toEqual("Press Me!");
})();
```

Text Input:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const text = await element(by.label("text-input"))
    .getText();

  await expect(text).toEqual("Hello World!");
})();
```

### Related Methods

- [`.getValue()`](./getValue.md)

### Related Docs

- [Get Element Text (Appium)](http://appium.io/docs/en/commands/element/attributes/text/)
- [Get Element Text (W3C)](https://www.w3.org/TR/webdriver/#dfn-get-element-text)

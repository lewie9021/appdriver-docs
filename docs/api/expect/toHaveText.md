---
id: toHaveText
title: .toHaveText(text)
sidebar_label: .toHaveText(text)
---

Asserts [elements](../element.md) or [alerts](../alert.md) have text matching `text`.

### Usage

```text
expect(value).toHaveText(text)
```

### Parameters

1. `text` (`String`): Text to compare against.
2. `options` (`Object?`): Options for [`.getText`](../element/getText.md) when asserting an [element](../element.md).

### Returns

`Promise`: A promise that resolves if the assertion is successful.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

### Examples

Element text:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const $text = await element(by.label("text"))

  return expect($text).toHaveText("Hello World!");
})();
```

Input text:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const $input = await element(by.label("text-input"))

  return expect($input).toHaveText("Hello World!");
})();
```

Button (nested text):

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const $button = await element(by.label("button"))

  return expect($button).toHaveText("Press Me!", { recursive: true });
})();
```

Alert:

```javascript
const { alert, expect } = require("appdriver");

(async () => {
  await expect(alert).toHaveText([
    "Alert",
    "Hello World!"
  ].join("\n"));
})();
```

### Related Methods

- [`.toHaveValue(value)`](./toHaveValue.md)

### Related Docs

- [Get Element Text (Appium)](http://appium.io/docs/en/commands/element/attributes/text/)
- [Get Element Text (W3C)](https://www.w3.org/TR/webdriver/#dfn-get-element-text)
- [Get Alert Text (W3C)](https://www.w3.org/TR/webdriver/#get-alert-text)
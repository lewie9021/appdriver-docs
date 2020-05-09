---
id: toHaveValue
title: .toHaveValue(value)
sidebar_label: .toHaveValue(value)
---

Asserts the element has a value strictly equal to `value`.

#### Usage

```text
expect(value).toHaveValue(value)
```

#### Parameters

1. `value` (`String | Number | Boolean`): Value to compare against the element's value.

#### Returns

`Promise`: A promise that resolves if the assertion is successful.

#### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

## Examples

Text input:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const $input = await element(by.label("text-input"));

  await expect($input).toHaveValue("Hello World!");
})();
```

Switch input:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const $input = await element(by.label("switch"));

  await expect($input).toHaveValue(true);
})();
```

Slider input:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const $input = await element(by.label("slider"), {
    sliderRange: [0, 10]
  });

  await expect($input).toHaveValue(5);
})();
```

## Related Methods

- [`.toHaveText(text, options)`](./toHaveText.md)

## Related Docs

- [Get Element Attribute (Appium)](http://appium.io/docs/en/commands/element/attributes/attribute/)
- [Get Element Attribute (W3C)](https://www.w3.org/TR/webdriver/#dfn-get-element-attribute)
---
id: setValue
title: .setValue(value)
sidebar_label: .setValue(value)
---

Replaces element value, clearing existing input.

#### Parameters

1. `value` (`String | Number | Boolean`): Value to replace with.

#### Returns

[`Element`](../element/intro): A new element to avoid mutation and allow function chaining.

## Examples

Text input:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const $input = await element(by.label("text-input"));
  const value = "Hello World!";

  $input.setValue(value);
  await expect($input).toHaveValue(value);
})();
```

Slider:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const $input = await element(by.label("slider"), { sliderRange: [ 0, 10 ]});
  const value = 5;

  await $input.setValue(value);
  await expect($input).toHaveValue(value);
})();
```

Switch:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const $input = await element(by.label("switch"));
  const value = true;

  await $input.setValue(value);
  await expect($input).toHaveValue(value);
})();
```

## Known Issues

- iOS simulators fail to input text when the hardware keyboard is connected. Ensure `Hardware > Keyboard > Connect Hardware Keyboard` is unchecked.

## Related Methods

- [`.typeText(text)`](./typeText.md)
- [`.clearText()`](./clearText.md)

## Related Docs

- [Send Keys (Appium)](http://appium.io/docs/en/commands/element/actions/send-keys/)
- [Element Send Keys (W3C)](https://www.w3.org/TR/webdriver/#dfn-element-send-keys)
- [Clear Element (Appium)](http://appium.io/docs/en/commands/element/actions/clear/)
- [Element Clear (W3C)](https://www.w3.org/TR/webdriver/#element-clear)
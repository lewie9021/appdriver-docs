---
id: typeText
title: .typeText(text)
sidebar_label: .typeText(text)
---

Using the virtual keyboard, types the given text into a text element.

#### Parameters

1. `text` (`String`): Text to type.

#### Returns

[`Element`](./element): A new element to avoid mutation and allow function chaining.

## Examples

Basic text input.

```javascript
const { element, by } = require("appdriver");

(async () => {
  await element(by.label("text-input"))
    .typeText("Hello World!");
})();
```

## Known Issues

- iOS simulators fail to input text when the hardware keyboard is connected. Ensure `Hardware > Keyboard > Connect Hardware Keyboard` is unchecked.

## Related Methods

- [`.setValue(value)`](setValue.md)
- [`.clearText()`](clearText.md)

## Related Docs

- [Send Keys (Appium)](http://appium.io/docs/en/commands/element/actions/send-keys/)
- [Element Send Keys (W3C)](https://www.w3.org/TR/webdriver/#dfn-element-send-keys)
- [W3C Actions (Appium)](http://appium.io/docs/en/commands/interactions/actions/)
- [Actions (W3C)](https://www.w3.org/TR/webdriver/#actions)
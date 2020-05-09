---
id: clearText
title: .clearText()
sidebar_label: .clearText()
---

Wipes the contents of a text element.

#### Usage

```text
element(matcher).clearText()
```

#### Returns

[`Element`](../element.md): A new element to avoid mutation and allow function chaining.

#### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

## Examples

Clear text input:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const $input = await element(by.label("text-input"))
    .clearText();

  await expect($input).toHaveValue("");
})();
```

## Known Issues

- iOS simulators fail to clear text when the hardware keyboard is connected. Ensure `Hardware > Keyboard > Connect Hardware Keyboard` is unchecked.
- Inputs fail to clear when using Xcode 11.x and iOS 12.x and below: ([GitHub issue](https://github.com/appium/appium/issues/13288)).

## Related Methods

- [`.setValue(value)`](./setValue.md)
- [`.typeText(text)`](./typeText.md)

## Related Docs

- [Clear Element (Appium)](http://appium.io/docs/en/commands/element/actions/clear/)
- [Element Clear (W3C)](https://www.w3.org/TR/webdriver/#element-clear)
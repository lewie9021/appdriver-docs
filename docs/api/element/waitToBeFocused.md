---
id: waitToBeFocused
title: .waitToBeFocused(options)
sidebar_label: .waitToBeFocused(options)
---

Polls until the element is focused every `options.interval` or exceeds `options.maxDuration` timeout.

### Usage

```text
element(matcher).waitToBeFocused(options)
```

### Parameters

1. `options` (`Object?`):
    - `options.interval` (`Number?`): Duration in milliseconds to wait between polling. Defaults to 200.
    - `options.maxDuration` (`Number?`): Max duration in milliseconds to poll for before throwing. Defaults to 10000.

### Returns

[`Element`](../element.md): A new element to avoid mutation and allow function chaining.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | TODO      |

### Examples

Wait for an input to be focused:

```javascript
const { element, by } = require("appdriver");

(async () => {
  await element(by.label("text-input"))
    .waitToBeFocused();
})();
```

### Related Methods

- [`.waitFor(condition, options)`](./waitFor.md)
- [`.waitToBeVisible(options)`](./waitToBeVisible.md)
- [`.waitToBeInvisible(options)`](./waitToBeInvisible.md)
- [`.waitToExist(options)`](./waitToExist.md)
- [`.waitToNotExist(options)`](./waitToNotExist.md)

### Related Docs

- [Get Active Element (Appium)](http://appium.io/docs/en/commands/element/other/active/)
- [Get Active Element (W3C)](https://www.w3.org/TR/webdriver/#get-active-element)
- [Get Element Attribute (Appium)](http://appium.io/docs/en/commands/element/attributes/attribute/)
- [Get Element Attribute (W3C)](https://www.w3.org/TR/webdriver/#dfn-get-element-attribute)
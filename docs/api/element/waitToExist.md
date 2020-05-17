---
id: waitToExist
title: .waitToExist(options)
sidebar_label: .waitToExist(options)
---

Polls until the element exists every `options.interval` or exceeds `options.maxDuration` timeout.

### Usage

```text
element(matcher).waitToExist(options)
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
| Web      | Yes       |

### Examples

Wait for a button to exist:

```javascript
const { element, by } = require("appdriver");

(async () => {
  await element(by.label("button"))
    .waitToExist();
})();
```

### Related Methods

- [`.waitFor(condition, options)`](./waitFor.md)
- [`.waitToBeVisible(options)`](./waitToBeVisible.md)
- [`.waitToBeInvisible(options)`](./waitToBeInvisible.md)
- [`.waitToNotExist(options)`](./waitToNotExist.md)
- [`.waitToBeFocused(options)`](./waitToBeFocused.md)

### Related Docs

- [Find Element (Appium)](http://appium.io/docs/en/commands/element/find-element/)
- [Find Element (W3C)](https://www.w3.org/TR/webdriver/#find-element)
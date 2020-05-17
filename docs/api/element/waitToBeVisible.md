---
id: waitToBeVisible
title: .waitToBeVisible(options)
sidebar_label: .waitToBeVisible(options)
---

Polls until the element is visible every `options.interval` or exceeds `options.maxDuration` timeout.

### Usage

```text
element(matcher).waitToBeVisible(options)
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

Wait for a button to be visible:

```javascript
const { element, by } = require("appdriver");

(async () => {
  await element(by.label("button"))
    .waitToBeVisible();
})();
```

### Related Methods

- [`.waitFor(condition, options)`](./waitFor.md)
- [`.waitToExist(options)`](./waitToExist.md)
- [`.waitToBeInvisible(options)`](./waitToBeInvisible.md)
- [`.waitToNotExist(options)`](./waitToNotExist.md)
- [`.waitToBeFocused(options)`](./waitToBeFocused.md)

### Related Docs

- [Is Element Displayed (Appium)](http://appium.io/docs/en/commands/element/attributes/displayed/)
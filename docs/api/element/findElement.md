---
id: findElement
title: .findElement(matcher, options)
sidebar_label: .findElement(matcher, options)
---

Retrieves matching element found within parent. Useful when a direct locator strategy isn't available unless scoped to an element.

#### Usage

```text
element(matcher).findElement(matcher, options)
```

#### Parameters

1. `matcher` ([`Matcher`](../matchers.md)): Matcher to define the locator strategy.
2. `options` (`Object?`):
    - `options.sliderRange` (`Tuple<Number, Number>?`): Provides cross-platform consistency when retrieving the value of a slider. The first number in the tuple is the minimum value, while the second number is the maximum value of the slider (e.g. `[0, 1]`).

#### Returns

[`Element`](../element.md): The first matching element found within parent.

#### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

## Examples

Find text element within button:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const $text = await element(by.label("button"))
    .findElement(by.label("text"));

  return expect($text).toHaveText("Press Me!");
})();
```

## Related Methods

- [`.findElements(matcher, options)`](./findElements.md)

## Related Docs

- [Find Element From Element (W3C)](https://www.w3.org/TR/webdriver/#find-element-from-element)
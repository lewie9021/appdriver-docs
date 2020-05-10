---
id: findElements
title: .findElements(matcher, options)
sidebar_label: .findElements(matcher, options)
---

Retrieves matching elements found within parent. Useful when a direct locator strategy isn't available unless scoped to an element.

#### Usage

```text
element(matcher).findElements(matcher, options)
```

#### Parameters

1. `matcher` ([`Matcher`](../matchers.md)): Matcher to define the locator strategy.
2. `options` (`Object?`):
  - `options.sliderRange` (`Tuple<Number, Number>?`): Provides cross-platform consistency when retrieving the value of a slider. The first number in the tuple is the minimum value, while the second number is the maximum value of the slider (e.g. `[0, 1]`).

#### Returns

`Promise` ([`Array<Element>`](../element.md)): Array of matching elements found within parent.

#### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

## Examples

Find list items within scroll view:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const listItems = await element(by.label("scroll-view"))
    .findElements(by.label(/^list-item-\d+$/));

  return expect(listItems).toHaveLength(5);
})();
```

## Related Methods

- [`.findElement(matcher, options)`](./findElement.md)

## Related Docs

- [Find Elements From Element (W3C)](https://www.w3.org/TR/webdriver/#find-elements-from-element)
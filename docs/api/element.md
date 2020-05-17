---
id: element
title: Element
sidebar_label: Element
---

Locate an Element using a [Matcher](matchers.md). The most common is [`by.label`](matchers/label.md) which attempts to find by accessibility label.

### Usage

```text
element(matcher, options)
```

### Parameters

1. `matcher` ([`Matcher`](matchers.md)): Matcher to define the locator strategy.
2. `options` (`Object?`):
    - `options.sliderRange` (`Tuple<Number, Number>?`): Provides cross-platform consistency when retrieving the value of a slider. The first number in the tuple is the minimum value, while the second number is the maximum value of the slider (e.g. `[0, 1]`).

### Returns

`Promise` ([`Element`](./element.md)): The first matching element.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

### Examples

Input text.

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const $input = await element(by.label("search-input"))
    .typeText("Example Text");
  
  await expect($input).toHaveValue("Example Text");
})();
```

Set slider value.

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const $input = await element(by.label("slider"), { sliderRange: [ 0, 10 ] })
    .setValue(5);

  await expect($input).toHaveValue(5);
})();
```

Swipe up on a scroll view.

```javascript
const { element, by } = require("appdriver");

(async () => {
  await element(by.label("scroll-view"))
    .swipeUp({ distance: 100 });
})();
```
---
id: element
title: element(matcher, options)
sidebar_label: element(matcher, options)
---

Locate an Element using a [Matcher](../matchers/intro.md). The most common is `by.label` which attempts to find by accessibility label.

#### Parameters

1. `matcher` ([`Matcher`](../matchers/intro.md)): Matcher to define the locator strategy.
2. `options` (`Object?`):
  - `options.sliderRange` (`Tuple<Number, Number>?`): Provides cross-platform consistency when retrieving the value of a slider. The first number in the tuple is the minimum value, while the second number is the maximum value of the slider (e.g. `[0, 1]`).

## Examples

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
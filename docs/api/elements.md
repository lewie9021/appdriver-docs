---
id: elements
title: Elements
sidebar_label: Elements
---

Locate multiple Elements using a [Matcher](./matchers.md). The most common is [`by.label`](./matchers/label.md) which attempts to find by accessibility label.

### Usage

```text
elements(matcher, options)
```

### Parameters

1. `matcher` ([`Matcher`](./matchers.md)): Matcher to define the locator strategy.
2. `options` (`Object?`):
    - `options.sliderRange` (`Tuple<Number, Number>?`): Provides cross-platform consistency when retrieving the value of a slider. The first number in the tuple is the minimum value, while the second number is the maximum value of the slider (e.g. `[0, 1]`).

### Returns

`Promise` ([`Array<Element>`](./element.md)): Array of matching elements.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

### Examples

Locate multiple elements with an accessibility label of "list-item".

```javascript
const { elements, by, expect } = require("appdriver");

(async () => {
  const $items = await elements(by.label("list-item"));
  
  await expect($items).toHaveLength(5);
})();
```

Retrieve date picker values. 

```javascript
const { elements, by, expect } = require("appdriver");

(async () => {
  const [ $month, $day, $year ] = await elements(by.type("XCUIElementTypePickerWheel"));
    
  await expect($month).toHaveValue("May");
  await expect($day).toHaveValue("11");
  await expect($year).toHaveValue("2019");
})();
```
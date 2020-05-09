---
id: element
title: Element
sidebar_label: Element
---

TODO: Description here.

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
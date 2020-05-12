---
id: swipeIntoView
title: 🔬 .swipeIntoView(options)
sidebar_label: 🔬 .swipeIntoView(options)
---

> This is a proposal for functionality that **may** be implemented in the future.

To be used on scrollable elements, ensuring `element` is fully visible so that interactions are successful. Defaults `direction` to 0.

#### Usage

```text
element(matcher).swipeIntoView(options)
```

#### Parameters

1. `options` (`Object?`):
    - `options.element` (`Element`): TODO: Description here.
    - `options.direction` (`Number?`): TODO: Description here.
    - `options.safeArea` (`Object?`):
      - `safeArea.top` (`Number?`): TODO: Description here.
      - `safeArea.right` (`Number?`): TODO: Description here.
      - `safeArea.bottom` (`Number?`): TODO: Description here.
      - `safeArea.left` (`Number?`): TODO: Description here.

#### Returns

[`Element`](../../element.md): A new element to avoid mutation and allow function chaining.

#### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Unknown   |
| Android  | Unknown   |
| Web      | Unknown   |

## Examples

Swipe on scroll view until the button is visible:

```javascript
const { element, by } = require("appdriver");

(async () => {
  await element(by.label("scroll-view"))
    .swipeIntoView({ element: element(by.label("button")) });
})();
```
---
id: matchers
title: Matchers
sidebar_label: Matchers
---

Matchers define how elements are located. There are several ways of finding elements such as [`by.label`](../api/matchers/label.md) and [`by.text`](../api/matchers/text.md). What's important is that you use a strategy that is reliable in your application and won't change often.

## Examples
 
Find element with an accessibility label of "input": 

```javascript
const { element, by } = require("appdriver");

(async () => {
  await element(by.label("input"));
})();
```

Find all elements that have an accessibility label starting with "list-item-".

```javascript
const { elements, by } = require("appdriver");

(async () => {
  await elements(by.label(/^list-item-.*$/));
})();
```

Find element with text 'Click Me!''.

```javascript
const { element, by } = require("appdriver");

(async () => {
  await element(by.text("Click Me!"));
})();
```
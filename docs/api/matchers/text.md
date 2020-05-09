---
id: text
title: .text(text)
sidebar_label: .text(text)
---

Find element(s) by their text value.

#### Returns

[`Matcher`](../../core-concepts/matchers.md): A matcher to be used when finding elements.

## Examples

Find an element with the text "Hello World!".

```javascript
const { element, by } = require("appdriver");

(async () => {
  const $text = await element(by.text("Hello World!"));
})();
```

Find an element containing the text "Success".

```javascript
const { element, by } = require("appdriver");

(async () => {
  const $text = await element(by.text(/Success/));
})();
```
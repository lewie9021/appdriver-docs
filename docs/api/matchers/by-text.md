---
id: by-text
title: by.text(text)
sidebar_label: by.text(text)
---

Find element(s) by their text value.

#### Returns

[`Matcher`](intro.md): A matcher to be used when finding elements.

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
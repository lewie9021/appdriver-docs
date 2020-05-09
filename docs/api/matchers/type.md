---
id: type
title: .type(type)
sidebar_label: .type(type)
---

Find element(s) by their type.

#### Returns

[`Matcher`](../../core-concepts/matchers.md): A matcher to be used when finding elements.

## Examples

Find an iOS text input.

```javascript
const { element, by } = require("appdriver");

(async () => {
  const $input = await element(by.type("XCUIElementTypeTextField"));
})();
```

Find an Android switch element.

```javascript
const { element, by } = require("appdriver");

(async () => {
  const $input = await element(by.type("android.widget.Switch"));
})();
```
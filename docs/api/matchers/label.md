---
id: label
title: .label(label)
sidebar_label: .label(label)
---

Find element(s) by their accessibility label. For Android this is the `content-desc` attribute, whereas for iOS it's the `name` attribute.

### Usage

```text
by.label(label)
```

### Returns

[`Matcher`](../matchers.md): A matcher to be used when finding elements.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Unknown   |

### Examples

Find an element with a label of "text-input".

```javascript
const { element, by } = require("appdriver");

(async () => {
  const $input = await element(by.label("text-input"));
})();
```

Find multiple elements with a label starting with "list-item-".

```javascript
const { elements, by } = require("appdriver");

(async () => {
  const $listItems = await elements(by.label(/^list-item-.*$/));
})();
```

### Related Methods

- [`by.id(id)`](./id.md)
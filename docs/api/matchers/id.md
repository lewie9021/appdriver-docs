---
id: id
title: .id(id)
sidebar_label: .id(id)
---

Find element(s) by their ID. For Android this is the `resource-id` attribute, whereas for iOS it's the `name` attribute.

#### Usage

```text
by.id(id)
```

#### Returns

[`Matcher`](../matchers.md): A matcher to be used when finding elements.

#### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

## Examples

Find an element with an id of "button".

```javascript
const { element, by } = require("appdriver");

(async () => {
  const $button = await element(by.id("button"));
})();
```

Find multiple elements with an id starting with "list-item-".

```javascript
const { elements, by } = require("appdriver");

(async () => {
  const $listItems = await elements(by.id(/^list-item-.*$/));
})();
```

## Related Methods

- [`by.label(label)`](./label.md)
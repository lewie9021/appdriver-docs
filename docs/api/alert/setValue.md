---
id: setValue
title: .setValue(value)
sidebar_label: .setValue(value)
---

Replaces alert value, clearing existing input.

#### Usage

```text
alert.setValue(value)
```

#### Parameters

1. `value` (`String`): Value to replace with.

#### Returns

`Promise`: A promise that resolves once value has been set.

## Examples

```javascript
const { alert } = require("appdriver");

(async () => {
  await alert.setValue("Hello World!");
})();
```

## Related Methods

- [`.getText()`](./getText.md)
- [`.isVisible()`](./isVisible.md)

## Related Docs

- [Send Alert Text (W3C)](https://www.w3.org/TR/webdriver/#send-alert-text)
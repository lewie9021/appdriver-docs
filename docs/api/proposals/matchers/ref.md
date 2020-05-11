---
id: ref
title: 🔬 .ref(ref)
sidebar_label: 🔬 .ref(ref)
---

> This is a proposal for functionality that **may** be implemented in the future.

Find element(s) by their Webdriver reference.

#### Usage

```text
by.ref(ref)
```

#### Returns

[`Matcher`](../../matchers.md): A matcher to be used when finding elements.

#### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

## Examples

Find an element by ref:

```javascript
const { device, element, by } = require("appdriver");

(async () => {
  const ref = await device.execute("document.querySelector('.list-item:last-child')");

  await element(by.ref(ref)).tap();
})();
```
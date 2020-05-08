---
id: getValue
title: .getValue()
sidebar_label: .getValue()
---

Retrieves value of element.

#### Returns

`Promise` (`String | Number | Boolean`): Element value.

## Examples

Text input:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const value = await element(by.label("text-input"))
    .getValue();

  await expect(value).toEqual("Hello World!");
})();
```

Slider:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const value = await element(by.label("slider"), { sliderRange: [0, 5] })
    .getValue();

  await expect(value).toEqual(2.5);
})();
```

Switch:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const value = await element(by.label("switch"))
    .getValue();

  await expect(value).toEqual(true);
})();
```

## Related Methods

- [`.getText(options)`](getText.md)

## Related Docs

- [Get Element Attribute (Appium)](http://appium.io/docs/en/commands/element/attributes/attribute/)
- [Get Element Attribute (W3C)](https://www.w3.org/TR/webdriver/#dfn-get-element-attribute)
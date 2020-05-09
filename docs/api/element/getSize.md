---
id: getSize
title: .getSize()
sidebar_label: .getSize()
---

Retrieves width and height of element.

#### Usage

```text
element(matcher).getSize()
```

#### Returns

`Promise` (`Object`):
  - `width` (`Number`): Width of element.
  - `height` (`Number`): Height of element.

## Examples

Get width and height of button:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const size = await element(by.label("button"))
    .getSize();

  return expect(size).toEqual({
    width: 250,
    height: 48
  });
})();
```

## Related Methods

- [`.getLocation(options)`](./getLocation.md)

## Related Docs

- [Get Element Size (Appium)](http://appium.io/docs/en/commands/element/attributes/size/)
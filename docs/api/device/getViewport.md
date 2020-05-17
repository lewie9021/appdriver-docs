---
id: getViewport
title: .getViewport()
sidebar_label: .getViewport()
---

Retrieves the width and height of the device viewport.

### Usage

```text
device.getViewport()
```

### Returns

`Promise` (`Object`):
  - `width` (`Number`): Width of device viewpoint.
  - `height` (`Number`): Height of device viewpoint.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Unknown   |

### Examples

Get viewport size of device (e.g. iPhone X):

```javascript
const { device, expect } = require("appdriver");

(async () => {
  const viewport = await device.getViewport();

  return expect(viewport).toEqual({
    width: 375,
    height: 812
  });
})();
```

### Related Methods

- [`.setPortrait()`](./setPortrait.md)
- [`.setLandscape()`](./setLandscape.md)

### Related Docs

- [Get Window Rect (W3C)](https://www.w3.org/TR/webdriver/#dfn-get-window-rect)
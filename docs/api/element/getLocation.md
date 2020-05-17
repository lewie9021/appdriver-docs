---
id: getLocation
title: .getLocation(options)
sidebar_label: .getLocation(options)
---

Retrieves x and y coordinates of element.

### Usage

```text
element(matcher).getLocation(options)
```

### Parameters

1. `options` (`Object?`):
    - `options.relative` (Boolean?): Determines if the location should be calculated relative to the viewpoint. Defaults to false.

### Returns

`Promise` (`Object`):
  - `x` (`Number`): x coordinate of element.
  - `y` (`Number`): y coordinate of element.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

### Examples

Absolute x and y coordinates of element:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const location = await element(by.label("box"))
    .getLocation();

  return expect(location).toEqual({
    x: 100,
    y: 1400
  });
})();
```

Relative x and y coordinates of element:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const location = await element(by.label("box"))
    .getLocation({ relative: true });

  return expect(location).toEqual({
    x: 100,
    y: 150
  });
})();
```

### Related Methods

- [`.getSize()`](./getSize.md)

### Related Docs

- [Get Element Location (Appium)](http://appium.io/docs/en/commands/element/attributes/location/)
- [Get Element Location In View (Appium)](http://appium.io/docs/en/commands/element/attributes/location-in-view/)
---
id: getAttribute
title: .getAttribute(attribute)
sidebar_label: .getAttribute(attribute)
---

Retrieves attribute value of element.

### Usage

```text
element(matcher).getAttribute(attribute)
```

### Parameters

1. `attribute` (`String`): Name of attribute. See [iOS](#attributes-ios) and [Android](#attributes-android) for available attributes.

### Returns

`Promise` (`Any`): Element attribute value.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

## Attributes (iOS)

| Name | Type |
| ---- | ---- |
| UID | `String` |
| accessibilityContainer | `Boolean` |
| enabled | `Boolean` |
| frame | Unknown |
| label | `String` |
| name | `String` |
| rect | `Object` |
| selected | `Boolean` |
| type | `String` |
| value | `String` |
| visible | `Boolean` |

## Attributes (Android)

| Name | Type |
| ---- | ---- |
| checkable | `Boolean` |
| checked | `Boolean` |
| class | `String` |
| clickable | `Boolean` |
| content-desc | `String` |
| enabled | `Boolean` |
| focusable | `Boolean` |
| focused | `Boolean` |
| long-clickable | `Boolean` |
| package | `String` |
| password | `Boolean` |
| resource-id | `String` |
| scrollable | `Boolean` |
| selection-start | `Number` |
| selection-end | `Number` |
| selected | `Boolean` |
| name | `String` |
| text | `String` |
| bounds | `Object` |
| displayed | `Boolean` |
| contentSize | `Object` |

### Examples

Get button "enabled" attribute:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const enabled = await element(by.label("button"))
    .getAttribute("enabled");
  
  return expect(enabled).toBeTruthy();
})();
```

Get element "bounds" attribute (Android):

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const bounds = await element(by.label("button"))
    .getAttribute("bounds");
  
  return expect(bounds).toEqual({
    x1: 50,
    y1: 100,
    x2: 250,
    y2: 82
  });
})();
```

Get element "rect" attribute (iOS):

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const rect = await element(by.label("button"))
    .getAttribute("rect");
  
  return expect(rect).toEqual({
    x: 50, 
    y: 100,
    width: 200,
    height: 32
  });
})();
```

### Known Issues

- `frame` (iOS) consistently returns a 500 error.
- `value` (iOS) is `null` for empty text inputs.
- `contentSize` (Android) only works with scroll views.

### Related Docs

- [Get Element Attribute (Appium)](http://appium.io/docs/en/commands/element/attributes/attribute/)
- [Get Element Attribute (W3C)](https://www.w3.org/TR/webdriver/#dfn-get-element-attribute)
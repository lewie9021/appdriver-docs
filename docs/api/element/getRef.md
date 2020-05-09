---
id: getRef
title: .getRef()
sidebar_label: .getRef()
---

Retrieves the element reference.

#### Usage

```text
element(matcher).getRef()
```

#### Returns

`Promise` (`Object`): Appium element reference.

## Examples

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const ref = await element(by.label("button"))
    .getRef();

  return expect(ref).toEqual({
    "element-6066-11e4-a52e-4f735466cecf": "31000000-0000-0000-CC4E-000000000000",
    ELEMENT: "31000000-0000-0000-CC4E-000000000000"
  });
})();
```
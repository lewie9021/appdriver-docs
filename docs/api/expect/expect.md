---
id: expect
title: expect(value)
sidebar_label: expect(value)
---

TODO: Description here.

## Examples

TODO: Description here.

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const $input = await element(by.label("text-input"));

  await expect($input).toHaveValue("Example Text");
})();
```

TODO: Description here.

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const $button = await element(by.label("button"));

  await expect($button).toExist();
})();
```

TODO: Description here.

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const $image = await element(by.label("image"));

  await expect($image).not.toBeVisible();
})();
```
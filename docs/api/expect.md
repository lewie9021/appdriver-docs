---
id: expect
title: Expect
sidebar_label: Expect
---

`expect` is the out-of-the-box solution for asserting within tests. It is heavily inspired by Jest, favouring a sane autocomplete system.

#### Usage

```text
expect(value)
```

#### Parameters

1. `value` (`Any`): Value to assert.

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
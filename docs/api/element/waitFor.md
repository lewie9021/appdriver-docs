---
id: waitFor
title: .waitFor(condition, options)
sidebar_label: .waitFor(condition, options)
---

Polls `condition` every `options.interval` until it resolves or `options.maxDuration` timeout is exceeded.

This is useful when your tests need to wait until a particular condition is met. It's common to use [`expect`](../expect.md) as part of defining the `condition` function.

### Usage

```text
element(matcher).waitFor(condition, options)
```

### Parameters

1. `condition` (`Function`):
    - `element` ([`Element`](../element.md)): Reference to current element to apply assertions against.
    - `[ReturnType]` (`Promise`): Returning a Promise that rejects will retry until successfully resolved or exceeds `options.maxDuration`.
2. `options` (`Object?`):
    - `options.interval` (`Number?`): Duration in milliseconds to wait between polling. Defaults to 200.
    - `options.maxDuration` (`Number?`): Max duration in milliseconds to poll before throwing. Defaults to 10000.

### Returns

[`Element`](../element.md): A new element to avoid mutation and allow function chaining.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

### Examples

[`.waitToBeInvisible`](./waitToBeInvisible.md) re-implementation:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  element(by.label("button"))
    .waitFor(($e) => expect($e).not.toBeVisible());
})();
```

[`.waitToExist`](./waitToExist.md) re-implementation:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  element(by.label("button"))
    .waitFor(($e) => expect($e).toExist());
})();
```

Countdown timer:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  element(by.label("timer"))
    .waitFor(($e) => expect($e).toHaveText("0"));
})();
```

### Related Methods

- [`.waitToBeVisible(options)`](./waitToBeVisible.md)
- [`.waitToExist(options)`](./waitToExist.md)
- [`.waitToBeInvisible(options)`](./waitToBeInvisible.md)
- [`.waitToNotExist(options)`](./waitToNotExist.md)
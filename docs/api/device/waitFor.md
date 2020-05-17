---
id: waitFor
title: .waitFor(condition, options)
sidebar_label: .waitFor(condition, options)
---

Polls `condition` every `options.interval` or exceeds `options.maxDuration` timeout.

This is useful when your tests need to wait until a particular condition is met. It's common to use [`expect`](../expect.md) as part of defining the `condition` function.

### Usage

```text
device.waitFor(condition, options)
```

### Parameters

1. `condition` (`Function`):
    - `[ReturnType]` (`Promise`): Returning a Promise that rejects will retry until successfully resolved or exceeds `options.maxDuration`.
2. `options` (`Object?`):
    - `options.interval` (`Number?`): Duration in milliseconds to wait between polling. Defaults to 200.
    - `options.maxDuration` (`Number?`): Max duration in milliseconds to poll before throwing. Defaults to 10000.

### Returns

`Promise`: A promise that resolves if `condition` resolves.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

### Examples

Countdown timer:

```javascript
const { device, element, by, expect } = require("appdriver");

(async () => {
  const $text = await element(by.label("timer-text"));

  await device.waitFor(() => expect($text).toHaveText("0"));
})();
```

### Related Methods

- [`.wait(duration)`](./wait.md)
- [`.while(condition, action, options)`](./while.md)
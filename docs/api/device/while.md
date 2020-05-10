---
id: while
title: .while(condition, action, options)
sidebar_label: .while(condition, action, options)
---

While `condition` resolves, polls `action` every `options.interval` or exceeds `options.maxDuration` timeout.

#### Usage

```text
device.while(condition, action, options)
```

#### Parameters

1. `condition` (`Function`):
    - `[ReturnType]` (`Promise`): Returning a Promise that resolves will retry until it rejects or exceeds `options.maxDuration`.
2. `action` (`Function`):
    - `[ReturnType]` (`Promise`): A Promise that attempts to make `condition` reject.
3. `options` (`Object?`):
    - `options.interval` (`Number?`): Duration in milliseconds to wait between polling. Defaults to 200.
    - `options.maxDuration` (`Number?`): Max duration in milliseconds to poll before throwing. Defaults to 10000.

#### Returns

`Promise`: A promise that resolves if `condition` rejects.

#### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

## Examples

Swipe up until the button is visible:

```javascript
const { device, element, by, expect } = require("appdriver");

(async () => {
  await device.while(
    () => expect(element(by.label("button"))).not.toBeVisible(),
    () => element(by.label("scroll-view")).swipeUp({ distance: 100 })
  );
})();
```

## Related Methods

- [`.wait(duration)`](./wait.md)
- [`.waitFor(condition, options)`](./waitFor.md)
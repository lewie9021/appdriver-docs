---
id: waitToBeVisible
title: .waitToBeVisible(options)
sidebar_label: .waitToBeVisible(options)
---

Polls for an alert to be visible every `options.interval` until found or exceeds `options.maxDuration` timeout.

#### Usage

```text
alert.waitToBeVisible(options)
```

#### Parameters

1. `options` (`Object?`):
    - `options.interval` (`Number?`): Duration in milliseconds to wait between polling. Defaults to [`waitForInterval`](../runner/configuration.md).
    - `options.maxDuration` (`Number?`): Max duration in milliseconds to poll before throwing. Defaults to [`waitForTimeout`](../runner/configuration.md).

#### Returns

`Promise`: A promise that resolves once an alert is visible.

#### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

## Examples

TODO: Description here.

```javascript
const { element, by, alert } = require("appdriver");

(async () => {
  await element(by.label("button")).tap();
  await alert.waitToBeVisible();
  await alert.accept();
})();
```

## Related Methods

- [`.isVisible()`](./isVisible.md)

## Related Docs

- [Get Alert Text (W3C)](https://www.w3.org/TR/webdriver/#get-alert-text)
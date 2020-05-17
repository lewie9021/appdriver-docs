---
id: while
title: 🔬 .while(condition, action, options)
sidebar_label: 🔬 .while(condition, action, options)
---

> This is a proposal for functionality that **may** be implemented in the future.

TODO: Description here.

### Usage

```text
element(matcher).while(condition, action, options)
```

### Parameters

1. `condition` (`Function`):
    - `element` (`Element`): Reference to current element to apply assertions against.
    - `[ReturnType]` (`Promise`): Returning a Promise that resolves will retry until it rejects or exceeds `options.maxDuration`.
2. `action` (`Function`):
    - `element` (`Element`): Reference to current element to apply action against.
    - `[ReturnType]` (`Promise`): A Promise that attempts to make `condition` reject.
3. `options` (`Object?`):
    - `options.interval` (`Number?`): Duration in milliseconds to wait between polling. Defaults to 200.
    - `options.maxDuration` (`Number?`): Max duration in milliseconds to poll before throwing. Defaults to 10000.

### Returns

[`Element`](../../element.md): A new element to avoid mutation and allow function chaining.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

### Examples

Set date picker values (iOS):

```javascript
const { element, by } = require("appdriver");

(async () => {
  const [ $month, $day, $year ] = await element(by.type("XCUIElementTypePickerWheel"));
  
  const day = "11";
  const month = "May";
  const year = "2050";

  await $month.while(
    ($e) => expect($e).not.toHaveValue(month),
    ($e) => $e.setValue(month)
  );

  await $day.while(
    ($e) => expect($e).not.toHaveValue(day),
    ($e) => $e.setValue(day)
  );

  await $year.while(
    ($e) => expect($e).not.toHaveValue(year),
    ($e) => $e.setValue(year)
  );
})();
```
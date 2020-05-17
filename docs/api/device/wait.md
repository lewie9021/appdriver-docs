---
id: wait
title: .wait(duration)
sidebar_label: .wait(duration)
---

Explicitly waits the given duration before continuing the test script.

### Usage

```text
device.wait(duration)
```

### Parameters

1. `duration` (`Number`): Time in milliseconds to wait.

### Returns

`Promise`: A promise that resolves after the given duration.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

### Examples

Explicitly wait 200 milliseconds:

```javascript
const { device } = require("appdriver");

(async () => {
  await device.wait(200);
})();
```

### Related Methods

- [`.waitFor(condition, options)`](./waitFor.md)
- [`.while(condition, action, options)`](./while.md)
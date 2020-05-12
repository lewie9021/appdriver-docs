---
id: sendSms
title: 🔬 .sendSms(options)
sidebar_label: 🔬 .sendSms(options)
---

> This is a proposal for functionality that **may** be implemented in the future.

TODO: Description here.

#### Usage

```text
device.sendSms(options)
```

#### Parameters

1. `options` (`Object`):
    - `options.phoneNumber` (`String`): TODO: Description here.
    - `options.message` (`String`): TODO: Description here.

#### Returns

`Promise` (`Unknown`): TODO: Description here.

#### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Unknown   |
| Android  | Emulator  |
| Web      | Unknown   |

## Examples

Send SMS message:

```javascript
const { device } = require("appdriver");

(async () => {
  await device.sendSms({
    phoneNumber: "555-123-4567",
    message: "Hello World!"
  });
})();
```
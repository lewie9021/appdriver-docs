---
id: session
title: .session
sidebar_label: .session
---

Returns the session identifier and capabilities.

#### Usage

```text
device.session
```

#### Returns

`Object`:
  - `sessionId` (`String`): Session identifier.
  - `capabilities` (`Object`): Session capabilities.

#### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

## Examples

```javascript
const { device } = require("appdriver");

(async () => {
  const { sessionId, capabilities } = device.session;

  console.log(sessionId);
  console.log(capabilities);
})();
```

## Related Methods

- [`.name`](./name.md)
- [`.platform`](./platform.md)

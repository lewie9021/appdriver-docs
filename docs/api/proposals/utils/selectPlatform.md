---
id: selectPlatform
title: 🔬 .selectPlatform(options)
sidebar_label: 🔬 .selectPlatform(options)
---

> This is a proposal for functionality that **may** be implemented in the future.

TODO: Description here.

#### Usage

```text
utils.selectPlatform(options)
```

#### Parameters

1. `options` (`Object?`):
    - `options.ios` (`Function?`): TODO: Description here.
    - `options.android` (`Function?`): TODO: Description here.
    - `options.web` (`Function?`): TODO: Description here.
    - `options.native` (`Function?`): TODO: Description here.

#### Returns

`Any`: TODO: Description here.

#### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

## Examples

Handle differing matcher between platforms:

```javascript
const { element, by, utils } = require("appdriver");

(async () => {
  const matcher = utils.selectPlatform({
    ios: () => by.label("button"),
    android: () => by.id("button")
  });

  await element(matcher).tap();
})();
```

Group iOS and Android together:

```javascript
const { element, by, utils } = require("appdriver");

(async () => {
  const matcher = utils.selectPlatform({
    native: () => by.label("button"),
    web: () => by.css(".button")
  });

  await element(matcher).tap();
})();
```
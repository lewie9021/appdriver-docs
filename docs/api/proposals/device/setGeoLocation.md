---
id: setGeoLocation
title: 🔬 .setGeoLocation(options)
sidebar_label: 🔬 .setGeoLocation(options)
---

> This is a proposal for functionality that **may** be implemented in the future.

TODO: Description here.

#### Usage

```text
device.setGeoLocation(options)
```

#### Parameters

1. `options` (`Object`):
    - `options.latitude` (`Number`): TODO: Description here.
    - `options.longitude` (`Number`): TODO: Description here.
    - `options.altitude` (`Number?`): TODO: Description here.

#### Returns

`Promise` (`Unknown`): TODO: Description here.

#### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Unknown   |
| Android  | Unknown   |
| Web      | Unknown   |

## Examples

Set geo location:

```javascript
const { device } = require("appdriver");

(async () => {
  await device.setGeoLocation({
    latitude: 121.21,
    longitude: 11.56,
    altitude: 94.23
  });
})();
```
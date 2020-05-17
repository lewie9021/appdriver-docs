---
id: alert
title: Alert
sidebar_label: Alert 
---

The `alert` object provides a way of interacting with native alerts.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

### Examples

TODO: Description here.

```javascript
const { element, by, alert, expect } = require("appdriver");

(async () => {
  await element(by.label("button")).tap();
  
  await alert.waitToBeVisible();

  await expect(alert).toHaveText([
    "Alert",
    "Hello World!"
  ].join("\n"));

  await alert.accept();

  return expect(alert).not.toBeVisible();
})();
```
---
id: navigate
title: .navigate(url)
sidebar_label: .navigate(url) 
---

Navigate to the given `url`. In the native context, this will open a deep link.

Deep links are a great way to speed up tests. They can act as a shortcut to specific states within an application where traditionally complex flows maybe required as part of the test setup phase (e.g. `before` and `beforeEach`).

```text
device.navigate(url)
```

### Parameters

1. `url` (`String`): Url to navigate to.

### Returns

`Promise`: A promise that resolves once navigation is complete.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Unknown   |

### Examples

Open deep link:

```javascript
const { device } = require("appdriver");

(async () => {
  await device.navigate("myapp://login?username=test&password=1234");
})();
```

### Related Methods

- [`.goBack()`](./goBack.md)

#### Related Docs

- [Go to URL (Appium)](http://appium.io/docs/en/commands/web/navigation/go-to-url/)
- [Navigate To (W3C)](https://www.w3.org/TR/webdriver/#navigate-to)
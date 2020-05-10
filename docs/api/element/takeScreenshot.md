---
id: takeScreenshot
title: .takeScreenshot(options)
sidebar_label: .takeScreenshot(options) 
---

Takes a screenshot (PNG) of the element within the viewport and saves the result on disk at the given `filePath` location.

#### Usage

```text
element(matcher).takeScreenshot(options)
```

#### Parameters

1. `options` (`Object?`):
    - `options.filePath` (`String?`): Absolute path on disk to store the screenshot.

#### Returns

`Promise` (`Buffer`): A promise containing a base64 buffer.

#### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Unknown   |

## Examples

Take a screenshot of the element and save in a relative 'screenshots' directory.

```javascript
const { element, by } = require("appdriver");
const path = require("path");

(async () => {
  const filePath = path.join(__dirname, "screenshots", "screenshot.png");
  await element(by.label("list-item")).takeScreenshot({ filePath });
})();
```

## Related Docs

- [Take Element Screenshot (W3C)](https://www.w3.org/TR/webdriver/#dfn-take-element-screenshot)
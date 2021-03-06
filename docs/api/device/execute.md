---
id: execute
title: .execute(script, ...params)
sidebar_label: .execute(script, ...params)
---

Execute a script / command within the current context. Commands available within the native context can be found [here](http://appium.io/docs/en/commands/mobile-command/). In the Web context, you can execute arbitrary JavaScript that provides access to various aspects of the document. 

> Note: Where possible, it is good practice to extract script functions into a separate module. That way, it removes temptation to reference variables out of scope that will cause the script to fail. It also helps untangle the mix of execution contexts (Node.js vs. Web).

### Usage

```text
device.execute(script, ...params)
```

### Parameters

1. `script` (`String | Function`): Script to execute. Functions are only supported within the Web context.
2. `...params` (`Any`): JSON serializable parameters (e.g. strings, numbers, objects, arrays and null) to be passed to the script.

### Returns

`Promise` (`Any`): A promise containing the result of the script.

### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Yes       |

### Examples

Retrieve the current device time (Native): 

```javascript
const { device, expect } = require("appdriver");

(async () => {
  const deviceTime = await device.execute("mobile:getDeviceTime", { format: "YYYY-MM-DD" });

  return expect(deviceTime).toEqual("2019-05-11")
})();
```

Perform a swipe left gesture (Native):

```javascript
const { device, element, by } = require("appdriver");

(async () => {
    const ref = await element(by.label("list-item")).getRef();
    await device.execute("mobile:swipe", { direction: "left", element: ref });
})();
```

Retrieve an element reference and scroll into view (Web):

```javascript
const { device, expect } = require("appdriver");

(async () => {
  const ref = await device.execute("document.querySelector('.list-item:nth-child(arguments[0])')", 5);
  await device.execute("arguments[0].scrollIntoView()", ref);

  return expect(ref).toEqual({
    "element-6066-11e4-a52e-4f735466cecf": "5001",
    ELEMENT: "5001"
  });
})();
```

Retrieve the inner text of an element (Web):

```javascript
const { device, element, by, expect } = require("appdriver");

(async () => {
  const ref = await element(by.css("#button")).getRef();
  const text = await device.execute(($button) => $button.innerText, ref);
  
  return expect(text).toEqual("Hello World");
})();
```

### Related Docs

- [Execute Mobile Command (Appium)](http://appium.io/docs/en/commands/mobile-command/)
- [Execute Script (Appium)](http://appium.io/docs/en/commands/web/execute/)
- [Execute Script (W3C)](https://www.w3.org/TR/webdriver/#dfn-execute-script)
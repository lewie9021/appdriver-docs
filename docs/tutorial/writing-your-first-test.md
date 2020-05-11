---
id: writing-your-first-test
title: 2. Writing Your First Test
sidebar_label: 2. Writing Your First Test
---

Let's create a test script that taps a button and asserts the alert text:

**tests/hello-world.e2e.js**
```javascript
const { element, by, alert, expect } = require("appdriver");

describe("My First Testing App", () => {
  it("displays 'Hello World!' when the button is tapped", async () => {
    await element(by.label("button")).tap();
    await alert.waitToBeVisible();
    await expect(alert).toHaveText("Hello World!");
  });
});
```
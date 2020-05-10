---
id: configuring-the-runner
title: 1. Configuring The Runner
sidebar_label: 1. Configuring The Runner
---

> Note: For this tutorial we will be using [My First Testing App](https://github.com/lewie9021/appdriver/tree/master/examples/my-first-testing-app/config/app).

Before we can run a test script, we must first define our AppDriver [configuration](./api/runner/configuration.md) file:

**config/local.config.js**
```javascript
const path = require("path");

const simulators = {
  iPhoneX: {
    bundleId: "org.reactjs.native.example.MyFirstTestingApp",
    app: path.join(__dirname, "app", "MyFirstTestingApp.zip"),
    platformName: "iOS",
    platformVersion: "12.1",
    deviceName: "iPhone X",
    automationName: "XCUITest",
    wdaLocalPort: 8100,
    waitForQuiescence: false,
    noReset: true
  }
};

module.exports = {
  specs: [
    "../tests/hello-world.e2e.js"
  ],
  devices: [
    { capabilities: simulators.iPhoneX }
  ]
};
```
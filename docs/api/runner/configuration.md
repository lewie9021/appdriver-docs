---
id: configuration
title: Configuration
sidebar_label: Configuration
---

The configuration file provides a way of tweaking AppDriver the way you want. While it tries to provide sane defaults for most options, every project is different. At it's most basic, you will need to define a list of `specs` along with a list of `devices` to run.

## Top-Level Options

#### `appium` (`Object?`)

Appium specific options. See [Appium Options](#appium-options)

#### `ui` (`String?`)

Interface to use when writing tests (e.g. `describe` and `it`). Defaults to "bdd". See [Mocha Interfaces](https://mochajs.org/#interfaces) for other options.

#### `specs` (`Array<String>`)

List of spec file paths. Glob pattern matching is not yet supported.

#### `reporters` (`Array<Function>?`)

List of reporters to provide insight throughout your test run. Defaults to the [Basic](#basic) reporter.

#### `maxDevices` (`Number?`)

Maximum number of `devices` to run in parallel. Defaults to 1 (series).

#### `devices` (`Array<Object>`)

Device specific options. See [Device Options](#device-options)

#### `findInterval` (`Number?`)

Interval duration in milliseconds to poll for elements within tests. Defaults to 200.

#### `findTimeout` (`Number?`)

Maximum duration in milliseconds before timing out when finding elements within tests. Defaults to 10000.

#### `waitInterval` (`Number?`)

Interval duration in milliseconds to poll the expectation when using waits within tests. Defaults to 200.

#### `waitTimeout` (`Number?`)

Maximum duration in milliseconds before timing out when using waits within tests. Defaults to 10000.

#### `testTimeout` (`Number?`)

Maximum duration in milliseconds before timing out for a test to complete. Defaults to 60000.

#### `maxSpecRetries` (`Number?`)
 
Maximum number of retries for failing spec files. Defaults to 2.

## Appium Options

#### `baseUrl` (`String?`)

Base URL of Appium server. Defaults to "http://localhost:4723/wd/hub".

## Device Options

#### `specs` (`Array<String>?`)

List of spec file paths. This will be in addition to the top-level `specs`.

#### `findInterval` (`Number?`)

Interval duration in milliseconds to poll for elements within tests. This will override the top-level [`findInterval`](#findinterval-number).

#### `findTimeout` (`Number?`)

Maximum duration in milliseconds before timing out when finding elements within tests. This will override the top-level [`findTimeout`](#findtimeout-number).

#### `waitInterval` (`Number?`)

Interval duration in milliseconds to poll the expectation when using waits within tests. This will override the top-level [`waitInterval`](#waitinterval-number).

#### `waitTimeout` (`Number?`)

Maximum duration in milliseconds before timing out when using waits within tests. This will override the top-level [`waitTimeout`](#waittimeout-number).

#### `testTimeout` (`Number?`)

Maximum duration in milliseconds to wait for a test to complete. This will override the top-level [`testTimeout`](#testtimeout-number).

#### `maxSpecRetries` (`Number?`)

Maximum number of retries for failing spec files. This will override the top-level [`maxSpecRetries`](#maxspecretries-number).

#### `capabilities` (`Object`)

Capabilities to send to the Appium server. For more information, see [Appium Desired Capabilities](http://appium.io/docs/en/writing-running-appium/caps/).

## Examples
 
Automate an iPhone X 13.3 simulator for a single spec file.

```javascript
module.exports = {
  specs: [
    "./tests/hello-world.e2e.js"
  ],
  devices: [{
    capabilities: {
      automationName: "XCUITest",
      platformName: "iOS",
      platformVersion: "13.3",
      deviceName: "iPhone X",
      app: "<path to app>"
    } 
  }]
}
```
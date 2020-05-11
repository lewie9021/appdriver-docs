---
id: configuration
title: 🔬 Configuration
sidebar_label: 🔬 Configuration
---

> This is a proposal for functionality that **may** be implemented in the future.

## Top-Level Options
 
#### `plugins` (`Array<Function>?`)
 
List of plugins to provide functionality throughout your test run.

## Appium Options
 
#### `username` (`String?`)
 
Username for server authentication - useful when connecting to cloud services such as SauceLabs or BrowserStack.

#### `password` (`String?`)
 
Password for server authentication - useful when connecting to cloud services such as SauceLabs or BrowserStack.

## Device Options

#### `build` (`String?`)
 
Build command to execute before running. Useful in local development and have access to the app source code.
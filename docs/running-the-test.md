---
id: running-the-test
title: 3. Running The Test
sidebar_label: 3. Running The Test
---

To run our test, execute the AppDriver CLI with a path to the configuration file:

```bash
./node_modules/.bin/appdriver --config ./config/local.config.js
```

Should you wish to alias the command above, simply modify the package.json file with a script command:

```json5
{
  // ...
  "scripts": {
      // ...
      "test:e2e": "appdriver --config ./config/local.config.js"
  }
  // ...
}
```

You can find the complete source code [here](https://github.com/lewie9021/appdriver/tree/master/examples/my-first-testing-app), including the pre-built application.
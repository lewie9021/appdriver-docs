---
id: startScreenRecording
title: .startScreenRecording(options)
sidebar_label: .startScreenRecording(options)
---

Starts recording the entire screen. See [`.stopScreenRecording`](./stopScreenRecording.md) to stop the recording.

#### Usage

```text
device.startScreenRecording(options)
```

#### Parameters

1. `options` (`Object?`):
    - `options.filePath` (`String?`): Absolute path on disk to store the recording once stopped.
    - `options.maxDuration` (`Number?`): Maximum recording time in seconds. Defaults to 180.
    - `options.forceRestart` (`Boolean?`): Immediately stop any recording that might be in progress.
    - `options.format` (`String?`): iOS only. Format of the video. Can be either `"h264"`, `"mpeg4"`, `"mp4"` or `"fmp4"`. Defaults to "mpeg4".
    - `options.quality` (`String?`): iOS only. Quality of the video. Can be either `"low"`, `"medium"`, or `"high"`. Defaults to "medium".
    - `options.fps` (`Number?`): iOS only. Frames per second of the video. Defaults to 10.
    - `options.size` (`Object?`):
      - `options.size.width` (`Number`): Android only. Width of the video.
      - `options.size.height` (`Number`): Android only. Height of the video.

#### Returns

`Promise`: A promise that resolves once the recording has successfully started.

#### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes       |
| Android  | Yes       |
| Web      | Unknown   |

## Examples

Start a screen recording:

```javascript
const { device } = require("appdriver");
const path = require("path");

(async () => {
  const filePath = path.join(__dirname, "videos", "example.mp4");
  await device.startScreenRecording({ filePath });
})();
```

Optimised screen recording that automatically stops after 30 seconds:

```javascript
const { device } = require("appdriver");
const path = require("path");

(async () => {
  await device.startScreenRecording({ 
    filePath: path.join(__dirname, "videos", "example.mp4"),
    maxDuration: 30,
    quality: "low",
    fps: 5,
    size: {
      width: 720,
      height: 480
    }
  });
})();
```

#### Known Issues

- In some cases the video returned isn't playable with particular versions of Appium and combinations of parameters such as `format`. For instance, using Appium `1.12.x` with a format of `mpeg4` would save a file that wasn't playable.

## Related Methods

- [`.takeScreenshot(options)`](./takeScreenshot.md)
- [`.stopScreenRecording()`](./stopScreenRecording.md)

#### Related Docs

- [Start Recording Screen (Appium)](http://appium.io/docs/en/commands/device/recording-screen/start-recording-screen/)
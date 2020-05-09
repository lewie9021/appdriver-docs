---
id: isSelected
title: .isSelected()
sidebar_label: .isSelected()
---

Retrieves selected status of element. Please note that this is based on the accessibility state ([React Native](https://facebook.github.io/react-native/docs/accessibility#accessibilitystates-ios-android), [Android](https://developer.android.com/reference/android/view/accessibility/AccessibilityNodeInfo#isSelected%28%29), [iOS](https://developer.apple.com/documentation/uikit/uiaccessibility/uiaccessibilitytraits/1620197-selected)) of the element. While the element may appear selected, this may not be the case to Appium.

#### Usage

```text
element(matcher).isSelected()
```

#### Returns

`Promise` (`Boolean`): Element selected status.

#### Support

| Platform | Supported |
| -------- | --------- |
| iOS      | Yes (Appium 1.16.0+) |
| Android  | Yes       |
| Web      | Yes       |

## Examples

Selected status of tab:

```javascript
const { element, by, expect } = require("appdriver");

(async () => {
  const selected = await element(by.label("tab"))
    .isSelected();

  return expect(selected).toBeTruthy();
})();
```

## Known Issues

- iOS wasn't supported until [Appium v1.16.0](https://github.com/appium/appium/releases/tag/v1.16.0). 

## Related Methods

- [`.isDisabled()`](./isDisabled.md)
- [`.isFocused()`](./isFocused.md)

## Related Docs

- [Is Element Selected (Appium)](http://appium.io/docs/en/commands/element/attributes/selected/)
- [Is Element Selected (W3C)](https://www.w3.org/TR/webdriver/#dfn-is-element-selected)
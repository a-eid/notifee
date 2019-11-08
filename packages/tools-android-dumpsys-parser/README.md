# notification-dumpsys-parser

Parses output from:

```bash
adb -s emulator-5556 shell dumpsys notification --noredact
```

Reverse engineered based on:
https://android.googlesource.com/platform/frameworks/base/+/master/services/core/java/com/android/server/notification/NotificationRecord.java#427

### Local Development

Project is setup with Jest testing with coverage.

```json
yarn run test:watch
```

### Example input

Input expected by the parser.

Example inputs are located in the tests: [/**tests**/samples](/__tests__/samples)

### Example output

This is generated by the parser.

```json
[
  {
    "packageName": "com.invertase.testing",
    "icon": "com.invertase.testing:drawable/redbox_top_border_background",
    "flags": "0x10",
    "priority": 0,
    "id": -95542801,
    "tag": null,
    "hasSeen": true,
    "group": "foo bar group",
    "fullscreenIntent": null,
    "contentIntent": null,
    "deleteIntent": null,
    "number": 0,
    "groupAlertBehavior": 0,
    "tickerText": null,
    "contentView": null,
    "bigContentView": null,
    "headsUpContentView": null,
    "color": "0x00000000      timeout=unknown",
    "contactAffinity": 0,
    "recentlyIntrusive": false,
    "packagePriority": 0,
    "packageVisibility": -1000,
    "systemImportance": "UNSPECIFIED",
    "asstImportance": "LOW",
    "importance": "LOW",
    "importanceExplanation": "asst",
    "isAppImportanceLocked": false,
    "intercept": false,
    "hidden": false,
    "rankingTimeMs": 1566810835005,
    "creationTimeMs": 1566810835037,
    "visibleSinceMs": 1566810835870,
    "updateTimeMs": 1566810835037,
    "interruptionTimeMs": 1566810835145,
    "suppressedVisualEffects": 0,
    "sound": "content://settings/system/notification_sound",
    "vibration": null,
    "attributes": "AudioAttributes: usage=USAGE_NOTIFICATION content=CONTENT_TYPE_SONIFICATION flags=0x0 tags= bundle=null",
    "light": null,
    "showBadge": true,
    "colorized": false,
    "isInterruptive": true,
    "channel": {
      "id": "foo",
      "name": "Hello Foo",
      "description": null,
      "importance": 3,
      "bypassDnd": false,
      "lockscreenVisibility": -1000,
      "sound": "content://settings/system/notification_sound",
      "lights": false,
      "lightColor": 0,
      "vibration": null,
      "userLockedFields": 0,
      "foregroundServiceShown": false,
      "vibrationEnabled": false,
      "showBadge": true,
      "deleted": false,
      "group": null,
      "audioAttributes": null,
      "blockableSystem": false,
      "allowBubbles": true,
      "importanceLockedByOEM": false,
      "importanceLockedDefaultApp": false
    },
    "title": "",
    "reduced.images": true,
    "subText": "World",
    "style": "BigPictureStyle",
    "showChronometer": false,
    "text": "foo bar baz",
    "progress": 0,
    "progressMax": 0,
    "appInfo": "ApplicationInfo{7f0f055 com.invertase.testing}",
    "picture": null,
    "showWhen": false,
    "largeIcon": null,
    "infoText": null,
    "progressIndeterminate": false,
    "remoteInputHistory": null,
    "data": { "customValue1": "invertase", "customValue2": "salakar" },
    "actions": []
  },
  {
    "packageName": "com.invertase.testing",
    "icon": "com.invertase.testing:drawable/redbox_top_border_background",
    "flags": "0x10",
    "priority": 0,
    "id": 867811547,
    "tag": null,
    "hasSeen": true,
    "group": null,
    "fullscreenIntent": null,
    "contentIntent": null,
    "deleteIntent": null,
    "number": 0,
    "groupAlertBehavior": 0,
    "tickerText": null,
    "contentView": null,
    "bigContentView": null,
    "headsUpContentView": null,
    "color": "0x00000000      timeout=unknown",
    "contactAffinity": 0,
    "recentlyIntrusive": false,
    "packagePriority": 0,
    "packageVisibility": -1000,
    "systemImportance": "UNSPECIFIED",
    "asstImportance": "LOW",
    "importance": "LOW",
    "importanceExplanation": "asst",
    "isAppImportanceLocked": false,
    "intercept": false,
    "hidden": false,
    "rankingTimeMs": 1566810834897,
    "creationTimeMs": 1566810834906,
    "visibleSinceMs": 1566810835871,
    "updateTimeMs": 1566810834906,
    "interruptionTimeMs": 1566810835008,
    "suppressedVisualEffects": 0,
    "sound": "content://settings/system/notification_sound",
    "vibration": null,
    "attributes": "AudioAttributes: usage=USAGE_NOTIFICATION content=CONTENT_TYPE_SONIFICATION flags=0x0 tags= bundle=null",
    "light": null,
    "showBadge": true,
    "colorized": false,
    "isInterruptive": true,
    "channel": {
      "id": "foo",
      "name": "Hello Foo",
      "description": null,
      "importance": 3,
      "bypassDnd": false,
      "lockscreenVisibility": -1000,
      "sound": "content://settings/system/notification_sound",
      "lights": false,
      "lightColor": 0,
      "vibration": null,
      "userLockedFields": 0,
      "foregroundServiceShown": false,
      "vibrationEnabled": false,
      "showBadge": true,
      "deleted": false,
      "group": null,
      "audioAttributes": null,
      "blockableSystem": false,
      "allowBubbles": true,
      "importanceLockedByOEM": false,
      "importanceLockedDefaultApp": false
    },
    "title": "",
    "reduced.images": true,
    "subText": "",
    "showChronometer": false,
    "text": "foo bar baz",
    "progress": 0,
    "progressMax": 0,
    "appInfo": "ApplicationInfo{7f0f055 com.invertase.testing}",
    "showWhen": false,
    "largeIcon": null,
    "infoText": null,
    "progressIndeterminate": false,
    "remoteInputHistory": null,
    "data": { "customValue1": "invertase", "customValue2": "salakar" },
    "actions": []
  },
  {
    "packageName": "com.google.android.setupwizard",
    "icon": "com.google.android.setupwizard:drawable/deferred_setup_icon",
    "flags": "0x812",
    "priority": 0,
    "id": 3,
    "tag": "DeferredSetupNotification",
    "hasSeen": true,
    "group": null,
    "fullscreenIntent": null,
    "contentIntent": "PendingIntent{9c1b399: PendingIntentRecord{2bd8a2b com.google.android.setupwizard startActivity (whitelist: f56c7dc:+30s0ms)}}",
    "deleteIntent": "PendingIntent{d88465e: PendingIntentRecord{227a27a com.google.android.setupwizard broadcastIntent (whitelist: f56c7dc:+30s0ms)}}",
    "number": 0,
    "groupAlertBehavior": 0,
    "tickerText": null,
    "contentView": null,
    "bigContentView": null,
    "headsUpContentView": null,
    "color": "0xff3b78e7      timeout=unknown",
    "contactAffinity": 0,
    "recentlyIntrusive": false,
    "packagePriority": 0,
    "packageVisibility": -1000,
    "systemImportance": "UNSPECIFIED",
    "asstImportance": "LOW",
    "importance": "LOW",
    "importanceExplanation": "asst",
    "isAppImportanceLocked": false,
    "intercept": false,
    "hidden": false,
    "rankingTimeMs": 1566810818086,
    "creationTimeMs": 1566810818087,
    "visibleSinceMs": 1566810818929,
    "updateTimeMs": 1566810818087,
    "interruptionTimeMs": 1566810818188,
    "suppressedVisualEffects": 0,
    "sound": "content://settings/system/notification_sound",
    "vibration": null,
    "attributes": "AudioAttributes: usage=USAGE_NOTIFICATION content=CONTENT_TYPE_SONIFICATION flags=0x0 tags= bundle=null",
    "light": null,
    "showBadge": true,
    "colorized": true,
    "isInterruptive": true,
    "channel": {
      "id": "deferred",
      "name": "Additional setup",
      "description": null,
      "importance": 2,
      "bypassDnd": false,
      "lockscreenVisibility": -1000,
      "sound": "content://settings/system/notification_sound",
      "lights": false,
      "lightColor": 0,
      "vibration": null,
      "userLockedFields": 0,
      "foregroundServiceShown": false,
      "vibrationEnabled": false,
      "showBadge": true,
      "deleted": false,
      "group": null,
      "audioAttributes": "AudioAttributes: usage=USAGE_NOTIFICATION content=CONTENT_TYPE_SONIFICATION flags=0x0 tags= bundle=null",
      "blockableSystem": false,
      "allowBubbles": true,
      "importanceLockedByOEM": false,
      "importanceLockedDefaultApp": false
    },
    "title": "Finish setting up your Android SDK built for x86",
    "reduced.images": true,
    "style": "BigTextStyle",
    "text": "Copy your data, set wallpaper, and more",
    "appInfo": "ApplicationInfo{4704c7a com.google.android.setupwizard}",
    "showWhen": false,
    "substName": "Android Setup",
    "largeIcon=Icon (Icon(typ=RESOURCE pkg=com.google.android.setupwizard id": "0x7f0800a0))",
    "bigText": "Copy your data, set wallpaper, and more",
    "data": { "customValue1": "invertase", "customValue2": "salakar" },
    "actions": []
  },
  {
    "packageName": "com.android.systemui",
    "icon": "android:drawable/ic_sd_card_48dp",
    "flags": "0x100",
    "priority": 0,
    "id": 1397773634,
    "tag": "public:253,80",
    "hasSeen": true,
    "group": null,
    "fullscreenIntent": null,
    "contentIntent": "PendingIntent{42ef534: PendingIntentRecord{2a56106 com.android.systemui startActivity (whitelist: f56c7dc:+30s0ms)}}",
    "deleteIntent": "PendingIntent{ec6f5d: PendingIntentRecord{91d6fe1 com.android.systemui broadcastIntent (whitelist: f56c7dc:+30s0ms)}}",
    "number": 0,
    "groupAlertBehavior": 0,
    "tickerText": null,
    "contentView": null,
    "bigContentView": null,
    "headsUpContentView": null,
    "color": "0xff607d8b      timeout=unknown",
    "contactAffinity": 0,
    "recentlyIntrusive": false,
    "packagePriority": 0,
    "packageVisibility": -1000,
    "systemImportance": "UNSPECIFIED",
    "asstImportance": "LOW",
    "importance": "LOW",
    "importanceExplanation": "asst",
    "isAppImportanceLocked": false,
    "intercept": false,
    "hidden": false,
    "rankingTimeMs": 1566383385605,
    "creationTimeMs": 1566383384688,
    "visibleSinceMs": 1566809542302,
    "updateTimeMs": 1566383385607,
    "interruptionTimeMs": 1566809542303,
    "suppressedVisualEffects": 0,
    "sound": "content://settings/system/notification_sound",
    "vibration": null,
    "attributes": "AudioAttributes: usage=USAGE_NOTIFICATION content=CONTENT_TYPE_SONIFICATION flags=0x0 tags= bundle=null",
    "light": null,
    "showBadge": true,
    "colorized": false,
    "isInterruptive": true,
    "channel": {
      "id": "DSK",
      "name": "Storage",
      "description": null,
      "importance": 2,
      "bypassDnd": false,
      "lockscreenVisibility": -1000,
      "sound": "content://settings/system/notification_sound",
      "lights": false,
      "lightColor": 0,
      "vibration": null,
      "userLockedFields": 0,
      "foregroundServiceShown": false,
      "vibrationEnabled": false,
      "showBadge": true,
      "deleted": false,
      "group": null,
      "audioAttributes": "AudioAttributes: usage=USAGE_NOTIFICATION content=CONTENT_TYPE_SONIFICATION flags=0x0 tags= bundle=null",
      "blockableSystem": false,
      "allowBubbles": true,
      "importanceLockedByOEM": false,
      "importanceLockedDefaultApp": false
    },
    "title": "Virtual SD card",
    "reduced.images": true,
    "style": "BigTextStyle",
    "text": "Tap to set up",
    "appInfo": "ApplicationInfo{6030a0 com.android.systemui}",
    "substName": "Settings",
    "bigText": "Tap to set up",
    "tv.EXTENSIONS=Bundle (Bundle[mParcelledData.dataSize": "116])",
    "data": { "customValue1": "invertase", "customValue2": "salakar" },
    "actions": []
  }
]
```
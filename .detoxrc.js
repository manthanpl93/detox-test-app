/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      $0: "jest",
      config: "e2e/jest.config.js",
    },
    jest: {
      setupTimeout: 120000,
    },
  },
  apps: {
    "ios.debug": {
      type: "ios.app",
      binaryPath:
        "/Users/manthan/Desktop/Files/Projects/detox-test/DetoxTestApp/ios/build",
      build:
        "xcodebuild -workspace ios/DetoxTestApp.xcworkspace -scheme DetoxTestApp -configuration Debug -sdk iphonesimulator -derivedDataPath /Users/manthan/Desktop/Files/Projects/detox-test/DetoxTestApp/ios/build",
    },
    "ios.release": {
      type: "ios.app",
      binaryPath:
        "/ios/build/Build/Products/Release-iphonesimulator/DetoxTestApp.app",
      build:
        "xcodebuild -workspace ios/DetoxTestApp.xcworkspace -scheme DetoxTestApp -configuration Release -sdk iphonesimulator -derivedDataPath ios/build",
    },
    "android.debug": {
      type: "android.apk",
      build:
        "cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug",
      binaryPath: "android/app/build/outputs/apk/debug/app-debug.apk",
      reversePorts: [8081],
    },
    "android.release": {
      type: "android.apk",
      build:
        "cd android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release",
      binaryPath: "android/app/build/outputs/apk/release/app-release.apk",
    },
  },
  devices: {
    simulator: {
      type: "ios.simulator",
      device: {
        type: "iPhone 14",
      },
    },
    attached: {
      type: "android.attached",
      device: {
        adbName: ".*",
      },
    },
    emulator: {
      type: "android.emulator",
      device: {
        avdName: "Pixel_7_API_34",
      },
    },
  },
  configurations: {
    "ios.sim.debug": {
      device: "simulator",
      app: "ios.debug",
    },
    "ios.sim.release": {
      device: "simulator",
      app: "ios.release",
    },
    "android.att.debug": {
      device: "attached",
      app: "android.debug",
    },
    "android.att.release": {
      device: "attached",
      app: "android.release",
    },
    "android.emu.debug": {
      device: "emulator",
      app: "android.debug",
    },
    "android.emu.release": {
      device: "emulator",
      app: "android.release",
    },
  },
};

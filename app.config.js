const dotenv = require("dotenv");
dotenv.config();

export default {
    expo: {
      name: "Playdio",
      slug: "Playdio",
      platforms: [
        "ios",
        "android",
        "web"
      ],
      version: "1.0.0",
      orientation: "portrait",
      icon: "./assets/icon.png",
      splash: {
        image: "./assets/splash.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff"
      },
      updates: {
        fallbackToCacheTimeout: 0
      },
      assetBundlePatterns: [
        "**/*"
      ],
      ios: {
        supportsTablet: true,
        bundleIdentifier: "com.toutenm.playdio",
        buildNumber: "1.0.0"
      },
      android: {
        package: "com.toutenm.playdio",
        versionCode: 1
      },
      extra: {
        backendURL: process.env.REACT_NATIVE_BACKEND_URL
      }
    }
  }
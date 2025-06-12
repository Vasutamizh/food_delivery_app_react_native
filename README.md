# Getting Started

## Prerequisties:

    -- Node (v18)
    -- Android Studio(Without Android Virtual Emulator -- uncheck this during installation).
    -- Supabase Account that consists of bucket(Storage) with food images, Table(foods, cart), Authentication(Email provider with user details in the supabase account for auth).
    -- The created project URL & Annon Key for the supabase API. 

If your using real mobile phone as output screem then, 
you need adb.

For Linux: sudo apt install adb.

For Windows: Refer Internet.

For Mac: Refer Internet

Or Else

    You will need Full Anroid Studio Setup.

## Step 1: Installation

After cloning this repo;

```sh
# npm install

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

Before Starting you will need to enter the supabase project url & Api key.

Edit projectRoot/src/utils/SupabaseClient.tsx

Assign Values to the following variables.

------------------------------------------
const supabaseUrl = "project url";

const supabaseAnonKey = "your api key";
------------------------------------------


## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

npm start

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

# Using npm
npm run android

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install

```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

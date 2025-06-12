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

npm react-native start

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:


# Using npm
npx react-native run-android

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Congratulations!

You've successfully run and modified your React Native App.

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

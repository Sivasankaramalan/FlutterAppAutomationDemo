




# Amplify Flutter Example

Sample flutter app for getting started with the Amplify Flutter Library for Adding Backend service to the App.  This example uses the Auth, Analytics, and Storage components of the Flutter library. 

App developed with Two pages

1. Sign In
2. Sign Up

Please check out our docs here:
https://docs.amplify.aws/start/q/integration/flutter

## Getting Started

**Run Appium test on Android**

- Change directory to **`/appium`** wihtin the project.
- Start appium server by invoking command **`appium`** in console.
- Verify the connected Device by running **`adb devices`**
- Change the Android configuration such as device `udid` **`test.js`** file under **`~/appium`**
- Install required nodejs package by invoking **`npm install`**
- Run below command to start the Test
***`APPIUM_OS=android npm start`***


## Important Notes 

This is a very basic app that interacts with AWS resources. I did not implement UI showing that the app is "loading" or "uploading" something from AWS. Some operations like logging in or uploading an image can take some time.

Please note when signing up that you MUST provide a country code for a new user's phone number.  For example, if you number is American, you will need to append +1 at the beginning.  




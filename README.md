This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step and then cloned the project repo, before proceeding.

## Step 1: Install all dependencies

```bash
# using npm
npm install

# OR using Yarn
yarn or yarn install
```

### For iOS

```bash
# install pods
cd ios && pod install
```

## Step 2: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Screenshots of App

![Spash Screen](https://private-user-images.githubusercontent.com/56815082/302081881-11e2924b-1d07-4bee-8c6a-1d441b0bc13e.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDcwMjgyNjksIm5iZiI6MTcwNzAyNzk2OSwicGF0aCI6Ii81NjgxNTA4Mi8zMDIwODE4ODEtMTFlMjkyNGItMWQwNy00YmVlLThjNmEtMWQ0NDFiMGJjMTNlLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjA0VDA2MjYwOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWVjNjIzOTJlZDZjMmQyYjUxOTE1MmMzMGU3MzNmZGZiMGJmNjY3MThjYzFiOGQ1N2I5NjZmNWU4N2E5MzI0M2ImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.vw6bCcUzWQavuUgyRd0zRjCXjD3R2EmMobs8UPCWZNM)

![Loading Screen](https://private-user-images.githubusercontent.com/56815082/302081886-76e10e1e-a5a0-481c-bcf0-2a224f970189.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDcwMjgyNjksIm5iZiI6MTcwNzAyNzk2OSwicGF0aCI6Ii81NjgxNTA4Mi8zMDIwODE4ODYtNzZlMTBlMWUtYTVhMC00ODFjLWJjZjAtMmEyMjRmOTcwMTg5LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjA0VDA2MjYwOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTg1ZWEyN2EyZmFiNTc2MmJkNDg3MTYxN2ExMjBkYWYzYTExNWZmNGQ5MTNiYmU4NmVlM2NhMjUzODBjNTczNDImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.nAHaJjXPsc1Eg0wLVUknJ0hIqZ-6mfAwi7yxZZL74EY)

![Landing Screen](https://private-user-images.githubusercontent.com/56815082/302081891-d938a951-b2ad-48a9-996b-15ce074dc63a.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDcwMjgyNjksIm5iZiI6MTcwNzAyNzk2OSwicGF0aCI6Ii81NjgxNTA4Mi8zMDIwODE4OTEtZDkzOGE5NTEtYjJhZC00OGE5LTk5NmItMTVjZTA3NGRjNjNhLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjA0VDA2MjYwOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTBmNTFlMjc4NzQ5M2NkZWU1NzcyYmEzNTM4NWE3YjM3YTNiZTQ0NDU1OWE4Y2NkNzgwMjkyNjhjOTcwNzA4N2EmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.pDrNtSWY_ZaGt43bKYFUuWeoRJ6-uwMphl5eR-MRlg4)

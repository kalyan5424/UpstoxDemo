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

![Spash Screen](https://private-user-images.githubusercontent.com/56815082/302079755-612591eb-ba56-46f4-9ee2-e2a46b38ae6e.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDcwMjY2OTMsIm5iZiI6MTcwNzAyNjM5MywicGF0aCI6Ii81NjgxNTA4Mi8zMDIwNzk3NTUtNjEyNTkxZWItYmE1Ni00NmY0LTllZTItZTJhNDZiMzhhZTZlLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjA0VDA1NTk1M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTAxODllMjVmMmY3NTRmYmM5ZWNkNmFmYTg5MDIzOGQ5NTYwMjAxMWI5MDlkOWZkMzg1MmJmOTRiYzk1NTQ2ZDImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.VF5WNpAiLJv4C9EMXce3FCBLSdlOY-rJrjw9XOzkmHo)

![Loading Screen](https://private-user-images.githubusercontent.com/56815082/302079763-c2347915-dac7-425d-9746-f3a01ec9becd.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDcwMjY2OTMsIm5iZiI6MTcwNzAyNjM5MywicGF0aCI6Ii81NjgxNTA4Mi8zMDIwNzk3NjMtYzIzNDc5MTUtZGFjNy00MjVkLTk3NDYtZjNhMDFlYzliZWNkLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjA0VDA1NTk1M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTMxMjBhOGE2ODJjNWUxZTRjNzAwN2ZlYjU1YmUxZjZlMTBiMDI1YTVmMjIzMjE2YzRlY2MzYzFlNzRiODVkNWYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.EzwIdx2P0fJbpZ9fRf4udanK557EDOcC5kustTUuZMw)

![Landing Screen](https://private-user-images.githubusercontent.com/56815082/302079768-23832b36-c40b-4786-9542-566ae2a0d0c6.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDcwMjY2OTMsIm5iZiI6MTcwNzAyNjM5MywicGF0aCI6Ii81NjgxNTA4Mi8zMDIwNzk3NjgtMjM4MzJiMzYtYzQwYi00Nzg2LTk1NDItNTY2YWUyYTBkMGM2LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjA0VDA1NTk1M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPThiM2NhZDYzZjlmMGMzYmIzMmYwOWRkZjE3ZDg4YWMxNzEzNTg1OWEyYzU2YWRjMjFjNGQ0YTNiOWE2ZDJjNDEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.-JDFznxUxe8oLpv6wt0k37n2SxMCb8nqohIzA9HVy-4)

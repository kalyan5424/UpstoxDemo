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
<p>
<img src="https://private-user-images.githubusercontent.com/56815082/302081881-11e2924b-1d07-4bee-8c6a-1d441b0bc13e.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDcwMjg3MzMsIm5iZiI6MTcwNzAyODQzMywicGF0aCI6Ii81NjgxNTA4Mi8zMDIwODE4ODEtMTFlMjkyNGItMWQwNy00YmVlLThjNmEtMWQ0NDFiMGJjMTNlLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjA0VDA2MzM1M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTNkYTNkYTVjNjA0OGY1OTA0YjdkZDA1MzVkZTM3OTE3NGM0MjA2NGQ5YTRmOTU0OWI1MGExMmY4MThkNzg5MDImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.i7M7nunq6IN_wBF0_4uDB1mvACa0D-RhtjL-herAs7c" data-canonical-src="https://gyazo.com/eb5c5741b6a9a16c692170a41a49c858.png" width="200" height="400" />

<img src="https://private-user-images.githubusercontent.com/56815082/302081886-76e10e1e-a5a0-481c-bcf0-2a224f970189.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDcwMjg3MzMsIm5iZiI6MTcwNzAyODQzMywicGF0aCI6Ii81NjgxNTA4Mi8zMDIwODE4ODYtNzZlMTBlMWUtYTVhMC00ODFjLWJjZjAtMmEyMjRmOTcwMTg5LmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjA0VDA2MzM1M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPThlOTZjMzM5OTMyNjBkMmI1N2FmNzM4MTJhYzkxZjNiNzZiMGRiMTUwYTUzMGYyNjI3OTU2OTU4NmFhMWYxNTcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.hsPhzaW75YrDG_YwhRXs5k1yRWWW4jwBByuX6R7J4Rc" width="200" height="400" />

<img src="https://private-user-images.githubusercontent.com/56815082/302081891-d938a951-b2ad-48a9-996b-15ce074dc63a.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDcwMjg3MzMsIm5iZiI6MTcwNzAyODQzMywicGF0aCI6Ii81NjgxNTA4Mi8zMDIwODE4OTEtZDkzOGE5NTEtYjJhZC00OGE5LTk5NmItMTVjZTA3NGRjNjNhLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjA0VDA2MzM1M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTE3ZTcyYmY4ZGRjMTk3ZjljZjBjNjI5MWQ2Y2E1MzJmZTEyZjgzODY2Yzk1ZjcxZTcyYjFlOTM0YmY2Mzg0M2EmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.85LFi8N8XuiqgVm4V9wSkX6cCu_eifELUqiThKdxt2M" width="200" height="400" />

<img src="https://private-user-images.githubusercontent.com/56815082/302082185-7fe73062-d98b-4542-8c66-843f633b648f.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDcwMjg3MzMsIm5iZiI6MTcwNzAyODQzMywicGF0aCI6Ii81NjgxNTA4Mi8zMDIwODIxODUtN2ZlNzMwNjItZDk4Yi00NTQyLThjNjYtODQzZjYzM2I2NDhmLmpwZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDAyMDQlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwMjA0VDA2MzM1M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTk4OWM3NjJjM2NjNmY5ZTAwNzhkZWU3N2FhMTllZDUzYjY3MGQ4ZWE0NjM4YjNiMGM3ZDg4NzBlYTdhYjBjMTEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0._ds7ioeJzXOx-fdDHr50-jwqqT3bN1n6prldIlh7KpM" width="200" height="400" />

</p>

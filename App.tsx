/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import NavigationStack from 'routes/NavigationStack';
import store from 'store/store';

function App(props: AppProps): JSX.Element {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Provider store={store}>
                    <NavigationStack {...props} />
                </Provider>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

interface AppProps {
    screenName: string;
    screenProps: string;
}

export default App;

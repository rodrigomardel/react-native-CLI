import { SafeAreaView } from 'react-native';
import { CounterScreen, HelloWorldScreen, BoxObjectModelScreen } from './src/presentation/screens';

export const App = () => {
  return (
      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloWorldScreen name='Rodrigo Martínez Delgado' /> */}
        {/* <CounterScreen /> */}
        <BoxObjectModelScreen />
      </SafeAreaView>
  );
};

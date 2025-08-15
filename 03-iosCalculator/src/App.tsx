/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { CalculatorScreen } from './presentation/screens';
import { styles } from './config/theme/app-theme';
import { View } from 'react-native';

function App() {

  return (
    <View style={styles.background}>
      <CalculatorScreen />
    </View>
  );
}

export default App;
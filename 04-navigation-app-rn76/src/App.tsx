import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { MyStack } from './presentation/routes/StackNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

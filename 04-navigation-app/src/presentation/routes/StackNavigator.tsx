import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { globalColors } from '../theme/theme';
import { ProductScreen } from '../screens/products/ProductScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';

const Stack = createStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          elevation: 0,
          backgroundColor: globalColors.tertiary,
          shadowColor: 'transparent',
        },
        headerTintColor: globalColors.background,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Inicio' }}
      />
      <Stack.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ title: 'Mi Perfil' }}
      />
      <Stack.Screen 
        name="Products" 
        component={ProductsScreen} 
        options={{ title: 'Productos' }}
      />
      <Stack.Screen 
        name="Product" 
        component={ProductScreen} 
        options={{ title: 'Producto' }}
      />
      <Stack.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{ title: 'Ajustes' }}
      />
    </Stack.Navigator>
  );
}; 

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { globalColors, styles } from '../../config/app-theme';
import { IonIcon } from '../components/IonIcon';
import { Text, TouchableOpacity } from 'react-native';
import { useCounterStore } from '../screens/profile/counter-store';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  const count = useCounterStore((state) => state.count);

  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: globalColors.chassis,
      tabBarStyle: {
        backgroundColor: globalColors.background,
        borderTopColor: '#e0e0e0',
        borderTopWidth: 1,
        paddingBottom: 5,
        paddingTop: 5,
        height: 60,
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontWeight: '600',
      },
      tabBarShowLabel: false,
      headerStyle: {
        backgroundColor: globalColors.chassis,
      },
      headerTintColor: globalColors.background,
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 28,
        textAlign: 'center',
      },
      headerTitleAlign: 'center',
      tabBarButton: (props) => (
        <TouchableOpacity
          activeOpacity={1}
          style={props.style}
          onPress={props.onPress}
        >
          {props.children}
        </TouchableOpacity>
      ),
    }}>
      <Tab.Screen name="Home" component={HomeScreen} 
      options={{
        headerTitle: `Inicio`,
        tabBarIcon: ({ color, size }) => (
          <IonIcon name="house" color={color} size={size} iconStyle="solid" />
        ),
      }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} 
      options={{
        headerTitle: `Perfil`,
        tabBarIcon: ({ color, size }) => (
          <IonIcon name="user" color={color} size={size} iconStyle="solid" />
        ),
      }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen} 
      options={{
        headerTitle: `Configuración    ${count}`,
        tabBarIcon: ({ color, size }) => (
          <IonIcon name="gear" color={color} size={size} iconStyle="solid" />
        ),
      }}
      />
    </Tab.Navigator>
  );
}
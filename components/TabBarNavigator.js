import { Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useTheme } from './ThemeContext';
import ActivitiesScreen from '../screens/ActivitiesScreen';
import DietScreen from '../screens/DietScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

function TabBarNavigator() {
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.tabBackground,
          borderTopColor: theme.tabBackground,
        },
        tabBarActiveTintColor: theme.tabIconSelected,
        tabBarInactiveTintColor: theme.tabIconDefault,
      }}
    >
      <Tab.Screen
        name="Activities"
        component={ActivitiesScreen}
        options={({ navigation }) => ({
          title: 'Activities',
          headerRight: () => (
            <Button
              title="Add"
              onPress={() => navigation.navigate('AddActivity')}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="directions-run" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Diet"
        component={DietScreen}
        options={({ navigation }) => ({
          title: 'Diet',
          headerRight: () => (
            <Button
              title="Add"
              onPress={() => navigation.navigate('AddDiet')}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="fastfood" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabBarNavigator;
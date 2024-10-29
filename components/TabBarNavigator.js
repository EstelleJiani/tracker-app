import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useTheme } from './ThemeContext';
import ActivitiesScreen from '../screens/ActivitiesScreen';
import DietScreen from '../screens/DietScreen';
import SettingsScreen from '../screens/SettingsScreen';
import IconButton from './IconButton';

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
            <IconButton
              type='addActivity'
              onPress={() => navigation.navigate('ActivityForm')}
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
            <IconButton
              type='addDiet'
              onPress={() => navigation.navigate('DietForm')}
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
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from './ThemeContext';
import TabBarNavigator from './TabBarNavigator';
import ActivityFormScreen from '../screens/ActivityFormScreen'
import DietFormScreen from '../screens/DietFormScreen';

const Stack = createStackNavigator();

function MainNavigator() {
  const { theme } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.tabBackground,
          borderTopColor: theme.tabBackground,
        },
        tabBarActiveTintColor: theme.tabIconSelected,
        tabBarInactiveTintColor: theme.tabIconDefault,
      }}
    >
      <Stack.Screen
        name="TabBarNavigator"
        component={TabBarNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ActivityForm"
        component={ActivityFormScreen}
      />
      <Stack.Screen
        name="DietForm"
        component={DietFormScreen}
        options={{
          title: 'Add A Diet Entry',
        }}
      />
    </Stack.Navigator>
  );
}

export default MainNavigator;
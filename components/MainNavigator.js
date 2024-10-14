import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from './ThemeContext';
import TabBarNavigator from './TabBarNavigator';
import AddActivityScreen from '../screens/AddActivityScreen'
import AddDietScreen from '../screens/AddDietScreen';

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
        name="AddActivity"
        component={AddActivityScreen}
        options={{
          title: 'Add An Activity',
        }}
      />
      <Stack.Screen
        name="AddDiet"
        component={AddDietScreen}
        options={{
          title: 'Add A Diet Entry',
        }}
      />
    </Stack.Navigator>
  );
}

export default MainNavigator;
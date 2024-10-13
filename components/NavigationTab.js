import { Button } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import ActivitiesScreen from '../screens/ActivitiesScreen';
import AddActivityScreen from '../screens/AddActivityScreen';
import DietScreen from '../screens/DietScreen';
import AddDietScreen from '../screens/AddDietScreen';
import SettingsScreen from '../screens/SettingsScreen';

// Create a Tab Navigator
const Tab = createBottomTabNavigator();

// Create stacks for each tab
const ActivitiesStack = createStackNavigator();
const DietStack = createStackNavigator();
const SettingStack = createStackNavigator();

// Create the Activities Stack Navigator
function ActivitiesStackScreen() {
  return (
    <ActivitiesStack.Navigator>
      <ActivitiesStack.Screen
        name="Activities"
        component={ActivitiesScreen}
        options={({navigation}) => ({
          headerTitle: 'Activities',
          headerRight: () => (
            <Button
              title="Add"
              onPress={() => navigation.navigate('AddActivity')}
            />
          ),
        })}
      />
      <ActivitiesStack.Screen
        name="AddActivity"
        component={AddActivityScreen}
        options={()=>({
          title: 'Add An Activity',
        })}
      />
    </ActivitiesStack.Navigator>
  );
}

// Create the Diet Stack Navigator
function  DietStackScreen() {
  return (
    <DietStack.Navigator>
      <DietStack.Screen
        name="Diet"
        component={DietScreen}
        options={({navigation}) => ({
          headerTitle: 'Diet',
          headerRight: () => (
            <Button
              title="Add"
              onPress={() => navigation.navigate('AddDiet')}
            />
          ),
        })}
      />
      <DietStack.Screen
        name="AddDiet"
        component={AddDietScreen}
        options={()=>({title: 'Add A Diet Entry',})}
      />
    </DietStack.Navigator>
  );
}

// Create the Settings Stack Navigator
function SettingsStackScreen() {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={() => ({title: 'Settings',
        })}
      />
    </SettingStack.Navigator>
  );
}

// Create the Tab Navigator
function NavigationTab() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen 
        name="ActivitiesStack"
        component={ActivitiesStackScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="directions-run" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen
        name="DietStack"
        component={DietStackScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="fastfood" color={color} size={size} />
          ),
        }}/>

      <Tab.Screen
        name="Settings"
        component={SettingsStackScreen} 
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default NavigationTab;
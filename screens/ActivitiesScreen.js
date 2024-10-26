import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { listenToCollection } from '../firebase/firebaseHelper';
import { useTheme } from '../components/ThemeContext';
import { globalStyles } from '../styles/globalStyles';
import ItemsList from '../components/ItemsList';

// The ActivitiesScreen
function ActivitiesScreen({ navigation }) {
  const [activities, setActivities] = useState([]);
  const { theme } = useTheme();
  const styles = globalStyles(theme);

  // Listen to the activities collection
  useEffect(() => {
    const unsubscribe = listenToCollection('activities', (docs) => {
      setActivities(docs);
    });

    return () => unsubscribe();
  }, []);

  // Handle the item press
  const handleItemPress = (activity) => {
    console.log('activity', activity);
    navigation.navigate('ActivityForm', { activity });
  };

  return (
    <View style={styles.container}>
      <ItemsList
        data={activities}
        onItemPress={handleItemPress}
      />
    </View>
  );
}

export default ActivitiesScreen;
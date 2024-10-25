import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { listenToCollection } from '../firebase/firebaseHelper';
import { useTheme } from '../components/ThemeContext';
import { globalStyles } from '../styles/globalStyles';
import ItemsList from '../components/ItemsList';

// The ActivitiesScreen
function ActivitiesScreen() {
  const [activities, setActivities] = useState([]);
  const { theme } = useTheme();
  const styles = globalStyles(theme);

  useEffect(() => {
    const unsubscribe = listenToCollection('activities', (docs) => {
      setActivities(docs);
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <ItemsList data={activities} />
    </View>
  );
}

export default ActivitiesScreen;
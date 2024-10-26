import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { listenToCollection } from '../firebase/firebaseHelper';
import { useTheme } from '../components/ThemeContext';
import { globalStyles } from '../styles/globalStyles';
import ItemsList from '../components/ItemsList';

// The DietScreen
function DietScreen({ navigation }) {
  const [diets, setDiets] = useState([]);
  const { theme } = useTheme();
  const styles = globalStyles(theme);

  // Listen to the diets collection
  useEffect(() => {
    const unsubscribe = listenToCollection('diets', (docs) => {
      setDiets(docs);
    });

    return () => unsubscribe();
  }, []);

    // Handle the item press
  const handleItemPress = (diet) => {
    console.log('diet', diet);
    navigation.navigate('DietForm', { diet });
  };

  return (
    <View style={styles.container}>
      <ItemsList
        data={diets}
        onItemPress={handleItemPress}
      />
    </View>
  );
}

export default DietScreen;
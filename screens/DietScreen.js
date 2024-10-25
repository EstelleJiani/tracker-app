import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { listenToCollection } from '../firebase/firebaseHelper';
import { useTheme } from '../components/ThemeContext';
import { globalStyles } from '../styles/globalStyles';
import ItemsList from '../components/ItemsList';

// The DietScreen
function DietScreen() {
  const [diets, setDiets] = useState([]);
  const { theme } = useTheme();
  const styles = globalStyles(theme);

  useEffect(() => {
    const unsubscribe = listenToCollection('diets', (docs) => {
      setDiets(docs);
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <ItemsList data={diets} />
    </View>
  );
}

export default DietScreen;
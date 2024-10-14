import { View } from 'react-native';
import { useData } from '../components/DataContext';
import { useTheme } from '../components/ThemeContext';
import { globalStyles } from '../styles/globalStyles';
import ItemsList from '../components/ItemsList';

function DietScreen() {
  const { diets } = useData();
  const { theme } = useTheme();
  const styles = globalStyles(theme);

  return (
    <View style={styles.container}>
      <ItemsList data={diets} />
    </View>
  );
}

export default DietScreen;
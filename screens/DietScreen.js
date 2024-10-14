import { useContext } from 'react';
import { View } from 'react-native';
import { DataContext } from '../components/DataContext';
import ItemsList from '../components/ItemsList';

function DietScreen() {
  const { diets } = useContext(DataContext);

  return (
    <View>
      <ItemsList data={diets} />
    </View>
  );
}

export default DietScreen;
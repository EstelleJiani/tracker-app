import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { DataContext } from '../components/DataContext';
import ItemsList from '../components/ItemsList';

function ActivitiesScreen() {
  const { activities } = useContext(DataContext);

  return (
    <View>
      <ItemsList data={activities} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ActivitiesScreen;
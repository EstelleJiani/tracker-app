import { FlatList } from 'react-native';
import Item from './Item';
import { useTheme } from './ThemeContext';
import { globalStyles } from '../styles/globalStyles';

function ItemsList({ data, onItemPress }) {
  const { theme } = useTheme();
  const styles = globalStyles(theme);

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <Item
          description={item.description}
          date={item.date}
          value={item.value}
          showIcon={item.showIcon}
          onPress={() => onItemPress(item)}
        />
      )}
      style={styles.list}
    />
  );
}

export default ItemsList;
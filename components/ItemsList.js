import { FlatList } from 'react-native';
import Item from './Item';
import { useTheme } from './ThemeContext';
import { globalStyles } from '../styles/globalStyles';

// Test data will be removed later
const dummyData = [
  {
    "date": new Date('2024-10-28T00:16:00.000Z'), 
    "description": "Hiking",
    "id": "1728865004162",
    "showIcon": true,
    "value": "67 min"
  },
  {
    "date": new Date('2024-10-23T00:16:00.000Z'),
    "description": "Cycling",
    "id": "1728865014396",
    "showIcon": false,
    "value": "15 min"
  },
  {
    "date": new Date('2024-10-10T00:15:00.000Z'),
    "description": "Weights",
    "id": "1728864915897",
    "showIcon": true,
    "value": "222 min"
  },
  {
    "date": new Date('2024-10-03T00:16:00.000Z'),
    "description": "Swimming",
    "id": "1728864982811",
    "showIcon": true,
    "value": "4545 min"
  },
  {
    "date": new Date('2024-10-02T00:17:00.000Z'),
    "description": "Swimming",
    "id": "1728865024545",
    "showIcon": false,
    "value": "42 min"
  },
  {
    "date": new Date('2024-10-01T00:16:00.000Z'),
    "description": "Yoga",
    "id": "1728864990297",
    "showIcon": false,
    "value": "22 min"
  }
];

function ItemsList({ data }) {
  const { theme } = useTheme();
  const styles = globalStyles(theme);

  return (
    <FlatList
      data={dummyData}  // TODO: Replaced dummyData with data
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <Item
          description={item.description}
          date={item.date}
          value={item.value}
          showIcon={item.showIcon}/>
      )}
      style={styles.list}
    />
  );
}

export default ItemsList;
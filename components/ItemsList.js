import { FlatList } from 'react-native'
import Item from './Item';

// Fake data for testing
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    description: 'First Item',
    date: 'Sun Oct 13 2024',
    value: '300',
    showIcon: true,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    description: 'Second Item',
    date: 'Sat Oct 12 2024',
    value: '20',
    showIcon: false,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    description: 'Third Item',
    date: 'Fri Oct 11 2024',
    value: '1 min',
    showIcon: true,
  },
];

function ItemsList() {
  return (
    <FlatList
      data={DATA}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <Item
          description={item.description}
          date={item.date}
          value={item.value}
          showIcon={item.showIcon}/>
      )}
    />
  );
}

export default ItemsList
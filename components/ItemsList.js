import { FlatList } from 'react-native'
import Item from './Item';

function ItemsList({ data }) {
  return (
    <FlatList
      data={data}
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
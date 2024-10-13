import { Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

// The Item component that makes up the list of items in the ActivityScreen and DietScreen.
function Item ({
  description,
  date,
  value,
  showIcon
}) {
  return (
    <View style ={{backgroundColor: 'cornflowerblue'}}>
      <Text>{description}</Text>
      {showIcon && (
        <Ionicons name="warning" size={24} color="#FFD700" />
      )}

      <View>
        <Text>{date}</Text>
      </View>

      <View>
        <Text>{value}</Text>
      </View>
  </View>
  );
}

export default Item;
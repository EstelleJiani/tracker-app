import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import React from 'react'

function Item ({
  description,
  date,
  value,
  showIcon
}) {
  return (
    <View style ={{ImageBackground: 'cornflowerblue'}}>
      <Text>{description}</Text>
      {showIcon && (
        <Ionicons name="warnig" size={24} color="#FFD700" />
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
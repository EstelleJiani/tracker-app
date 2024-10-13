import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ItemsList from '../components/ItemsList'

function ActivitiesScreen() {
  return (
    <View>
      <ItemsList/>
    </View>
  )
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
})

export default ActivitiesScreen;
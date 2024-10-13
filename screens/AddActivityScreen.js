import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Field from '../components/Field';
import FormActionButtons from '../components/FormActionButtons';


// Constants for the options in the activity dropdown
const activityOptions = [
  {label: 'Walking', value: 'walking'},
  {label: 'Running', value: 'running'},
  {label: 'Swimming', value: 'swimming'},
  {label: 'Weights', value: 'weights'},
  {label: 'Yoga', value: 'yoga'},
  {label: 'Cycling', value: 'cycling'},
  {label: 'Hiking', value: 'hiking'},
];

function AddActivityScreen() {
  return (
    <View>
      <Field
        label="Activity"
        required={true}
        type='dropdown'
        options={activityOptions}
      />
      <Field
        label="Duration (min)"
        required={true}
        type='text'
      />
      <Field
        label="Date"
        required={true}
        type='date'
      />
      <FormActionButtons/>
    </View>
  )
}

export default AddActivityScreen;
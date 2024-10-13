import { View } from 'react-native';
import Field from '../components/Field';
import FormActionButtons from '../components/FormActionButtons';


// Constants for the options in the activity dropdown
const activityOptions = [
  {label: 'Walking', value: 'Walking'},
  {label: 'Running', value: 'Running'},
  {label: 'Swimming', value: 'Swimming'},
  {label: 'Weights', value: 'Weights'},
  {label: 'Yoga', value: 'Yoga'},
  {label: 'Cycling', value: 'Cycling'},
  {label: 'Hiking', value: 'Hiking'},
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
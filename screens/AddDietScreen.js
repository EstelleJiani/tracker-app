import { View } from 'react-native'
import Field from '../components/Field';
import FormActionButtons from '../components/FormActionButtons';

function AddDietScreen() {
  return (
    <View>
      <Field
        label='Description'
        required={true}
        type='textarea'
      />
      <Field
        label='Calories'
        required={true}
        type='text'
      />
      <Field
        label='Date'
        required={true}
        type='date'
      />
      <FormActionButtons />
    </View>
  )
}

export default AddDietScreen;
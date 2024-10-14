import { useContext, useState } from 'react';
import { View } from 'react-native';
import { DataContext } from '../components/DataContext';
import Field from '../components/Field';
import FormActionButtons from '../components/FormActionButtons';


// The AddDietScreen 
function AddDietScreen({ navigation }) {
  const {addDiet} = useContext(DataContext);
  const [description, setDescription] = useState('');
  const [calories, setCalories] = useState('');
  const [date, setDate] = useState(null);

  // handleSave function
  const handleSave = () => {
    const newDiet = {
      id: Date.now().toString(),
      description,
      value: parseInt(calories),
      date,
      showIcon: calories > 800 ? true : false,
    };
    addDiet(newDiet);
    navigator.goBack();
  };

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
      <FormActionButtons onSave={handleSave}/>
    </View>
  );
}

export default AddDietScreen;
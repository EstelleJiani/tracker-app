import { useContext, useState } from 'react';
import { Alert, View } from 'react-native';
import { DataContext } from '../components/DataContext';
import Field from '../components/Field';
import FormActionButtons from '../components/FormActionButtons';


// The AddDietScreen 
function AddDietScreen({ navigation }) {
  const { addDiet } = useContext(DataContext);
  const [description, setDescription] = useState('');
  const [calories, setCalories] = useState('');
  const [date, setDate] = useState(null);

  const validateForm = () => {
    if (!description || !calories || !date) {
      return false;
    }
    if (isNaN(calories) || parseInt(calories) <= 0) {
      return false;
    }

    return true;
  }

  // handleSave function
  const handleSave = () => {
    if (!validateForm()) {
      Alert.alert('Invalid input','Please check your input values');
      return;
    }

    const newDiet = {
      id: Date.now().toString(),
      description,
      value: parseInt(calories),
      date,
      showIcon: parseInt(calories) > 800 ? true : false,
    };
    addDiet(newDiet);
    navigation.goBack();
  };

  return (
    <View>
      <Field
        label='Description'
        required={true}
        type='textarea'
        value={description}
        onChange={setDescription}
      />
      <Field
        label='Calories'
        required={true}
        type='text'
        value={calories}
        onChange={setCalories}
      />
      <Field
        label='Date'
        required={true}
        type='date'
        value={date}
        onChange={setDate}
      />
      <FormActionButtons onSave={handleSave} />
    </View>
  );
}

export default AddDietScreen;
import { useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { useData } from '../components/DataContext';
import { useTheme } from '../components/ThemeContext';
import { globalStyles } from '../styles/globalStyles';
import Field from '../components/Field';
import FormActionButtons from '../components/FormActionButtons';


// The AddDietScreen 
function AddDietScreen({ navigation }) {
  const { addDiet } = useData();
  const { theme } = useTheme();
  const styles = globalStyles(theme);

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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.formFieldsContainer}>
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
          </View>
          <View style={styles.buttonsContainer}>
            <FormActionButtons onSave={handleSave} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default AddDietScreen;
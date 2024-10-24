import { useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useData } from '../components/DataContext';
import { useTheme } from '../components/ThemeContext';
import { globalStyles } from '../styles/globalStyles';
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

// addActivity function
function AddActivityScreen({ navigation }) {
  const { addActivity } = useData();
  const { theme } = useTheme();
  const styles = globalStyles(theme);

  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(null);

  const validateForm = () => {
    if (!description || !duration || !date) {
      return false;
    }
    if (isNaN(duration) || parseInt(duration) <= 0) {
      return false;
    }

    return true;
  }

  const handleSave = async () => {
    if (!validateForm()) {
      Alert.alert('Invalid input','Please check your input values');
      return;
    }

    const newActivity = {
      id: Date.now().toString(),
      description,                          // Activity
      value: duration.toString() + " min",  // Duration
      date,
      showIcon: parseInt(duration) > 60 && (
        description === 'Running' ||
        description === 'Weights'
      ) ? true : false,
    };

    // Add Activity to Firestore
    try {
      await addActivity(newActivity);
      navigation.goBack();
    } catch (error) {
      console.error('Error adding activity: ', error);
    }
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
              label='Activity'
              required={true}
              type='dropdown'
              options={activityOptions}
              value={description}
              onChange={setDescription}
            />
            <Field
              label='Duration (min)'
              required={true}
              type='text'
              value={duration}
              onChange={setDuration}
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

export default AddActivityScreen;
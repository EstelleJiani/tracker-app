import { useEffect, useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  deleteFromDatabase,
  updateInDatabase,
  writeToDatabase,
} from '../firebase/firebaseHelper';
import { useTheme } from '../components/ThemeContext';
import { globalStyles } from '../styles/globalStyles';
import IconButton from '../components/IconButton';
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

// The ActivityFormScreen
function ActivityFormScreen({ navigation, route }) {
  const { theme } = useTheme();
  const styles = globalStyles(theme);

  // Get the activity from the route params
  const activity = route.params?.activity;
  const isEditMode = !!activity;

  // Initialize the state variables
  const [description, setDescription] = useState(activity?.description || '');
  const [duration, setDuration] = useState(activity?.value?.split(' ')[0] || '');
  const [date, setDate] = useState(activity?.date || null);

  useEffect(() => {
    navigation.setOptions({
      title: isEditMode ? 'Edit' : 'Add An Activity',
      headerRight: isEditMode ? () => (
        <IconButton
          type='delete'
          onPress={handleDelete}
        />
      ) : undefined,
    });
  }, [navigation, isEditMode]);

  // Validate the form
  const validateForm = () => {
    if (!description || !duration || !date) {
      return false;
    }
    if (isNaN(duration) || parseInt(duration) <= 0) {
      return false;
    }

    return true;
  }

  // Handle the save button press
  const handleSave = async () => {
    if (!validateForm()) {
      Alert.alert('Invalid input','Please check your input values');
      return;
    }

    const activityData = {
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
      if (isEditMode) {
        await updateInDatabase('activities', activity.id, activityData);
      } else {
        await writeToDatabase('activities', activityData);
      }
      navigation.goBack();
    } catch (error) {
      console.error('Error adding activity: ', error);
    }
  };

  // Handle the delete button press
  const handleDelete = async () => {
    try {
      await deleteFromDatabase('activities', activity.id);
      navigation.goBack();
    } catch (error) {
      console.error('Error deleting activity: ', error);
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

export default ActivityFormScreen;
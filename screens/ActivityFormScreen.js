import { useEffect, useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Checkbox from 'expo-checkbox';
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

  // State variable for the ignore special checkbox
  const [ignoreSpecial, setIgnoreSpecial] = useState(false);

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

    // Create the activity data object
    const activityData = {
      description,                          // Activity
      value: duration.toString() + " min",  // Duration
      date,
      showIcon: parseInt(duration) > 60 && (
        description === 'Running' ||
        description === 'Weights'
      ),
    };

    // Add or update the activity in Firestore
    try {
      if (isEditMode) {
        Alert.alert('Important', 'Are you sure you want to save these changes?', [
          { text: 'No' },
          { text: 'Yes', onPress: async () => {
            if (activityData.showIcon && ignoreSpecial) {
              activityData.showIcon = false;
            }
            await updateInDatabase('activities', activity.id, activityData);
            navigation.goBack();
          }},
        ]);
      } else {
        await writeToDatabase('activities', activityData);
        navigation.goBack();
      }
    } catch (error) {
      console.error('Error adding activity: ', error);
    }
  };

  // Handle the delete button press
  const handleDelete = async () => {
    Alert.alert('Delete', 'Are you sure you want to delete this item?', [
      { text: 'No' },
      { text: 'Yes', onPress: () => handleDeleteConfirmed() },
    ]);
  };

  // Handle the delete confirmed button press
  const handleDeleteConfirmed = async () => {
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

          <View style={{ flex: 1 }} />

          {(isEditMode && activity?.showIcon) && (
            <View style={styles.ignoreSpecialCheckboxContainer}>
              <Text style={styles.ignoreSpecialCheckboxText}>
                This item is marked as special. Select the checkbox if you would like to approve it.
              </Text>
              <Checkbox
                value={ignoreSpecial}
                onValueChange={setIgnoreSpecial}
              />
            </View>
          )}

          <View style={styles.buttonsContainer}>
            <FormActionButtons onSave={handleSave} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default ActivityFormScreen;
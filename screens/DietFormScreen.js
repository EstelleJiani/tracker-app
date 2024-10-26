import { useEffect, useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableWithoutFeedback,
  View
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

// The DietFormScreen
function DietFormScreen({ navigation, route }) {
  const { theme } = useTheme();
  const styles = globalStyles(theme);

  // Get the diet from the route params
  const diet = route.params?.diet;
  const isEditMode = !!diet;

  // Initialize the state variables
  const [description, setDescription] = useState(diet?.description || '');
  const [calories, setCalories] = useState(diet?.value?.toString() || '');
  const [date, setDate] = useState(diet?.date || null);

  // State variable for the ignore special checkbox
  const [ignoreSpecial, setIgnoreSpecial] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      title: isEditMode ? 'Edit' : 'Add A Diet Entry',
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
    if (!description || !calories || !date) {
      return false;
    }
    if (isNaN(calories) || parseInt(calories) <= 0) {
      return false;
    }

    return true;
  }

  // handleSave function
  const handleSave = async () => {
    if (!validateForm()) {
      Alert.alert('Invalid input','Please check your input values');
      return;
    }

    // Create the diet data object
    const dietData = {
      description,
      value: parseInt(calories),
      date,
      showIcon: parseInt(calories) > 800,
    };

    // Add Diet to Firestore
    try {
      if (isEditMode) {
        Alert.alert('Important', 'Are you sure you want to save these changes?', [
          { text: 'No' },
          { text: 'Yes', onPress: async () => {
            if (dietData.showIcon && ignoreSpecial) {
              dietData.showIcon = false;
            }
            await updateInDatabase('diets', diet.id, dietData);
            navigation.goBack();
          }},
        ]);
      } else {
        await writeToDatabase('diets', dietData);
        navigation.goBack();
      }
    } catch (error) {
      console.error('Error adding diet: ', error);
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
      await deleteFromDatabase('diets', diet.id);
      navigation.goBack();
    } catch (error) {
      console.error('Error deleting diet: ', error);
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

          {(isEditMode && diet?.showIcon) && (
            <View>
              <Text>
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

export default DietFormScreen;
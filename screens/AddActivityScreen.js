import { useContext, useState } from 'react';
import { Alert, View } from 'react-native';
import { DataContext } from '../components/DataContext';
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
  const { addActivity } = useContext(DataContext);
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

  const handleSave = () => {
    if (!validateForm()) {
      Alert.alert('Invalid input','Please check your input values');
      return;
    }

    const newActivity = {
      id: Date.now().toString(),
      description,                          // Activity
      value: duration.toString() + " min",  // Duration
      date,
      showIcon: duration > 60 ? true : false,
    };
    addActivity(newActivity);
    navigation.goBack();
  };

  return (
    <View>
      <Field
        label="Activity"
        required={true}
        type='dropdown'
        options={activityOptions}
        value={description}
        onChange={setDescription}
      />
      <Field
        label="Duration (min)"
        required={true}
        type='text'
        value={duration}
        onChange={setDuration}
      />
      <Field
        label="Date"
        required={true}
        type='date'
        value={date}
        onChange={setDate}
      />
      <FormActionButtons onSave={handleSave} />
    </View>
  );
}

export default AddActivityScreen;
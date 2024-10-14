import { Alert, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function FormActionButtons({ onSave }) {
  const navigation = useNavigation();

  const handleCancel = () => {
    Alert.alert(
      'Confirm Cancel',
      'Are you sure you want to cancel? Unsaved changes will be lost.',
      [
        { text: 'No', style: 'cancel' },
        { text: 'Yes', onPress: () => navigation.goBack() },
      ]
    );
  }

  return (
    <View>
      <Button
        title='Cancel'
        onPress={handleCancel}
      />
      <Button
        title='Save'
        onPress={onSave}
      />
    </View>
  );
}

export default FormActionButtons;
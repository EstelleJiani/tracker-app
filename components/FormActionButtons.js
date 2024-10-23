import { Alert, Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from './ThemeContext';
import { globalStyles } from '../styles/globalStyles';

function FormActionButtons({ onSave }) {
  const { theme } = useTheme();
  const styles = globalStyles(theme);

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
    <View style={styles.formActionButtonsContainer}>
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
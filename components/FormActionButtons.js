import { View, Button } from 'react-native'
import {useNavigation} from '@react-navigation/native';

function FormActionButtons({ onSave }) {
  
  const navigation = useNavigation();

  const handleCancel = () => {
    navigation.goBack();
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
import { View, Button } from 'react-native'

function FormActionButtons({ onCancel, onSave }) {
  return (
    <View>
      <Button
        title='Cancel'
        onPress={onCancel}
      />
      <Button
        title='Save'
        onPress={onSave}
      />
    </View>
  );
}

export default FormActionButtons;
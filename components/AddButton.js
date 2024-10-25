import { View } from 'react-native';  
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useTheme } from './ThemeContext';
import { globalStyles } from '../styles/globalStyles';
import PressableButton from './PressableButton';

// The AddButton component
function AddButton({ onPress, iconName, color }) {
  const { theme } = useTheme();
  const styles = globalStyles(theme);

  return (
    <PressableButton
      onPress={onPress}
    >
      <View style={styles.addButtonContainer}>
        <MaterialIcons name="add" size={24} color={color} />
        <MaterialIcons name={iconName} size={24} color={color} />
      </View>
    </PressableButton>
  );
}

export default AddButton;

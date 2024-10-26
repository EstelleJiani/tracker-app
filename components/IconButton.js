import { View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useTheme } from './ThemeContext';
import { globalStyles } from '../styles/globalStyles';
import PressableButton from './PressableButton';

// The IconButton component
function IconButton({ onPress, type, color }) {
  const { theme } = useTheme();
  const styles = globalStyles(theme);

  const renderIcon = () => {
    switch (type) {
      case 'addActivity':
        return (
          <>
            <MaterialIcons name='add' size={24} color={color} />
            <MaterialIcons name='directions-run' size={24} color={color} />
          </>
        );
      case 'addDiet':
        return (
          <>
            <MaterialIcons name='add' size={24} color={color} />
            <MaterialIcons name='fastfood' size={24} color={color} />
          </>
        );
      case 'delete':
        return <Ionicons name='trash' size={24} color={color} />;
    }
  };

  return (
    <PressableButton
      onPress={onPress}
    >
      <View style={styles.iconButtonContainer}>
        {renderIcon()}
      </View>
    </PressableButton>
  );
}

export default IconButton;

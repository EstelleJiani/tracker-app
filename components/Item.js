import { Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme } from './ThemeContext';
import { globalStyles } from '../styles/globalStyles';
import PressableButton from './PressableButton';

// The Item component that makes up the list of items in the ActivityScreen and DietScreen.
function Item ({
  description,
  date,
  value,
  showIcon,
  onPress
}) {
  const { theme } = useTheme();
  const styles = globalStyles(theme);

  return (
    <PressableButton
      onPress={onPress}
      style={styles.item}
    >
      <Text style={styles.itemTitle}>{description}</Text>
      <View style={styles.itemDetailsContainer}>
        {showIcon && (
          <Ionicons name="warning" size={24} color={theme.warningIconColor} />
        )}
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemText}>{date.toDate().toDateString()}</Text>
        </View>
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemText}>{value}</Text>
        </View>
      </View>
    </PressableButton>
  );
}

export default Item;
import { View } from 'react-native';
import { useTheme } from '../components/ThemeContext';
import { globalStyles } from '../styles/globalStyles';
import StandardButton from '../components/StandardButton';

function SettingsScreen() {
  const { theme, toggleTheme } = useTheme();
  const styles = globalStyles(theme);

  return (
    <View style={styles.container}>
      <StandardButton
        title="Toggle Theme"
        onPress={toggleTheme}
      />
    </View>
  );
}

export default SettingsScreen;
import { Button, View } from 'react-native';
import { useTheme } from '../components/ThemeContext';
import { globalStyles } from '../styles/globalStyles';

function SettingsScreen() {
  const { theme, toggleTheme } = useTheme();
  const styles = globalStyles(theme);

  return (
    <View style={styles.container}>
      <Button
        title='Toggle Theme'
        onPress={toggleTheme}
        style={styles.button}
      />
    </View>
  );
}

export default SettingsScreen;
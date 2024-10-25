import { Text } from "react-native";
import { useTheme } from "./ThemeContext";
import { globalStyles } from "../styles/globalStyles";
import PressableButton from "./PressableButton";

// The StandardButton component
function StandardButton({
  onPress,
  title,
  variant = 'primary',
  disabled = false,
}) {
  const { theme } = useTheme();
  const styles = globalStyles(theme);

  return (
    <PressableButton
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.standardButton,
        styles[`standardButton${variant}`],
        disabled && styles.standardButtonDisabled,
      ]}
    >
      <Text style={styles.standardButtonText}>
        {title}
      </Text>
    </PressableButton>
  );
}

export default StandardButton;

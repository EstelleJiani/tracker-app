import { Pressable } from "react-native";
import { useTheme } from "./ThemeContext";
import { globalStyles } from "../styles/globalStyles";

function PressableButton({
  children,
  onPress,
  variant = 'primary',
  disabled = false
}) {
  const { theme } = useTheme();
  const styles = globalStyles(theme);

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.pressableButton,
        styles[`pressableButton${variant}`],
        pressed && styles.pressableButtonPressed,
        disabled && styles.pressableButtonDisabled,
      ]}
    >
      {children}
    </Pressable>
  );
}

export default PressableButton;
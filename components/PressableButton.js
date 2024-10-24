import { Pressable } from "react-native";
import { useTheme } from "./ThemeContext";
import { globalStyles } from "../styles/globalStyles";

function PressableButton({
  onPress,
  disabled = false,
  style = {},
  children,
}) {
  const { theme } = useTheme();
  const styles = globalStyles(theme);

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.pressableButton,
        pressed && !disabled && styles.pressableButtonPressed,
        style,
      ]}
    >
      {children}
    </Pressable>
  );
}

export default PressableButton;
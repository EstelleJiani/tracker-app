import { Pressable } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useTheme } from "./ThemeContext";
import { globalStyles } from "../styles/globalStyles";

function AddButton({ onPress, iconName, color }) {
  const { theme } = useTheme();
  const styles = globalStyles(theme);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.addButton,
        { opacity: pressed ? 0.5 : 1 }
      ]}
      onPress={onPress}
    >
      <MaterialIcons name="add" size={24} color={color} />
      <MaterialIcons name={iconName} size={24} color={color} />
    </Pressable>
  );
}

export default AddButton;

import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useTheme } from './ThemeContext';
import { globalStyles } from '../styles/globalStyles';

function Field({
  label,
  required = false,
  type = 'text',  // or 'textarea', 'select', 'date'
  options = [],   // {label: 'Label', value: 'value'}
  value,
  onChange,
}) {

  const { theme } = useTheme();
  const styles = globalStyles(theme);

  // Activities (DropDownPicker) state
  const [dropDownOpen, setDropDownOpen] = useState(false);

  // Date (DateTimePicker) state
  const [showDateTimePicker, setShowDateTimePicker] = useState(false)

  // Handle date change
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowDateTimePicker(false);
    onChange && onChange(currentDate);
  };

  // Show date picker
  const showDatePicker = () => {
    setShowDateTimePicker(true);
  }

  // Render input field based on type
  const renderInputField = () => {
    switch (type) {
      case 'text':
        return (
          <TextInput
            value={value}
            onChangeText={onChange}
            style={styles.input}
          />
        );
      case 'textarea':
        return (
          <TextInput
            value={value}
            onChangeText={onChange}
            multiline={true}
            style={styles.inputArea}
          />
        );
      case 'dropdown':
        return (
          <DropDownPicker
            open={dropDownOpen}
            value={value}
            items={options}
            setOpen={setDropDownOpen}
            setValue={(callback) => onChange(callback())}
          />
        );
      case 'date':
        return (
          <>
          <TextInput 
            value={value && value.toDateString()}
            onPressIn={showDatePicker}
            style={styles.input}
          />
          {showDateTimePicker && (
            <DateTimePicker
              value={value || new Date()}
              display='inline'
              onChange={onChangeDate}
            />
          )}
          </>
        );
      default:
        return null;
    }
  }

  // Render the field
  return (
    <>
      <Text style={styles.label}>{label}{required && ' *'}</Text>
      {renderInputField()}
      <View style={styles.divider} />
    </>
  );
}

export default Field;
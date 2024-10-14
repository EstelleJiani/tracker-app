import { useState } from 'react';
import { Text, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

function Field({
  label,
  required = false,
  type = 'text',  // or 'textarea', 'select', 'date'
  options = [],   // {label: 'Label', value: 'value'}
  value,
  onChange,
}) {

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
          />
        );
      case 'textarea':
        return (
          <TextInput
            value={value}
            onChangeText={onChange}
            multiline={true}
            style={{height: 100, textAlignVertical: 'top',}}
          />
        );
      case 'dropdown':
        return (
          <DropDownPicker
            open={dropDownOpen}
            value={value}
            items={options}
            setOpen={setDropDownOpen}
            setValue={(callback)=>onChange(callback())}
          />
        );
      case 'date':
        return (
          <>
          <TextInput 
            value={value && value.toDateString()}
            onPressIn={showDatePicker}/>
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
    <Text>{label}{required && ' *'}</Text>
    {renderInputField()}
    </>
  );
}

export default Field;
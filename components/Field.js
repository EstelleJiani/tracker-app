import { StyleSheet, Text, TextInput, View } from 'react-native'
import { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import DateTiemPicker from '@react-native-community/datetimepicker'

function Field({
  label,
  required=false,
  type='text', // or 'textarea', 'select', 'date'
  options=[], // {label: 'Label', value: 'value'}
  value,
  onChange,
}) {

  // Activities (DropDownPicker) state
  const [dropDownOpen, setDropDownOpen] = useState(false)
  const [dropDownValue, setDropDownValue] = useState(value)

  // Date (DateTimePicker) state
  const [date, setDate] = useState(null)
  const [showDateTimePicker, setShowDateTimePicker] = useState(false)

  // Handle date change
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowDateTimePicker(false);
    setDate(currentDate);
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
          <TextInput/>
        );
      case 'textarea':
        return (
          <TextInput multiline={true} style={{height: 100, textAlignVertical: 'top',}} />
        );
      case 'dropdown':
        return (
          <DropDownPicker
            open={dropDownOpen}
            value={dropDownValue}
            items={options}
            setOpen={setDropDownOpen}
            setValue={setDropDownValue}
          />
        );
      case 'date':
        return (
          <>
          <TextInput 
            value={date && date.toDateString()}
            onPressIn={showDatePicker}/>
            {showDateTimePicker && (
              <DateTiemPicker
                value={date || new Date()}
                mode='date'
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
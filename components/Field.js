import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
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
  const [dropDownValue, setDropDownValue] = useState(null)

  // Date (DateTimePicker) state
  const [date, setDate] = useState(null)
  const [showDateTimePicker, setShowDateTimePicker] = useState(false)

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowDateTimePicker(false);
    setDate(currentDate);
    onChange && onChange(currentDate);
  };

  const showDatePicker = () => {
    setShowDateTimePicker(true);
  }

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
              <DateTimePicker
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

  return (
    <>
    <Text>{label}{required && ' *'}</Text>
    {renderInputField()}
    </>
  );
}

export default Field;
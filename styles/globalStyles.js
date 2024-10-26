import { StyleSheet } from "react-native";

export const globalStyles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: theme.buttonBackground,
    color: theme.buttonText,
  },

  // List styles
  list: {
    width: '100%',
    paddingVertical: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    backgroundColor: theme.itemCardBackground,
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 3,
    shadowColor: theme.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  itemTitle: {
    color: theme.text,
    fontWeight: 'bold',
  },
  itemDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTextContainer: {
    backgroundColor: theme.itemTextContainerBackground,
    padding: 8,
    marginLeft: 10,
    borderRadius: 10,
    minWidth: 80,
    alignItems: 'center',
  },
  itemText: {
    color: theme.text,
  },

  // Form styles
  inner: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
  },
  formFieldsContainer: {
    paddingHorizontal: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  formActionButtonsContainer: {
    flex: 1,
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  divider: {
    marginBottom: 20,
  },
  label: {
    color: theme.text,
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    minHeight: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.borderColor,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: theme.inputBackground,
    color: theme.inputTextColor,
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    textAlignVertical: 'top',
    width: '100%',
    height: 100,
    minHeight: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.borderColor,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: theme.inputBackground,
    color: theme.inputTextColor,
  },

  // PressableButton styles
  pressableButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressableButtonPressed: {
    opacity: 0.7,
  },

  // StandardButton styles
  standardButton: {
    backgroundColor: theme.buttonBackground,
    paddingHorizontal: 10,
    height: 48,
    borderRadius: 8,
    marginVertical: 8,
  },
  standardButtonPrimary: {
    // backgroundColor: theme.buttonPrimaryBackground,
  },
  standardButtonSecondary: {
    // backgroundColor: theme.buttonSecondaryBackground,
  },
  standardButtonDisabled: {
    opacity: 0.5,
  },
  standardButtonText: {
    color: theme.buttonText,
    fontWeight: '500',
  },

  // IconButton styles
  iconButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

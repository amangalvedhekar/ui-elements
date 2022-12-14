import {KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Button, useForm, useFormDispatch, Text} from '../src';
import {RootTabScreenProps} from '../types';
import {ElementType, FormElement} from "../src/contexts/form/types";

const formData: FormElement[] = [
  {
    key: 'fName',
    label: 'Name',
    type: ElementType.INPUT,
    fieldData: {
      defaultValue: '',
      isRequired: true,
    },
    inputProps: {
      placeholder: 'first name',
      returnKeyType: 'next',
      textContentType: 'givenName',
      keyboardType:'default',
    }
  },
  {key: 'lName', label: '', type: ElementType.INPUT, fieldData: {},  inputProps: {
      placeholder: 'last name',
      returnKeyType: 'next',
      textContentType: 'familyName',
      keyboardType:'default',
    }},
  {key: 'phoneNumber', label: 'Phone Number', type:ElementType.INPUT, fieldData: {isRequired: true},  inputProps: {
      placeholder: '+15555555555',
      returnKeyType: 'next',
      textContentType: 'telephoneNumber',
      keyboardType:'numeric',
    }},
  {key: 'email', label: 'Email', type:ElementType.INPUT, fieldData: {isRequired: true},  inputProps: {
      placeholder: 'some@sample.com',
      returnKeyType: 'next',
      textContentType: 'emailAddress',
      keyboardType:'email-address',
    }},

  {key: 'address', label: 'Address', type:ElementType.INPUT, fieldData: {isRequired: true},  inputProps: {
      placeholder: 'current address',
      returnKeyType: 'go',
      textContentType: 'fullStreetAddress',
      keyboardType:'default',
    }},
  // {key: 'accountType', label: 'Account Type', type:ElementType.DROPDOWN, fieldData: {
  //
  //   },  inputProps: {
  //     placeholder: 'Please Select'
  //   }},
  // {key: 'accountCategory', label: 'Account Category', type:ElementType.RADIO, fieldData: {}},
  // {key: 'accountSomething', label: 'Account Something', type:ElementType.CHECKBOX, fieldData: {}},
];
// const atomsList = ['Button', 'CheckBox', 'DropDown', 'Form', 'Input', 'RadioButton', 'Typography'];
export default function TabOneScreen() {
  const x = useFormDispatch(formData);
  const y = useForm();

  return (
      <Text textType='regular'>Some information not related to form</Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Cairo-ExtraLight'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    borderWidth: StyleSheet.hairlineWidth,
  },
});

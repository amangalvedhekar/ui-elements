import {StyleSheet, View} from 'react-native';
import {Button, useForm, useFormDispatch} from '../src';
import {RootTabScreenProps} from '../types';
import {ElementType, FormElement} from "../src/contexts/form/types";

const formData: FormElement[] = [
  {
    key: 'fName',
    label: 'Name',
    type: ElementType.INPUT,
    fieldData: {
      defaultValue: 'did i show up',
    },
  },
  {key: 'lName', label: '', type: ElementType.INPUT, fieldData: {}},
  {key: 'phoneNumber', label: 'Phone Number', type:ElementType.INPUT, fieldData: {}},
  {key: 'accountType', label: 'Account Type', type:ElementType.DROPDOWN, fieldData: {}},
  {key: 'accountCategory', label: 'Account Category', type:ElementType.RADIO, fieldData: {}},
  {key: 'accountSomething', label: 'Account Something', type:ElementType.CHECKBOX, fieldData: {}},
];
// const atomsList = ['Button', 'CheckBox', 'DropDown', 'Form', 'Input', 'RadioButton', 'Typography'];
export default function TabOneScreen({navigation}: RootTabScreenProps<'Atoms'>) {
  const x = useFormDispatch(formData);
  const y = useForm();

  return (
    <View style={{margin: 8}}>
      {/*{atomsList.map((atom) => (*/}
      {/*  <React.Fragment key={atom}>*/}
      {/*    <Text>{atom}</Text>*/}
      {/*    <View style={styles.separator}/>*/}
      {/*  </React.Fragment>*/}
      {/*))}*/}
    </View>
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

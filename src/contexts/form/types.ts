import {TextInputProps} from "react-native";

export enum ElementType {
  INPUT = 'INPUT',
  RADIO = 'RADIO',
  CHECKBOX = 'CHECKBOX',
  DROPDOWN = 'DROPDOWN'
}
export enum ReducerActionType {
  LOAD_FORM = 'LOAD_FORM',
  ON_CHANGE = 'ON_CHANGE',
  ON_BLUR = 'ON_BLUR',
  ON_SUBMIT = 'ON_SUBMIT',
  RESET = 'RESET',
}
// export type TextInput = typeof TextInputProps
export enum ReducerActionType {

}

export interface FormElement {
  key: string;
  label?: string;
  type: ElementType;
  fieldData: {
    isDisabled?: boolean;
    defaultValue?: any;
    isRequired?: boolean;
    errorMessage?: string;
    validate?: (input: string) => boolean;
    isVisible?: boolean;
  }
  inputProps?: TextInputProps
}

export interface FormState {
  key: string;
  value: string | Record<any, any> | boolean;
  isDisabled?: boolean;
  isVisible?: boolean;
  isRequired?: boolean;
  errorMessage?: string;
}
/*
* const state = {
* fname: {},
* lname: {}
* }
* */

import {createContext, useContext, useEffect, useReducer} from "react";
import {TextInput, View} from "react-native";
import {Button, Text} from "../../atoms";
import {ReducerActionType} from "./types";

const FormContext = createContext({fieldsState: {}, form: []});
const FormDispatchContext = createContext(null);
const defaultFieldData = {
  isDisabled: false,
  defaultValue: '',
  isRequired: false,
  errorMessage: 'This field is required',
  validate: (input: string) => {
  },
  isVisible: true,
}

function formReducer(state, action) {
  switch (action.type) {
    case ReducerActionType.LOAD_FORM:
      const fieldsState = action.payload.reduce((acc, elm) => ({
        ...acc,
        [elm.key]: {
          value: elm?.fieldData?.defaultValue ?? defaultFieldData.defaultValue,
          isDisabled: elm?.fieldData?.isDisabled ?? defaultFieldData.isDisabled,
          isRequired: elm?.fieldData?.isRequired ?? defaultFieldData.isRequired,
          errorMessage: elm?.fieldData?.errorMessage ?? defaultFieldData.errorMessage,
          isVisible: elm?.fieldData?.isVisible ?? defaultFieldData.isVisible,
          isInErrorState: false,
        },
      }), {});
      return {
        ...state,
        fieldsState,
        form: [...action.payload]
      };
    case ReducerActionType.ON_CHANGE:
      return {
        ...state,
        fieldsState: {
          ...state.fieldsState,
          [action.payload.field]: {
            ...state.fieldsState[action.payload.field],
            value: action.payload.text
          }
        }
      };
  }
}

function FormProvider({children}: any) {
  const [formState, formDispatch] = useReducer(formReducer, {fieldsState: {}, form: []});

  return (
    <FormDispatchContext.Provider value={formDispatch}>
      <FormContext.Provider value={formState}>
        <View style={{
          marginHorizontal: 16
        }}>
          {formState.form?.map(x => (
            <View key={x.key} style={{padding: 8}}>
              {x.label !== '' && <Text style={{marginVertical: 8}}>{x.label}{formState.fieldsState[x.key]?.isRequired ? ' * ': ''}</Text>}
              <TextInput
                style={{borderRadius: 16, borderWidth: 1, height: 40, padding: 8}}
                value={formState.fieldsState[x.key]?.value}
                onChangeText={(text) => formDispatch({
                  type: ReducerActionType.ON_CHANGE,
                  payload: {text, field: x.key}
                })}
                {...x.inputProps}
              />
              {formState.fieldsState[x.key]?.isInErrorState && (
                <Text textColor='error'>{formState.fieldsState[x.key]?.errorMessage}</Text>)}
            </View>))}
          <Button label="Submit" disabled={true}/>
          {children}
        </View>
      </FormContext.Provider>
    </FormDispatchContext.Provider>
  );
}


function useForm() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error(
      'form hook can only be used as a child of FormContext',
    );
  }
  return context;
}

function useFormDispatch(args) {
  const context = useContext(FormDispatchContext);
  useEffect(() => {
    context({type: 'LOAD_FORM', payload: args});
  }, [])

  if (context === undefined || args === undefined) {
    throw new Error(
      'form dispatch hook can only be used as a child of FormDispatchContext',
    );
  }
  return context;
}

export {
  FormProvider,
  useForm,
  useFormDispatch,
};

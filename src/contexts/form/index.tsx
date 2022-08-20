import {createContext, useContext, useEffect, useReducer} from "react";
import {View} from "react-native";
import {Button, Text, Input} from "../../atoms";
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
            value: action.payload.text,
            isInErrorState: action.payload.text === '' ? true : false,
          }
        }
      };
    case ReducerActionType.ON_BLUR:
      return {
        ...state,
        fieldsState: {
          ...state.fieldsState,
          [action.payload.field]: {
            ...state.fieldsState[action.payload.field],
            isInErrorState: state.fieldsState[action.payload.field].value === '' ? true : false,
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
          marginHorizontal: 16,
          justifyContent: 'center',
          flex: 1,
        }}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            {formState.form?.map((x, idx) => (
              <View key={x.key} style={{padding: 8}}>
                {x.label !== '' && <Text
                    style={{marginVertical: 8}}>{x.label}{formState.fieldsState[x.key]?.isRequired ? ' * ' : ''}</Text>}
                <Input
                  isInErrorState={formState.fieldsState[x.key]?.isInErrorState}
                  value={formState.fieldsState[x.key]?.value}
                  onChangeText={(text) => formDispatch({
                    type: ReducerActionType.ON_CHANGE,
                    payload: {text, field: x.key}
                  })}
                  onBlur={() => formDispatch({
                    type: ReducerActionType.ON_BLUR,
                    payload: {
                      field: x.key,
                    }
                  })}
                  autoFocus={idx === 0}
                  testID={`${x.key}-input-field`}
                  {...x.inputProps}
                />
                {formState.fieldsState[x.key]?.isInErrorState && (
                  <Text textColor='error'>{formState.fieldsState[x.key]?.errorMessage}</Text>)}
              </View>))}
            <View style={{paddingTop: 16}}>
              <Button label="Submit"/>
            </View>

            {children}
          </View>
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

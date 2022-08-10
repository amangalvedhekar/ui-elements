# Form Context
- Reusable form component with built-in validations

## Data Structure
```ts
interface Element {
  key: string;
  elementProps: {
    isDisabled: boolean;
    isRequired: boolean;
    errorMessage?: string;
    validate: (input: string) => boolean;
    
  }
}
```
```ts
interface FormElementState {
  key: string;
  value: string;
  isDirty: boolean;
  isDisabled: boolean;
  
}
```
## Usage

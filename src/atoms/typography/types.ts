import { TextProps, TextStyle} from "react-native";
import React from "react";
export interface CustomTextProps extends TextProps{
  children: string | React.ReactNode;
  textType?: 'regular' | 'medium' | 'light' | 'thin' | 'heading';
  textColor?:
    | 'primary'
    | 'secondary'
    | 'disabled'
    | 'inverse'
    | 'error'
    | 'success';
  style?: TextStyle;
}

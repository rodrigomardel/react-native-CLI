declare module 'react-native' {
  import * as React from 'react';
  
  export interface ViewProps {
    children?: React.ReactNode;
    style?: any;
    [key: string]: any;
  }
  
  export interface TextProps {
    children?: React.ReactNode;
    style?: any;
    [key: string]: any;
  }
  
  export const View: React.ComponentType<ViewProps>;
  export const Text: React.ComponentType<TextProps>;
  export const StatusBar: React.ComponentType<any>;
}

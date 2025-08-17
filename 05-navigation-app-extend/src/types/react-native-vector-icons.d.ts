declare module 'react-native-vector-icons/FontAwesome6' {
  import { Component } from 'react';
  import { TextProps } from 'react-native';

  interface FontAwesome6Props extends TextProps {
    name: string;
    size?: number;
    color?: string;
    solid?: boolean;
  }

  export default class FontAwesome6 extends Component<FontAwesome6Props> {}
}


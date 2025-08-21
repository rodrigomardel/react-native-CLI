import { FontAwesome6 } from "@react-native-vector-icons/fontawesome6";

interface IonIconProps {
  name: any;
  size: number;
  color: string;
  iconStyle: 'solid' | 'regular' | 'brand';
} 

export const IonIcon = ({ name, size, color, iconStyle }: IonIconProps) => (
  <FontAwesome6 
  name={name}   
  size={size} 
  color={color} 
  iconStyle={iconStyle} 
  />
);
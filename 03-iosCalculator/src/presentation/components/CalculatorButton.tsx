import React from 'react'
import { Text, Pressable } from 'react-native'
import { colors, styles } from '../../config/theme/app-theme'

interface CalculatorButtonProps {
  label: string,
  color?: string,
  doubleSize?: boolean,
  blackText?: boolean
}

export const CalculatorButton = ({
  label,
  color = colors.darkGray,
  doubleSize = false,
  blackText = false
  }: CalculatorButtonProps) => {
  return (
    <Pressable style={({pressed}) => ({
      ...styles.button,
      backgroundColor: color,
      width: (doubleSize) ? 180 : 80,
      opacity: pressed ? 0.8 : 1,
    })}>
      <Text style={({
        ...styles.buttonText, 
        color: blackText ? colors.backgroundDark : colors.textPrimary
        })}>
        {label}
      </Text>
    </Pressable>
  )
}
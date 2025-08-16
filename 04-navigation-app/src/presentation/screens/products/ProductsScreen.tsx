import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { globalStyles } from '../../theme/theme'
import { PrimaryButton } from '../../components';
import { useNavigation } from '@react-navigation/native';

const products = [
  {id: 1, name: 'Product 1'},
  {id: 2, name: 'Product 2'},
  {id: 3, name: 'Product 3'},
  {id: 4, name: 'Product 4'},
  {id: 5, name: 'Product 5'},
];

export const ProductsScreen = () => {
const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Products</Text>

      <FlatList
        data={products}
        renderItem={({item}) => (
          <PrimaryButton 
          label={item.name} 
          onPress={() => navigation.navigate('Product' as never)} />
        )}
      />

      <Text style={{marginBottom: 30, fontSize: 20}}>Ajustes</Text>
      <PrimaryButton 
        label='Ajustes'
        onPress={() => navigation.navigate('Settings' as never)} 
      />
    </View>
  )
};
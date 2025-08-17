import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { globalStyles } from '../../theme/theme'
import { PrimaryButton } from '../../components';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../routes/StackNavigator';

const products = [
  {id: 1, name: 'Product 1'},
  {id: 2, name: 'Product 2'},
  {id: 3, name: 'Product 3'},
  {id: 4, name: 'Product 4'},
  {id: 5, name: 'Product 5'},
];

export const ProductsScreen = () => {
const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Products</Text>

      <FlatList
        data={products}
        renderItem={({item}) => (
          <PrimaryButton 
          label={item.name} 
          onPress={() => navigation.navigate('Product', {id: item.id, name: item.name})} />
        )}
      />

      <Text style={{marginBottom: 30, fontSize: 20}}>Ajustes</Text>
      <PrimaryButton 
        label='Ajustes'
        onPress={() => navigation.navigate('Settings')} 
      />
    </View>
  )
};
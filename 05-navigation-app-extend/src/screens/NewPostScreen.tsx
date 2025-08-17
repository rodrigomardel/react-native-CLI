import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';

const NewPostScreen = () => {
  const [caption, setCaption] = useState('');
  const [selectedImage, setSelectedImage] = useState('https://via.placeholder.com/300x300');

  const filterOptions = [
    { id: 1, name: 'Normal', icon: '📷' },
    { id: 2, name: 'Clarendon', icon: '✨' },
    { id: 3, name: 'Gingham', icon: '🎨' },
    { id: 4, name: 'Moon', icon: '🌙' },
    { id: 5, name: 'Lark', icon: '🐦' },
    { id: 6, name: 'Reyes', icon: '👑' },
  ];

  const FilterOption = ({ filter }: { filter: any }) => (
    <TouchableOpacity style={styles.filterOption}>
      <Text style={styles.filterIcon}>{filter.icon}</Text>
      <Text style={styles.filterName}>{filter.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Cancelar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Nueva publicación</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={[styles.headerButtonText, styles.shareButton]}>Compartir</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.content}>
        {/* Image Preview */}
        <View style={styles.imageContainer}>
          <Image source={{ uri: selectedImage }} style={styles.previewImage} />
        </View>
        
        {/* Filters */}
        <View style={styles.filtersSection}>
          <Text style={styles.sectionTitle}>Filtros</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {filterOptions.map(filter => (
              <FilterOption key={filter.id} filter={filter} />
            ))}
          </ScrollView>
        </View>
        
        {/* Caption Input */}
        <View style={styles.captionSection}>
          <Text style={styles.sectionTitle}>Descripción</Text>
          <TextInput
            style={styles.captionInput}
            placeholder="Escribe una descripción..."
            placeholderTextColor="#8e8e93"
            value={caption}
            onChangeText={setCaption}
            multiline
            numberOfLines={4}
          />
        </View>
        
        {/* Additional Options */}
        <View style={styles.optionsSection}>
          <TouchableOpacity style={styles.optionItem}>
            <Text style={styles.optionIcon}>📍</Text>
            <Text style={styles.optionText}>Añadir ubicación</Text>
            <Text style={styles.optionArrow}>›</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.optionItem}>
            <Text style={styles.optionIcon}>👥</Text>
            <Text style={styles.optionText}>Etiquetar personas</Text>
            <Text style={styles.optionArrow}>›</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.optionItem}>
            <Text style={styles.optionIcon}>#️⃣</Text>
            <Text style={styles.optionText}>Añadir hashtags</Text>
            <Text style={styles.optionArrow}>›</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#dbdbdb',
  },
  headerButton: {
    padding: 4,
  },
  headerButtonText: {
    fontSize: 16,
    color: '#007aff',
  },
  shareButton: {
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  content: {
    flex: 1,
  },
  imageContainer: {
    padding: 16,
    alignItems: 'center',
  },
  previewImage: {
    width: 300,
    height: 300,
    borderRadius: 8,
  },
  filtersSection: {
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  filterOption: {
    alignItems: 'center',
    marginHorizontal: 8,
    paddingVertical: 8,
  },
  filterIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  filterName: {
    fontSize: 12,
    textAlign: 'center',
  },
  captionSection: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  captionInput: {
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    minHeight: 100,
    textAlignVertical: 'top',
  },
  optionsSection: {
    paddingVertical: 16,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#dbdbdb',
  },
  optionIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
  },
  optionArrow: {
    fontSize: 18,
    color: '#8e8e93',
  },
});

export default NewPostScreen;

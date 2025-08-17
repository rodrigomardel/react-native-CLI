import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';

const SearchScreen = () => {
  const stories = [
    { id: 1, username: 'viajes', image: 'https://via.placeholder.com/60' },
    { id: 2, username: 'comida', image: 'https://via.placeholder.com/60' },
    { id: 3, username: 'fitness', image: 'https://via.placeholder.com/60' },
    { id: 4, username: 'arte', image: 'https://via.placeholder.com/60' },
    { id: 5, username: 'música', image: 'https://via.placeholder.com/60' },
    { id: 6, username: 'tecnología', image: 'https://via.placeholder.com/60' },
  ];

  const explorePosts = [
    { id: 1, image: 'https://via.placeholder.com/120' },
    { id: 2, image: 'https://via.placeholder.com/120' },
    { id: 3, image: 'https://via.placeholder.com/120' },
    { id: 4, image: 'https://via.placeholder.com/120' },
    { id: 5, image: 'https://via.placeholder.com/120' },
    { id: 6, image: 'https://via.placeholder.com/120' },
    { id: 7, image: 'https://via.placeholder.com/120' },
    { id: 8, image: 'https://via.placeholder.com/120' },
    { id: 9, image: 'https://via.placeholder.com/120' },
  ];

  const Story = ({ story }: { story: any }) => (
    <TouchableOpacity style={styles.storyContainer}>
      <View style={styles.storyRing}>
        <Image source={{ uri: story.image }} style={styles.storyImage} />
      </View>
      <Text style={styles.storyUsername}>{story.username}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Buscar</Text>
      </View>
      
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar"
          placeholderTextColor="#8e8e93"
        />
      </View>
      
      <ScrollView style={styles.content}>
        {/* Stories */}
        <View style={styles.storiesSection}>
          <Text style={styles.sectionTitle}>Historias</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {stories.map(story => (
              <Story key={story.id} story={story} />
            ))}
          </ScrollView>
        </View>
        
        {/* Explore Grid */}
        <View style={styles.exploreSection}>
          <Text style={styles.sectionTitle}>Explorar</Text>
          <View style={styles.exploreGrid}>
            {explorePosts.map(post => (
              <TouchableOpacity key={post.id} style={styles.exploreItem}>
                <Image source={{ uri: post.image }} style={styles.exploreImage} />
              </TouchableOpacity>
            ))}
          </View>
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
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#dbdbdb',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
  },
  content: {
    flex: 1,
  },
  storiesSection: {
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  storyContainer: {
    alignItems: 'center',
    marginHorizontal: 8,
    width: 70,
  },
  storyRing: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#ff6b6b',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  storyImage: {
    width: 52,
    height: 52,
    borderRadius: 26,
  },
  storyUsername: {
    fontSize: 12,
    textAlign: 'center',
  },
  exploreSection: {
    paddingVertical: 16,
  },
  exploreGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
  },
  exploreItem: {
    width: '33.33%',
    aspectRatio: 1,
    padding: 1,
  },
  exploreImage: {
    flex: 1,
    borderRadius: 4,
  },
});

export default SearchScreen;

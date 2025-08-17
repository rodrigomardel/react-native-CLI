import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const HomeScreen = () => {
  const posts = [
    {
      id: 1,
      username: 'usuario1',
      userAvatar: 'https://via.placeholder.com/40',
      image: 'https://via.placeholder.com/400x400',
      likes: 1234,
      caption: '¡Hermoso día! ☀️ #instagram #vida',
    },
    {
      id: 2,
      username: 'usuario2',
      userAvatar: 'https://via.placeholder.com/40',
      image: 'https://via.placeholder.com/400x400',
      likes: 567,
      caption: 'Nueva aventura 🚀 #viaje #aventura',
    },
    {
      id: 3,
      username: 'usuario3',
      userAvatar: 'https://via.placeholder.com/40',
      image: 'https://via.placeholder.com/400x400',
      likes: 890,
      caption: 'Café y trabajo ☕ #cafe #trabajo',
    },
  ];

  const Post = ({ post }: { post: any }) => (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <Image source={{ uri: post.userAvatar }} style={styles.avatar} />
        <Text style={styles.username}>{post.username}</Text>
        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.moreText}>•••</Text>
        </TouchableOpacity>
      </View>
      
      <Image source={{ uri: post.image }} style={styles.postImage} />
      
      <View style={styles.postActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>❤️</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>💬</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>📤</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>🔖</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.postFooter}>
        <Text style={styles.likes}>{post.likes} me gusta</Text>
        <Text style={styles.caption}>
          <Text style={styles.username}>{post.username}</Text> {post.caption}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Instagram</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerIcon}>➕</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.feed}>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
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
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerButton: {
    padding: 4,
  },
  headerIcon: {
    fontSize: 20,
  },
  feed: {
    flex: 1,
  },
  post: {
    marginBottom: 8,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  username: {
    flex: 1,
    fontWeight: '600',
    fontSize: 14,
  },
  moreButton: {
    padding: 4,
  },
  moreText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    height: 400,
  },
  postActions: {
    flexDirection: 'row',
    padding: 12,
  },
  actionButton: {
    marginRight: 16,
  },
  actionIcon: {
    fontSize: 24,
  },
  postFooter: {
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  likes: {
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 4,
  },
  caption: {
    fontSize: 14,
    lineHeight: 18,
  },
});

export default HomeScreen;

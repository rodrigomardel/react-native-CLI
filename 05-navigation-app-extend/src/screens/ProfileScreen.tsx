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

const ProfileScreen = () => {
  const userProfile = {
    username: 'mi_usuario',
    fullName: 'Mi Nombre Completo',
    avatar: 'https://via.placeholder.com/80',
    bio: 'Desarrollador de React Native 📱\nAmante de la tecnología 💻\nViajero 🌍',
    posts: 42,
    followers: 1234,
    following: 567,
  };

  const userPosts = [
    { id: 1, image: 'https://via.placeholder.com/120', likes: 123 },
    { id: 2, image: 'https://via.placeholder.com/120', likes: 89 },
    { id: 3, image: 'https://via.placeholder.com/120', likes: 234 },
    { id: 4, image: 'https://via.placeholder.com/120', likes: 67 },
    { id: 5, image: 'https://via.placeholder.com/120', likes: 456 },
    { id: 6, image: 'https://via.placeholder.com/120', likes: 178 },
  ];

  const Post = ({ post }: { post: any }) => (
    <TouchableOpacity style={styles.postItem}>
      <Image source={{ uri: post.image }} style={styles.postImage} />
      <View style={styles.postOverlay}>
        <Text style={styles.postLikes}>❤️ {post.likes}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Mi Perfil</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView style={styles.content}>
        {/* Profile Info */}
        <View style={styles.profileSection}>
          <View style={styles.profileHeader}>
            <Image source={{ uri: userProfile.avatar }} style={styles.profileAvatar} />
            
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{userProfile.posts}</Text>
                <Text style={styles.statLabel}>Publicaciones</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{userProfile.followers}</Text>
                <Text style={styles.statLabel}>Seguidores</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{userProfile.following}</Text>
                <Text style={styles.statLabel}>Siguiendo</Text>
              </View>
            </View>
          </View>
          
          <View style={styles.profileInfo}>
            <Text style={styles.fullName}>{userProfile.fullName}</Text>
            <Text style={styles.bio}>{userProfile.bio}</Text>
          </View>
          
          <View style={styles.profileActions}>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Editar perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareButton}>
              <Text style={styles.shareButtonText}>Compartir perfil</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Stories Highlights */}
        <View style={styles.highlightsSection}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.highlightItem}>
              <View style={styles.highlightCircle}>
                <Text style={styles.highlightIcon}>➕</Text>
              </View>
              <Text style={styles.highlightText}>Nuevo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.highlightItem}>
              <View style={styles.highlightCircle}>
                <Text style={styles.highlightIcon}>🏖️</Text>
              </View>
              <Text style={styles.highlightText}>Vacaciones</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.highlightItem}>
              <View style={styles.highlightCircle}>
                <Text style={styles.highlightIcon}>🍕</Text>
              </View>
              <Text style={styles.highlightText}>Comida</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        
        {/* Posts Grid */}
        <View style={styles.postsSection}>
          <View style={styles.postsHeader}>
            <TouchableOpacity style={styles.postsTab}>
              <Text style={styles.postsTabText}>📷</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.postsTab}>
              <Text style={styles.postsTabText}>📌</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.postsTab}>
              <Text style={styles.postsTabText}>👤</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.postsGrid}>
            {userPosts.map(post => (
              <Post key={post.id} post={post} />
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
  content: {
    flex: 1,
  },
  profileSection: {
    padding: 16,
  },
  profileHeader: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  profileAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  statsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: '#8e8e93',
  },
  profileInfo: {
    marginBottom: 16,
  },
  fullName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  bio: {
    fontSize: 14,
    lineHeight: 18,
  },
  profileActions: {
    flexDirection: 'row',
    gap: 8,
  },
  editButton: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',
  },
  editButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  shareButton: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',
  },
  shareButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  highlightsSection: {
    paddingVertical: 16,
    borderTopWidth: 0.5,
    borderTopColor: '#dbdbdb',
  },
  highlightItem: {
    alignItems: 'center',
    marginHorizontal: 8,
    width: 70,
  },
  highlightCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#dbdbdb',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  highlightIcon: {
    fontSize: 20,
  },
  highlightText: {
    fontSize: 12,
    textAlign: 'center',
  },
  postsSection: {
    flex: 1,
  },
  postsHeader: {
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderTopColor: '#dbdbdb',
  },
  postsTab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  postsTabText: {
    fontSize: 20,
  },
  postsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  postItem: {
    width: '33.33%',
    aspectRatio: 1,
    position: 'relative',
  },
  postImage: {
    flex: 1,
    margin: 1,
  },
  postOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
  },
  postLikes: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;

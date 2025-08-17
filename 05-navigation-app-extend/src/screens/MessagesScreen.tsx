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

const MessagesScreen = () => {
  const conversations = [
    {
      id: 1,
      username: 'maria_garcia',
      lastMessage: '¡Hola! ¿Cómo estás?',
      time: '2m',
      unread: 2,
      avatar: 'https://via.placeholder.com/50',
      isOnline: true,
    },
    {
      id: 2,
      username: 'carlos_rodriguez',
      lastMessage: 'Gracias por el like 😊',
      time: '15m',
      unread: 0,
      avatar: 'https://via.placeholder.com/50',
      isOnline: false,
    },
    {
      id: 3,
      username: 'ana_lopez',
      lastMessage: '¿Vamos al café mañana?',
      time: '1h',
      unread: 1,
      avatar: 'https://via.placeholder.com/50',
      isOnline: true,
    },
    {
      id: 4,
      username: 'juan_perez',
      lastMessage: 'Hermosa foto!',
      time: '2h',
      unread: 0,
      avatar: 'https://via.placeholder.com/50',
      isOnline: false,
    },
    {
      id: 5,
      username: 'lucia_martinez',
      lastMessage: 'Te etiqueté en una historia',
      time: '3h',
      unread: 0,
      avatar: 'https://via.placeholder.com/50',
      isOnline: true,
    },
  ];

  const Conversation = ({ conversation }: { conversation: any }) => (
    <TouchableOpacity style={styles.conversationItem}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: conversation.avatar }} style={styles.avatar} />
        {conversation.isOnline && <View style={styles.onlineIndicator} />}
      </View>
      
      <View style={styles.conversationContent}>
        <View style={styles.conversationHeader}>
          <Text style={styles.username}>{conversation.username}</Text>
          <Text style={styles.time}>{conversation.time}</Text>
        </View>
        
        <View style={styles.messageContainer}>
          <Text 
            style={[
              styles.lastMessage,
              conversation.unread > 0 && styles.unreadMessage
            ]}
            numberOfLines={1}
          >
            {conversation.lastMessage}
          </Text>
          
          {conversation.unread > 0 && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadCount}>{conversation.unread}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Mensajes</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerIcon}>✏️</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar mensajes"
          placeholderTextColor="#8e8e93"
        />
      </View>
      
      <ScrollView style={styles.conversationsList}>
        {conversations.map(conversation => (
          <Conversation key={conversation.id} conversation={conversation} />
        ))}
      </ScrollView>
      
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerIcon}>📷</Text>
          <Text style={styles.footerText}>Cámara</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerIcon}>📝</Text>
          <Text style={styles.footerText}>Nuevo mensaje</Text>
        </TouchableOpacity>
      </View>
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
  conversationsList: {
    flex: 1,
  },
  conversationItem: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#dbdbdb',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4CAF50',
    borderWidth: 2,
    borderColor: '#fff',
  },
  conversationContent: {
    flex: 1,
    justifyContent: 'center',
  },
  conversationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  username: {
    fontSize: 16,
    fontWeight: '600',
  },
  time: {
    fontSize: 12,
    color: '#8e8e93',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lastMessage: {
    flex: 1,
    fontSize: 14,
    color: '#8e8e93',
  },
  unreadMessage: {
    fontWeight: '600',
    color: '#000',
  },
  unreadBadge: {
    backgroundColor: '#007aff',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  unreadCount: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 0.5,
    borderTopColor: '#dbdbdb',
  },
  footerButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  footerIcon: {
    fontSize: 16,
    marginRight: 4,
  },
  footerText: {
    fontSize: 14,
    color: '#007aff',
  },
});

export default MessagesScreen;

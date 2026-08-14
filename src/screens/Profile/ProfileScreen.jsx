import React from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useAuth } from '../../hooks/useAuth';
import { styles } from './styles';
import { ScreenHeader } from '../../components/Header/ScreenHeader';

export const ProfileScreen = () => {
  const { user, logout } = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader title="My Profile" />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Image 
              source={require('../../assets/images/user_profile_photo.png')} 
              style={styles.avatarImage} 
            />
          </View>
          <Text style={styles.userName}>{user?.name || 'Jane Doe'}</Text>
          <Text style={styles.userEmail}>{user?.email || 'jane.doe@example.com'}</Text>
        </View>

        <View style={styles.card}>
          <TouchableOpacity style={styles.row}>
            <View style={styles.rowIcon}>
              <Ionicons name="person-outline" size={20} color="#8B5CF6" />
            </View>
            <Text style={styles.rowText}>Personal Information</Text>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.row}>
            <View style={styles.rowIcon}>
              <Ionicons name="card-outline" size={20} color="#8B5CF6" />
            </View>
            <Text style={styles.rowText}>Payment Methods</Text>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.row}>
            <View style={styles.rowIcon}>
              <Ionicons name="shield-checkmark-outline" size={20} color="#8B5CF6" />
            </View>
            <Text style={styles.rowText}>Insurance Details</Text>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <TouchableOpacity style={styles.row}>
            <View style={styles.rowIcon}>
              <Ionicons name="settings-outline" size={20} color="#8B5CF6" />
            </View>
            <Text style={styles.rowText}>Settings</Text>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>
          <View style={styles.divider} />
          <TouchableOpacity style={styles.row}>
            <View style={styles.rowIcon}>
              <Ionicons name="help-circle-outline" size={20} color="#8B5CF6" />
            </View>
            <Text style={styles.rowText}>Help & Support</Text>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
          <Ionicons name="log-out-outline" size={22} color="#DC2626" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

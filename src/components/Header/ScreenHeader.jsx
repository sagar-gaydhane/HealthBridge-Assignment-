import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

export const ScreenHeader = ({ title, showBack = false, showAvatar = false, avatarPosition = 'right' }) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.header, { paddingTop: insets.top + spacing.md }]}>
      {showBack ? (
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.primary} />
        </TouchableOpacity>
      ) : showAvatar && avatarPosition === 'left' ? (
        <View style={styles.avatarPlaceholder}>
          <Image source={require('../../assets/images/user_profile_photo.png')} style={styles.avatarImage} />
        </View>
      ) : (
        <View style={styles.placeholder} />
      )}
      
      <Text style={styles.title}>{title || 'HealthBridge'}</Text>
      
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="swap-horizontal" size={24} color={colors.primary} />
        </TouchableOpacity>
        
        {(showAvatar && avatarPosition === 'right') ? (
          <View style={styles.avatarPlaceholder}>
            <Image source={require('../../assets/images/user_profile_photo.png')} style={styles.avatarImage} />
          </View>
        ) : (
          <View style={styles.placeholderHalf} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
    backgroundColor: 'transparent',
  },
  title: {
    ...typography.h1,
    color: colors.primaryDark,
    fontSize: 20,
    flex: 1,
    textAlign: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 80,
    justifyContent: 'flex-end',
  },
  iconButton: {
    padding: spacing.xs,
  },
  placeholder: {
    width: 40,
  },
  placeholderHalf: {
    width: 0, // No extra width needed if no avatar
  },
  avatarPlaceholder: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: colors.surfaceVariant,
    marginLeft: spacing.xs,
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  }
});

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

export const DoctorCard = ({ doctor, onPress }) => {
  const isNetwork = doctor.inNetwork;

  const getImage = (id) => {
    switch (id) {
      case 'd1': return require('../../assets/images/dr_rao_portrait.png');
      case 'd2': return require('../../assets/images/dr_marcus_thorne.png');
      case 'd3': return require('../../assets/images/dr_elena_petrova.png');
      default: return require('../../assets/images/user_profile_photo.png');
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.imagePlaceholder}>
          <Image source={getImage(doctor.id)} style={styles.doctorImage} />
        </View>
        <View style={styles.info}>
          <View style={styles.nameRow}>
            <Text style={styles.name}>{doctor.name}, MD</Text>
            <View style={[styles.networkBadge, !isNetwork && styles.outNetworkBadge]}>
              <View style={styles.networkDot} />
              <Text style={[styles.networkText, !isNetwork && styles.outNetworkText]}>
                {isNetwork ? 'In-Network' : 'Out-of-Network'}
              </Text>
            </View>
          </View>
          <Text style={styles.specialty}>{doctor.specialty}</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.metaRow}>
        <Ionicons name="star" size={12} color="#F59E0B" />
        <Text style={styles.rating}>{doctor.rating}</Text>
        <Ionicons name="location-outline" size={14} color={colors.textSecondary} style={{marginLeft: 16}} />
        <Text style={styles.distance}>{doctor.distance} km</Text>
      </View>

      <View style={styles.nextSlot}>
        <Text style={styles.nextSlotLabel}>NEXT SLOT</Text>
        <Text style={styles.nextSlotTime}>Available this Friday at 10:30 AM</Text>
      </View>

      <TouchableOpacity onPress={onPress} style={styles.actionRow}>
        <Text style={styles.actionText}>View Profile & Book &gt;</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    padding: spacing.lg,
    borderRadius: 24,
    marginBottom: spacing.md,
    // Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
  },
  imagePlaceholder: {
    width: 64,
    height: 72,
    borderRadius: 12,
    backgroundColor: colors.surfaceVariant,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
    overflow: 'hidden',
  },
  doctorImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  info: {
    flex: 1,
    paddingTop: 4,
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  name: {
    ...typography.h2,
    color: colors.text,
    fontSize: 16,
    flex: 1,
  },
  networkBadge: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  networkDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#2E7D32',
    marginRight: 4,
  },
  networkText: {
    ...typography.subtitle,
    color: '#2E7D32',
    fontSize: 10,
  },
  outNetworkBadge: {
    backgroundColor: colors.warningBackground,
  },
  outNetworkText: {
    color: colors.warning,
  },
  specialty: {
    ...typography.body,
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 4,
    lineHeight: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#F3F4F6', // light grey divider
    marginBottom: spacing.md,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  rating: {
    ...typography.subtitle,
    fontSize: 12,
    color: colors.text,
    marginLeft: 4,
  },
  distance: {
    ...typography.body,
    fontSize: 12,
    color: colors.textSecondary,
    marginLeft: 4,
  },
  nextSlot: {
    backgroundColor: '#F9F5FF', // light purple bg
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.md,
  },
  nextSlotLabel: {
    ...typography.overline,
    color: colors.textTertiary,
    fontSize: 10,
    marginBottom: 4,
  },
  nextSlotTime: {
    ...typography.subtitle,
    color: colors.primaryDark,
    fontSize: 12,
  },
  actionRow: {
    alignItems: 'flex-end',
  },
  actionText: {
    ...typography.subtitle,
    color: colors.primaryDark,
    fontSize: 12,
  },
});

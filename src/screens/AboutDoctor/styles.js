import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9FB', // Light off-white bg from mockup
  },
  content: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.xxl,
  },
  mainCard: {
    backgroundColor: colors.white,
    borderRadius: 24,
    padding: spacing.lg,
    marginTop: spacing.md,
    marginBottom: spacing.lg,
    alignItems: 'flex-start',
    // Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  doctorImage: {
    width: 100,
    height: 100,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: spacing.md,
  },
  portraitImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  name: {
    ...typography.h2,
    color: colors.primaryDark,
    marginBottom: spacing.xs,
  },
  chipsRow: {
    flexDirection: 'row',
    marginBottom: spacing.sm,
  },
  chip: {
    backgroundColor: '#F2EEF9',
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: spacing.xs,
  },
  chipText: {
    ...typography.subtitle,
    fontSize: 12,
    color: colors.textSecondary,
  },
  aboutText: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.md,
    lineHeight: 20,
  },
  insuranceTitle: {
    ...typography.subtitle,
    fontSize: 10,
    color: colors.textSecondary,
    textTransform: 'uppercase',
    marginBottom: spacing.sm,
  },
  insuranceGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  insuranceChip: {
    backgroundColor: '#E8F5E9', // Light green
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: spacing.xs,
    marginBottom: spacing.xs,
  },
  insuranceText: {
    ...typography.subtitle,
    fontSize: 10,
    color: '#2E7D32', // Green text
    textTransform: 'uppercase',
  },
  appointmentSection: {
    marginBottom: spacing.lg,
  },
  appointmentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.text,
  },
  appointmentSubtext: {
    ...typography.body,
    color: colors.textSecondary,
    fontSize: 12,
    marginLeft: spacing.sm,
  },
  datesRow: {
    flexDirection: 'row',
  },
  dayColumn: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: spacing.md,
    marginRight: spacing.md,
    alignItems: 'center',
    width: 100,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  dayColumnActive: {
    borderColor: colors.primary,
  },
  dayText: {
    ...typography.subtitle,
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  dateText: {
    ...typography.subtitle,
    fontSize: 14,
    color: colors.text,
    marginBottom: spacing.md,
  },
  timesCol: {
    width: '100%',
  },
  timeButton: {
    backgroundColor: '#F3F4F6',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  timeButtonActive: {
    backgroundColor: colors.primaryDark,
  },
  timeText: {
    ...typography.subtitle,
    fontSize: 12,
    color: colors.textSecondary,
  },
  timeTextActive: {
    color: colors.white,
  },
  phoneCard: {
    backgroundColor: '#F2EEF9',
    borderRadius: 24,
    padding: spacing.lg,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.lg,
  },
  phoneIconBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E6DCF5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  phoneContent: {
    flex: 1,
  },
  phoneTitle: {
    ...typography.subtitle,
    color: colors.primaryDark,
    marginBottom: 4,
  },
  phoneText: {
    ...typography.body,
    fontSize: 12,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  locationCard: {
    backgroundColor: colors.white,
    borderRadius: 24,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  locationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  locationTitle: {
    ...typography.subtitle,
    color: colors.primaryDark,
    marginLeft: spacing.xs,
  },
  locationAddress: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  mapPlaceholder: {
    width: '100%',
    height: 150,
    backgroundColor: colors.surfaceVariant,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  mapImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  mapPin: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 2,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  verifiedCareSection: {
    backgroundColor: colors.white,
    borderRadius: 24,
    padding: spacing.lg,
    marginBottom: spacing.xxl,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  verifiedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  verifiedIcon: {
    marginRight: spacing.md,
  },
  verifiedText: {
    ...typography.body,
    color: colors.textSecondary,
  },
  footerContainer: {
    padding: spacing.lg,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderColor: '#E5E7EB', // light grey border
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 4,
  }
});

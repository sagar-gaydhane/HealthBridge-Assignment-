import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA', // Light grey background
  },
  scrollContent: {
    paddingHorizontal: spacing.lg,
    paddingTop: 40,
    paddingBottom: spacing.xxl,
    alignItems: 'center',
  },
  
  // Top Header Area
  topSection: {
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  headerIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#C4A750', // Gold color from mock
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  title: {
    ...typography.h2,
    fontSize: 22,
    color: '#111827',
    marginBottom: spacing.xs,
  },
  subtitle: {
    ...typography.body,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
  },

  // Details Card
  detailsCard: {
    backgroundColor: colors.white,
    borderRadius: 16,
    width: '100%',
    padding: spacing.lg,
    marginBottom: spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  
  // Physician
  physicianSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  physicianTextCol: {
    flex: 1,
  },
  sectionLabel: {
    ...typography.overline,
    color: '#8B5CF6', // Purple label
    fontSize: 10,
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  physicianName: {
    ...typography.h3,
    fontSize: 16,
    color: '#111827',
    marginBottom: 2,
  },
  physicianSpecialty: {
    ...typography.body,
    fontSize: 13,
    color: '#6B7280',
  },
  doctorImageContainer: {
    width: 44,
    height: 44,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#F3F4F6',
  },
  doctorImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  // Detail Rows (Date & Location)
  detailRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.lg,
  },
  iconBox: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F3E8FF', // Light purple bg
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  infoCol: {
    flex: 1,
  },
  infoValue: {
    ...typography.h3,
    fontSize: 14,
    color: '#111827',
    marginBottom: 2,
  },
  infoSubtext: {
    ...typography.body,
    fontSize: 13,
    color: '#6B7280',
    lineHeight: 18,
  },

  // Dividers
  dashedDivider: {
    height: 1,
    width: '100%',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderStyle: 'dashed',
    marginVertical: spacing.sm,
  },
  solidDivider: {
    height: 1,
    width: '100%',
    backgroundColor: '#E5E7EB',
    marginVertical: spacing.md,
  },

  // Receipt
  receiptSection: {
    paddingTop: spacing.sm,
  },
  receiptRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  receiptLabel: {
    ...typography.body,
    fontSize: 13,
    color: '#4B5563',
  },
  receiptStrikethrough: {
    ...typography.body,
    fontSize: 13,
    color: '#9CA3AF',
    textDecorationLine: 'line-through',
  },
  receiptValue: {
    ...typography.body,
    fontSize: 13,
    color: '#111827',
  },
  
  // Total
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  totalLabel: {
    ...typography.h3,
    fontSize: 16,
    color: '#111827',
  },
  totalValueContainer: {
    alignItems: 'flex-end',
  },
  totalValue: {
    ...typography.h2,
    fontSize: 22,
    color: '#4C1D95', // Dark purple
  },
  coveredBadge: {
    backgroundColor: '#D1FAE5', // Light green
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginTop: 2,
  },
  coveredText: {
    ...typography.overline,
    color: '#065F46', // Dark green
    fontSize: 9,
    letterSpacing: 0,
  },

  // Barcode / ID
  barcodeSection: {
    height: 24,
    width: 2,
    backgroundColor: '#9CA3AF',
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginBottom: 8,
  },
  barcodeLine: {
    flex: 1,
  },
  transactionId: {
    ...typography.overline,
    color: '#9CA3AF',
    textAlign: 'center',
    fontSize: 10,
    letterSpacing: 0.5,
  },

  // Settings Toggles
  settingsSection: {
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 16,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    marginBottom: spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
  },
  settingDivider: {
    height: 1,
    backgroundColor: '#F3F4F6',
  },
  settingText: {
    ...typography.body,
    fontSize: 13,
    color: '#4B5563',
    flex: 1,
    paddingRight: spacing.md,
    lineHeight: 18,
  },

  // Info Box
  infoBox: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    padding: spacing.lg,
    borderRadius: 16,
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: spacing.xxl,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  infoIcon: {
    marginRight: spacing.md,
    marginTop: 2,
  },
  infoBoxText: {
    ...typography.body,
    color: '#4B5563',
    fontSize: 13,
    lineHeight: 18,
    flex: 1,
  },

  footer: {
    padding: spacing.lg,
    backgroundColor: '#F8F9FA', // Match bg
  }
});

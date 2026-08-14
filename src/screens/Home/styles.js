import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9FB', // Light off-white from mockup
  },
  chipsContainer: {
    flexDirection: 'row',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: 'transparent',
  },
  chipActive: {
    backgroundColor: colors.primaryDark, // solid purple
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  chipCheckBg: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipActiveText: {
    ...typography.subtitle,
    color: colors.white,
    marginLeft: 6,
    fontSize: 13,
  },
  chipInactive: {
    backgroundColor: colors.white,
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB', // light grey outline
  },
  chipInactiveText: {
    ...typography.subtitle,
    color: colors.textSecondary,
    marginLeft: 4,
    fontSize: 13,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
  },
  listHeaderLeft: {
    flexDirection: 'column',
  },
  resultsCount: {
    ...typography.h3,
    fontSize: 16,
    color: colors.text,
  },
  resultsCategory: {
    ...typography.h3,
    fontSize: 16,
    color: colors.text,
    marginTop: 2,
  },
  listHeaderRight: {
    flexDirection: 'column',
    alignItems: 'flex-start', // In the screenshot, "SORTED BY" and "RELEVANCE" are left-aligned with each other!
  },
  sortLabel: {
    ...typography.overline,
    fontSize: 10,
    color: colors.textTertiary,
    marginBottom: 2,
    letterSpacing: 0.5,
  },
  sortValue: {
    ...typography.overline,
    fontSize: 10,
    color: colors.textTertiary,
    letterSpacing: 0.5,
  },
  listContainer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  urgentCareCard: {
    backgroundColor: colors.primaryDark,
    borderRadius: 16,
    padding: spacing.lg,
    marginBottom: spacing.lg,
  },
  urgentCareBadge: {
    ...typography.overline,
    color: colors.primaryLight,
    marginBottom: spacing.xs,
  },
  urgentCareTitle: {
    ...typography.h2,
    color: colors.white,
    fontSize: 20,
    marginBottom: spacing.xs,
  },
  urgentCareText: {
    ...typography.body,
    color: colors.surfaceVariant,
    fontSize: 12,
    marginBottom: spacing.md,
  },
  urgentCareButton: {
    backgroundColor: colors.white,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  urgentCareButtonText: {
    ...typography.subtitle,
    color: colors.primaryDark,
    fontSize: 12,
  },
});

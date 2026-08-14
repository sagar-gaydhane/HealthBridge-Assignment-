import { StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.sm,
  },
  title: {
    ...typography.h1,
    fontSize: 24,
    color: colors.primaryDark,
  },
  filtersContainer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.md,
  },
  filterContent: {
    paddingRight: spacing.lg,
  },
  chipActive: {
    backgroundColor: colors.primaryDark,
    paddingHorizontal: spacing.md,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: spacing.sm,
  },
  chipInactive: {
    backgroundColor: colors.white,
    paddingHorizontal: spacing.md,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: spacing.sm,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  chipActiveText: {
    ...typography.h3,
    fontSize: 13,
    color: colors.white,
  },
  chipInactiveText: {
    ...typography.body,
    fontSize: 13,
    color: '#6B7280',
  },
  timelineContainer: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xxl,
    paddingTop: spacing.md,
  },
  eventRow: {
    flexDirection: 'row',
    marginBottom: spacing.lg,
    position: 'relative',
  },
  line: {
    position: 'absolute',
    left: 20,
    top: 40,
    bottom: -24, // Connects to the next item
    width: 2,
    backgroundColor: '#E5E7EB',
    zIndex: -1,
  },
  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: colors.white,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    zIndex: 1,
  },
  card: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  dateText: {
    ...typography.overline,
    color: '#6B7280',
    fontSize: 10,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  statusText: {
    ...typography.overline,
    fontSize: 9,
    letterSpacing: 0.5,
  },
  eventTitle: {
    ...typography.h3,
    fontSize: 15,
    color: '#111827',
    marginBottom: 4,
  },
  eventDesc: {
    ...typography.body,
    fontSize: 13,
    color: '#4B5563',
    marginBottom: spacing.sm,
    lineHeight: 18,
  },
  doctorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: spacing.sm,
    paddingVertical: 6,
    borderRadius: 8,
  },
  doctorText: {
    ...typography.body,
    fontSize: 12,
    color: '#4B5563',
    marginLeft: 6,
  }
});

import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

export const ErrorText = ({ children, style }) => {
  if (!children) return null;
  return <Text style={[styles.error, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  error: {
    ...typography.body,
    color: colors.white,
    backgroundColor: colors.error,
    padding: spacing.sm,
    borderRadius: 8,
    textAlign: 'center',
    marginBottom: spacing.md,
    overflow: 'hidden',
  },
});

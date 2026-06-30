import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, TYPOGRAPHY, SPACING } from '../theme';

export const FavoritesScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Favoritos</Text>
        <Text style={styles.subtitle}>Dispositivos destacados</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.message}>Dispositivos favoritos</Text>
        <Text style={styles.submessage}>
          Aqui apareceran los dispositivos que marques como favoritos.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.xl,
    paddingTop: 60,
    paddingBottom: SPACING.xl,
  },
  title: {
    fontSize: TYPOGRAPHY.headerTitle.fontSize,
    fontWeight: TYPOGRAPHY.headerTitle.fontWeight,
    color: COLORS.textInverse,
  },
  subtitle: {
    fontSize: TYPOGRAPHY.headerSubtitle.fontSize,
    color: '#aaaaaa',
    marginTop: SPACING.xs,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SPACING.xl,
  },
  message: {
    fontSize: TYPOGRAPHY.sectionTitle.fontSize,
    fontWeight: TYPOGRAPHY.sectionTitle.fontWeight,
    color: COLORS.textPrimary,
    marginBottom: SPACING.sm,
  },
  submessage: {
    fontSize: TYPOGRAPHY.body.fontSize,
    color: COLORS.textMuted,
    textAlign: 'center',
  },
});

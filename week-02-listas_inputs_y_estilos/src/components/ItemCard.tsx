import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Device } from '../types';
import { getStatusLabel, getStatusColor, formatCurrency } from '../data/mockData';

import { COLORS, TYPOGRAPHY, SPACING, RADIUS } from '../theme';

interface ItemCardProps {
  device: Device;
  onPress?: (device: Device) => void;
}

export const ItemCard: React.FC<ItemCardProps> = ({ device, onPress }) => {
  const handlePress = (): void => {
    onPress?.(device);
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
      onPress={handlePress}
      android_ripple={{ color: 'rgba(0, 0, 0, 0.1)' }}
    >
      <Image
        source={{ uri: device.imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Text style={styles.brand}>{device.brand}</Text>
        <Text style={styles.model}>{device.model}</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Cliente:</Text>
          <Text style={styles.value}>{device.customerName}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Telefono:</Text>
          <Text style={styles.value}>{device.phone}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Problema:</Text>
          <Text style={styles.issue} numberOfLines={2}>
            {device.issue}
          </Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Estado:</Text>
          <View style={[styles.statusBadge, { backgroundColor: getStatusColor(device.status) }]}>
            <Text style={styles.statusText}>{getStatusLabel(device.status)}</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.date}>Recibido: {device.receivedDate}</Text>
          <Text style={styles.cost}>{formatCurrency(device.estimatedCost)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    borderRadius: RADIUS.md,
    marginBottom: SPACING.lg,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  cardPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  image: {
    width: 120,
    height: '100%',
    minHeight: 180,
    backgroundColor: '#eeeeee',
  },
  content: {
    flex: 1,
    padding: SPACING.lg,
  },
  brand: {
    fontSize: TYPOGRAPHY.cardBrand.fontSize,
    fontWeight: TYPOGRAPHY.cardBrand.fontWeight,
    color: COLORS.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  model: {
    fontSize: TYPOGRAPHY.cardTitle.fontSize,
    fontWeight: TYPOGRAPHY.cardTitle.fontWeight,
    color: COLORS.textPrimary,
    marginTop: SPACING.xs,
    marginBottom: SPACING.md,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  label: {
    fontSize: TYPOGRAPHY.label.fontSize,
    fontWeight: TYPOGRAPHY.label.fontWeight,
    color: COLORS.textMuted,
    width: 60,
  },
  value: {
    fontSize: TYPOGRAPHY.body.fontSize,
    color: COLORS.textSecondary,
    flex: 1,
  },
  issue: {
    fontSize: TYPOGRAPHY.body.fontSize,
    color: COLORS.textSecondary,
    flex: 1,
    flexWrap: 'wrap',
  },
  statusBadge: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.xs,
    borderRadius: RADIUS.full,
  },
  statusText: {
    fontSize: TYPOGRAPHY.badge.fontSize,
    fontWeight: TYPOGRAPHY.badge.fontWeight,
    color: COLORS.textInverse,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: SPACING.sm,
  },
  date: {
    fontSize: TYPOGRAPHY.caption.fontSize,
    color: COLORS.textLight,
  },
  cost: {
    fontSize: TYPOGRAPHY.body.fontSize,
    fontWeight: '700',
    color: COLORS.accent,
  },
});

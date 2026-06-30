import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Device } from '../types';
import { getStatusLabel, getStatusColor, formatCurrency } from '../data/mockData';
import { COLORS, TYPOGRAPHY, SPACING, RADIUS } from '../theme';

interface ItemCardProps {
  device: Device;
  onPress: (device: Device) => void;
  onSave?: (device: Device) => void;
  isSaved?: boolean;
}

export const ItemCard: React.FC<ItemCardProps> = ({ device, onPress, onSave, isSaved = false }) => {
  const handleSavePress = (): void => {
    if (onSave) {
      onSave(device);
    }
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
      onPress={() => onPress(device)}
      android_ripple={{ color: 'rgba(0, 0, 0, 0.1)' }}
    >
      <Image
        source={{ uri: device.imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <View style={styles.headerRow}>
          <View style={styles.headerInfo}>
            <Text style={styles.brand}>{device.brand}</Text>
            <Text style={styles.model}>{device.model}</Text>
          </View>
          {onSave && (
            <Pressable
              style={({ pressed }) => [
                styles.saveButton,
                pressed && styles.saveButtonPressed,
              ]}
              onPress={handleSavePress}
              hitSlop={8}
            >
              <Ionicons
                name={isSaved ? 'heart' : 'heart-outline'}
                size={22}
                color={isSaved ? COLORS.accentRed : COLORS.textMuted}
              />
            </Pressable>
          )}
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Cliente:</Text>
          <Text style={styles.value}>{device.customerName}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Estado:</Text>
          <View style={[styles.statusBadge, { backgroundColor: getStatusColor(device.status) }]}>
            <Text style={styles.statusText}>{getStatusLabel(device.status)}</Text>
          </View>
        </View>

        <View style={styles.footer}>
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
    minHeight: 140,
    backgroundColor: '#eeeeee',
  },
  content: {
    flex: 1,
    padding: SPACING.lg,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  headerInfo: {
    flex: 1,
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
  saveButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: SPACING.sm,
  },
  saveButtonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.9 }],
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: SPACING.sm,
  },
  cost: {
    fontSize: TYPOGRAPHY.body.fontSize,
    fontWeight: '700',
    color: COLORS.accent,
  },
});

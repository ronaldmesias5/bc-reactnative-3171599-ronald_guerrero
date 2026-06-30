import React, { useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ItemCard } from '../components/ItemCard';
import { Device } from '../types';
import { useSavedStore } from '../stores/savedStore';
import { COLORS, TYPOGRAPHY, SPACING, RADIUS } from '../theme';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { HomeStackParamList } from '../navigation/types';
import { useNavigation } from '@react-navigation/native';

type SavedNavProp = NativeStackNavigationProp<HomeStackParamList, 'HomeList'>;

export const SavedScreen: React.FC = () => {
  const navigation = useNavigation<SavedNavProp>();

  // Selectores especificos del store (optimizan re-renders)
  const savedDevices = useSavedStore((state) => state.savedDevices);
  const removeDevice = useSavedStore((state) => state.removeDevice);
  const clearAll = useSavedStore((state) => state.clearAll);

  const handleCardPress = useCallback(
    (device: Device): void => {
      navigation.navigate('HomeDetail', {
        id: device.id,
        brand: device.brand,
        model: device.model,
      });
    },
    [navigation]
  );

  const handleRemove = useCallback(
    (device: Device): void => {
      removeDevice(device.id);
    },
    [removeDevice]
  );

  const renderItem = useCallback(
    ({ item }: { item: Device }) => (
      <ItemCard
        device={item}
        onPress={handleCardPress}
        onSave={handleRemove}
        isSaved
      />
    ),
    [handleCardPress, handleRemove]
  );

  const keyExtractor = useCallback((item: Device): string => item.id, []);

  const renderEmptyState = useCallback(
    () => (
      <View style={styles.emptyContainer}>
        <Ionicons name="heart-outline" size={64} color={COLORS.textLight} />
        <Text style={styles.emptyTitle}>No hay dispositivos guardados</Text>
        <Text style={styles.emptySubtitle}>
          Presiona el icono de corazon en cualquier dispositivo{'\n'}para agregarlo a tu lista de guardados.
        </Text>
      </View>
    ),
    []
  );

  const renderHeader = useCallback(
    () =>
      savedDevices.length > 0 ? (
        <View style={styles.savedHeader}>
          <View>
            <Text style={styles.savedHeaderTitle}>Dispositivos Guardados</Text>
            <Text style={styles.savedHeaderSubtitle}>
              {savedDevices.length} dispositivo{savedDevices.length !== 1 ? 's' : ''}
            </Text>
          </View>
          <Pressable
            style={({ pressed }) => [
              styles.clearAllButton,
              pressed && styles.clearAllButtonPressed,
            ]}
            onPress={clearAll}
          >
            <Ionicons name="trash-outline" size={16} color={COLORS.accentRed} />
            <Text style={styles.clearAllText}>Limpiar todo</Text>
          </Pressable>
        </View>
      ) : null,
    [savedDevices.length, clearAll]
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={savedDevices}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={renderHeader}
        ListEmptyComponent={renderEmptyState}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  savedHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.xl,
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.md,
  },
  savedHeaderTitle: {
    fontSize: TYPOGRAPHY.sectionTitle.fontSize,
    fontWeight: TYPOGRAPHY.sectionTitle.fontWeight,
    color: COLORS.textPrimary,
  },
  savedHeaderSubtitle: {
    fontSize: TYPOGRAPHY.caption.fontSize,
    color: COLORS.textMuted,
    marginTop: SPACING.xs,
  },
  clearAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SPACING.sm,
    paddingHorizontal: SPACING.md,
    borderRadius: RADIUS.sm,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    gap: SPACING.xs,
  },
  clearAllButtonPressed: {
    opacity: 0.7,
  },
  clearAllText: {
    fontSize: TYPOGRAPHY.caption.fontSize,
    color: COLORS.accentRed,
    fontWeight: '600',
  },
  listContent: {
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.xxl,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 100,
    paddingHorizontal: SPACING.xl,
  },
  emptyTitle: {
    fontSize: TYPOGRAPHY.sectionTitle.fontSize,
    fontWeight: TYPOGRAPHY.sectionTitle.fontWeight,
    color: COLORS.textPrimary,
    marginTop: SPACING.lg,
    marginBottom: SPACING.sm,
  },
  emptySubtitle: {
    fontSize: TYPOGRAPHY.body.fontSize,
    color: COLORS.textMuted,
    textAlign: 'center',
    lineHeight: 20,
  },
});

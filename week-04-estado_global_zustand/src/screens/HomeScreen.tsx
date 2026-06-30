import React, { useState, useMemo, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Keyboard,
  StyleSheet,
} from 'react-native';
import { ItemCard } from '../components/ItemCard';
import { mockDevices } from '../data/mockData';
import { Device } from '../types';
import { useSavedStore } from '../stores/savedStore';
import { COLORS, TYPOGRAPHY, SPACING, RADIUS } from '../theme';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { HomeStackParamList } from '../navigation/types';

type HomeScreenNavProp = NativeStackNavigationProp<HomeStackParamList, 'HomeList'>;

interface HomeScreenProps {
  navigation: HomeScreenNavProp;
}

const EmptyState: React.FC<{ searchQuery: string }> = React.memo(({ searchQuery }) => (
  <View style={styles.emptyContainer}>
    <Text style={styles.emptyIcon}>🔍</Text>
    <Text style={styles.emptyTitle}>No se encontraron resultados</Text>
    <Text style={styles.emptySubtitle}>
      {searchQuery
        ? `No hay dispositivos que coincidan con "${searchQuery}"`
        : 'Intenta con otro termino de busqueda'}
    </Text>
  </View>
));

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const savedDevices = useSavedStore((state) => state.savedDevices);
  const addDevice = useSavedStore((state) => state.addDevice);
  const removeDevice = useSavedStore((state) => state.removeDevice);

  const filteredDevices = useMemo(() => {
    if (!searchQuery.trim()) return mockDevices;
    const query = searchQuery.toLowerCase().trim();
    return mockDevices.filter(
      (device) =>
        device.brand.toLowerCase().includes(query) ||
        device.model.toLowerCase().includes(query) ||
        device.customerName.toLowerCase().includes(query) ||
        device.issue.toLowerCase().includes(query) ||
        device.phone.includes(query)
    );
  }, [searchQuery]);

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

  const handleSaveToggle = useCallback(
    (device: Device): void => {
      const isSaved = savedDevices.some((d) => d.id === device.id);
      if (isSaved) {
        removeDevice(device.id);
      } else {
        addDevice(device);
      }
    },
    [savedDevices, addDevice, removeDevice]
  );

  const isDeviceSaved = useCallback(
    (deviceId: string): boolean => {
      return savedDevices.some((d) => d.id === deviceId);
    },
    [savedDevices]
  );

  const renderItem = useCallback(
    ({ item }: { item: Device }) => (
      <ItemCard
        device={item}
        onPress={handleCardPress}
        onSave={handleSaveToggle}
        isSaved={isDeviceSaved(item.id)}
      />
    ),
    [handleCardPress, handleSaveToggle, isDeviceSaved]
  );

  const keyExtractor = useCallback((item: Device): string => item.id, []);

  const handleClearSearch = (): void => {
    setSearchQuery('');
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <View style={styles.header}>
        <Text style={styles.title}>J&R Tech</Text>
        <Text style={styles.subtitle}>Tienda de Reparacion de Celulares</Text>
      </View>

      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar por marca, modelo, cliente..."
          placeholderTextColor={COLORS.textLight}
          value={searchQuery}
          onChangeText={setSearchQuery}
          returnKeyType="search"
          clearButtonMode="while-editing"
          autoCapitalize="none"
          autoCorrect={false}
        />
        {searchQuery.length > 0 && (
          <Pressable onPress={handleClearSearch} style={styles.clearButton}>
            <Text style={styles.clearIcon}>✕</Text>
          </Pressable>
        )}
      </View>

      <View style={styles.statsBar}>
        <Text style={styles.statsText}>
          {filteredDevices.length} de {mockDevices.length} dispositivos
        </Text>
        {searchQuery.length > 0 && (
          <Pressable onPress={handleClearSearch}>
            <Text style={styles.clearStats}>Limpiar filtro</Text>
          </Pressable>
        )}
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Dispositivos en Taller</Text>

        <FlatList
          data={filteredDevices}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={<EmptyState searchQuery={searchQuery} />}
          keyboardShouldPersistTaps="handled"
        />
      </View>
    </KeyboardAvoidingView>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    marginHorizontal: SPACING.lg,
    marginTop: -SPACING.lg,
    marginBottom: SPACING.md,
    borderRadius: RADIUS.md,
    paddingHorizontal: SPACING.md,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: SPACING.sm,
  },
  searchInput: {
    flex: 1,
    fontSize: TYPOGRAPHY.body.fontSize,
    color: COLORS.textPrimary,
    paddingVertical: SPACING.md,
  },
  clearButton: {
    padding: SPACING.xs,
    marginLeft: SPACING.xs,
  },
  clearIcon: {
    fontSize: 16,
    color: COLORS.textMuted,
  },
  statsBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.xl,
    paddingBottom: SPACING.sm,
  },
  statsText: {
    fontSize: TYPOGRAPHY.caption.fontSize,
    color: COLORS.textMuted,
  },
  clearStats: {
    fontSize: TYPOGRAPHY.caption.fontSize,
    color: COLORS.accent,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    paddingHorizontal: SPACING.lg,
  },
  sectionTitle: {
    fontSize: TYPOGRAPHY.sectionTitle.fontSize,
    fontWeight: TYPOGRAPHY.sectionTitle.fontWeight,
    color: COLORS.textPrimary,
    marginBottom: SPACING.lg,
    marginTop: SPACING.lg,
  },
  listContent: {
    paddingBottom: SPACING.xxl,
  },
  emptyContainer: {
    alignItems: 'center',
    paddingVertical: SPACING.xxl * 2,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: SPACING.lg,
  },
  emptyTitle: {
    fontSize: TYPOGRAPHY.sectionTitle.fontSize,
    fontWeight: TYPOGRAPHY.sectionTitle.fontWeight,
    color: COLORS.textPrimary,
    marginBottom: SPACING.sm,
  },
  emptySubtitle: {
    fontSize: TYPOGRAPHY.body.fontSize,
    color: COLORS.textMuted,
    textAlign: 'center',
    paddingHorizontal: SPACING.xl,
  },
});

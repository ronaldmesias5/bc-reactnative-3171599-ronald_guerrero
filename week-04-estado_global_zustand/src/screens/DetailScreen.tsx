import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { HomeStackParamList } from '../navigation/types';
import { mockDevices, getStatusLabel, getStatusColor, formatCurrency } from '../data/mockData';
import { useSavedStore } from '../stores/savedStore';
import { COLORS, TYPOGRAPHY, SPACING, RADIUS } from '../theme';

type DetailScreenProps = NativeStackScreenProps<HomeStackParamList, 'HomeDetail'>;

export const DetailScreen: React.FC<DetailScreenProps> = ({ route, navigation }) => {
  const { id } = route.params;
  const device = mockDevices.find((d) => d.id === id);

  // Selectores especificos del store (optimizan re-renders)
  const savedDevices = useSavedStore((state) => state.savedDevices);
  const addDevice = useSavedStore((state) => state.addDevice);
  const removeDevice = useSavedStore((state) => state.removeDevice);

  const isSaved = savedDevices.some((d) => d.id === id);

  const handleToggleSave = (): void => {
    if (!device) return;
    if (isSaved) {
      removeDevice(device.id);
    } else {
      addDevice(device);
    }
  };

  if (!device) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Dispositivo no encontrado</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: device.imageUrl }} style={styles.image} resizeMode="cover" />

      <View style={styles.content}>
        <Text style={styles.brand}>{device.brand}</Text>
        <Text style={styles.model}>{device.model}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Informacion del Cliente</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Nombre:</Text>
            <Text style={styles.value}>{device.customerName}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Telefono:</Text>
            <Text style={styles.value}>{device.phone}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Detalles de la Reparacion</Text>
          <View style={styles.row}>
            <Text style={styles.label}>Problema:</Text>
            <Text style={styles.value}>{device.issue}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Estado:</Text>
            <View style={[styles.statusBadge, { backgroundColor: getStatusColor(device.status) }]}>
              <Text style={styles.statusText}>{getStatusLabel(device.status)}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Fecha:</Text>
            <Text style={styles.value}>{device.receivedDate}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Costo:</Text>
            <Text style={styles.cost}>{formatCurrency(device.estimatedCost)}</Text>
          </View>
        </View>

        {/* Boton Guardar / Quitar usando el store Zustand */}
        <Pressable
          style={({ pressed }) => [
            styles.saveToggleButton,
            isSaved ? styles.savedButton : styles.unsavedButton,
            pressed && styles.buttonPressed,
          ]}
          onPress={handleToggleSave}
        >
          <Ionicons
            name={isSaved ? 'heart' : 'heart-outline'}
            size={20}
            color={COLORS.textInverse}
          />
          <Text style={styles.saveToggleText}>
            {isSaved ? 'Quitar de Guardados' : 'Guardar dispositivo'}
          </Text>
        </Pressable>

        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>← Volver</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  image: {
    width: '100%',
    height: 300,
    backgroundColor: '#eeeeee',
  },
  content: {
    padding: SPACING.xl,
  },
  brand: {
    fontSize: TYPOGRAPHY.cardBrand.fontSize,
    fontWeight: TYPOGRAPHY.cardBrand.fontWeight,
    color: COLORS.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  model: {
    fontSize: 32,
    fontWeight: '800',
    color: COLORS.textPrimary,
    marginTop: SPACING.xs,
    marginBottom: SPACING.xl,
  },
  section: {
    marginBottom: SPACING.xl,
  },
  sectionTitle: {
    fontSize: TYPOGRAPHY.sectionTitle.fontSize,
    fontWeight: TYPOGRAPHY.sectionTitle.fontWeight,
    color: COLORS.textPrimary,
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
    width: 80,
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
  cost: {
    fontSize: TYPOGRAPHY.body.fontSize,
    fontWeight: '700',
    color: COLORS.accent,
  },
  saveToggleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.xl,
    borderRadius: RADIUS.md,
    marginTop: SPACING.lg,
    gap: SPACING.sm,
  },
  unsavedButton: {
    backgroundColor: COLORS.primary,
  },
  savedButton: {
    backgroundColor: COLORS.accentRed,
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  saveToggleText: {
    color: COLORS.textInverse,
    fontSize: TYPOGRAPHY.body.fontSize,
    fontWeight: '600',
  },
  backButton: {
    backgroundColor: COLORS.primaryLight,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.xl,
    borderRadius: RADIUS.md,
    alignItems: 'center',
    marginTop: SPACING.md,
  },
  backButtonText: {
    color: COLORS.textInverse,
    fontSize: TYPOGRAPHY.body.fontSize,
    fontWeight: '600',
  },
  errorText: {
    fontSize: TYPOGRAPHY.body.fontSize,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginTop: SPACING.xxl,
  },
});

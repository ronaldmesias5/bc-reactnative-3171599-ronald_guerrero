import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ItemCard } from '../components/ItemCard';
import { mockDevices } from '../data/mockData';
import { Device } from '../types';
import { COLORS, TYPOGRAPHY, SPACING } from '../theme';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { HomeStackParamList } from '../navigation/types';

type HomeScreenNavProp = NativeStackNavigationProp<HomeStackParamList, 'HomeList'>;

interface HomeScreenProps {
  navigation: HomeScreenNavProp;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const handleCardPress = (device: Device): void => {
    navigation.navigate('HomeDetail', {
      id: device.id,
      brand: device.brand,
      model: device.model,
    });
  };

  const renderItem = ({ item }: { item: Device }) => (
    <ItemCard device={item} onPress={handleCardPress} />
  );

  const keyExtractor = (item: Device): string => item.id;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>J&R Tech</Text>
        <Text style={styles.subtitle}>Tienda de Reparacion de Celulares</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Dispositivos en Taller</Text>

        <FlatList
          data={mockDevices}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
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
});

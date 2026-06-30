import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Device } from '../types';
import { getStatusLabel, getStatusColor } from '../data/mockData';

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
        
        <Text style={styles.date}>Recibido: {device.receivedDate}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000000',
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
    backgroundColor: '#eeeeee',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  brand: {
    fontSize: 14,
    fontWeight: '600',
    color: '#888888',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  model: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    marginTop: 2,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    color: '#888888',
    width: 60,
  },
  value: {
    fontSize: 13,
    color: '#333333',
    flex: 1,
  },
  issue: {
    fontSize: 13,
    color: '#333333',
    flex: 1,
    flexWrap: 'wrap',
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#ffffff',
  },
  date: {
    fontSize: 11,
    color: '#999999',
    marginTop: 8,
  },
});

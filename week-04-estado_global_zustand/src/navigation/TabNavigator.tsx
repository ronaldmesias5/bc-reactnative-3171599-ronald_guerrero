import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { HomeStack } from './HomeStack';
import { SavedScreen } from '../screens/SavedScreen';
import type { RootTabParamList } from './types';
import { useSavedStore } from '../stores/savedStore';
import { COLORS, TYPOGRAPHY } from '../theme';

const Tab = createBottomTabNavigator<RootTabParamList>();

function SavedTabBadge(): React.JSX.Element {
  const count = useSavedStore((state) => state.savedDevices.length);

  if (count === 0) return <></>;

  return (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{count > 9 ? '9+' : count}</Text>
    </View>
  );
}

export function TabNavigator(): React.JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else {
            iconName = focused ? 'heart' : 'heart-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.accent,
        tabBarInactiveTintColor: COLORS.textMuted,
        tabBarStyle: {
          backgroundColor: COLORS.surface,
          borderTopColor: COLORS.border,
          borderTopWidth: 1,
        },
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: COLORS.textInverse,
        headerTitleStyle: { fontWeight: '600' },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{ title: 'Inicio', headerShown: false }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          title: 'Guardados',
          tabBarIcon: ({ focused, color, size }) => (
            <View>
              <Ionicons
                name={focused ? 'heart' : 'heart-outline'}
                size={size}
                color={color}
              />
              <SavedTabBadge />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    top: -4,
    right: -8,
    backgroundColor: COLORS.accentRed,
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: COLORS.textInverse,
    fontSize: 10,
    fontWeight: '700',
  },
});

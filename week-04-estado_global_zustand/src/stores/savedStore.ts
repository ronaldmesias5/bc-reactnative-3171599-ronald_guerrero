import { create } from 'zustand';
import type { Device } from '../types';

/**
 * Interfaz del store de dispositivos guardados (favoritos)
 * Semana 04 - Estado Global con Zustand
 */
interface SavedStore {
  /** Lista de dispositivos guardados como favoritos */
  savedDevices: Device[];
  /** Agrega un dispositivo a favoritos. No duplica si ya existe */
  addDevice: (device: Device) => void;
  /** Elimina un dispositivo de favoritos por su ID */
  removeDevice: (deviceId: string) => void;
  /** Verifica si un dispositivo esta en favoritos por su ID */
  isSaved: (deviceId: string) => boolean;
  /** Elimina todos los dispositivos de favoritos */
  clearAll: () => void;
  /** Cantidad de dispositivos guardados */
  count: () => number;
}

/**
 * Store Zustand para gestionar los dispositivos guardados (favoritos).
 * Expone acciones para agregar, eliminar, verificar y limpiar.
 * Se usa con selectores especificos para optimizar re-renders.
 *
 * @example
 * const savedDevices = useSavedStore((state) => state.savedDevices);
 * const addDevice = useSavedStore((state) => state.addDevice);
 */
export const useSavedStore = create<SavedStore>((set, get) => ({
  savedDevices: [],

  addDevice: (device) => {
    const exists = get().savedDevices.some((d) => d.id === device.id);
    if (exists) return; // No duplicar
    set((state) => ({
      savedDevices: [...state.savedDevices, device],
    }));
  },

  removeDevice: (deviceId) =>
    set((state) => ({
      savedDevices: state.savedDevices.filter((d) => d.id !== deviceId),
    })),

  isSaved: (deviceId) => get().savedDevices.some((d) => d.id === deviceId),

  clearAll: () => set({ savedDevices: [] }),

  count: () => get().savedDevices.length,
}));

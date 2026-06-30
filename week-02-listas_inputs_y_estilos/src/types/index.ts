/**
 * Tipos para la aplicacion de Tienda de Reparacion de Celulares
 * Semana 02 - Listas, Inputs y Estilos
 */

export type DeviceStatus = 'pending' | 'in-progress' | 'completed';

export interface Device {
  id: string;
  brand: string;
  model: string;
  customerName: string;
  phone: string;
  issue: string;
  status: DeviceStatus;
  imageUrl: string;
  receivedDate: string;
  estimatedCost: number;
}

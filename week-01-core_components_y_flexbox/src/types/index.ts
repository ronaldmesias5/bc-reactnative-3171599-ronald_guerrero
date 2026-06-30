/**
 * Tipos para la aplicación de Tienda de Reparación de Celulares
 * Semana 01 - Core Components y Flexbox
 */

export interface Device {
  id: string;
  brand: string;
  model: string;
  customerName: string;
  issue: string;
  status: 'pending' | 'in-progress' | 'completed';
  imageUrl: string;
  receivedDate: string;
}

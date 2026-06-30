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

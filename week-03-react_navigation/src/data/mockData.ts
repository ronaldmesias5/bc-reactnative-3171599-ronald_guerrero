import { Device, DeviceStatus } from '../types';

export const mockDevices: Device[] = [
  {
    id: '1',
    brand: 'Samsung',
    model: 'Galaxy S23 Ultra',
    customerName: 'Maria Garcia',
    phone: '310-555-0001',
    issue: 'Pantalla rota',
    status: 'in-progress',
    imageUrl: 'https://www.clevercel.co/cdn/shop/files/Portadas_SamsungS23Ultra.webp?v=1757093060',
    receivedDate: '2026-04-25',
    estimatedCost: 350000,
  },
  {
    id: '2',
    brand: 'Apple',
    model: 'iPhone 15 Pro',
    customerName: 'Carlos Mendoza',
    phone: '320-555-0002',
    issue: 'Bateria se descarga rapido',
    status: 'pending',
    imageUrl: 'https://cdnx.jumpseller.com/tiquemobile/image/44698418/thumb/960/960?1705870499',
    receivedDate: '2026-04-28',
    estimatedCost: 280000,
  },
  {
    id: '3',
    brand: 'Xiaomi',
    model: 'Redmi Note 13',
    customerName: 'Ana Lopez',
    phone: '315-555-0003',
    issue: 'No carga - Puerto danado',
    status: 'completed',
    imageUrl: 'https://i5.walmartimages.com/seo/Xiaomi-Redmi-Note-13-4G-6-67-GSM-Unlocked-T-Mobile-Mint-Tello-Global-Global-ROM-256GB-8GB-Midnight-Black_606d2610-e64e-4133-b3b4-729c19db3691.55afab698a1222d58e12eb9cea5111d9.jpeg',
    receivedDate: '2026-04-20',
    estimatedCost: 150000,
  },
  {
    id: '4',
    brand: 'Motorola',
    model: 'Edge 40 Pro',
    customerName: 'Luis Rodriguez',
    phone: '318-555-0004',
    issue: 'Camara trasera no funciona',
    status: 'in-progress',
    imageUrl: 'https://m.media-amazon.com/images/I/61AVh75q-zL.jpg',
    receivedDate: '2026-04-27',
    estimatedCost: 220000,
  },
  {
    id: '5',
    brand: 'Samsung',
    model: 'Galaxy A54',
    customerName: 'Pedro Sanchez',
    phone: '311-555-0005',
    issue: 'No enciende despues de caida',
    status: 'pending',
    imageUrl: 'https://m.media-amazon.com/images/I/71O0Q3W5yJL._AC_SL1500_.jpg',
    receivedDate: '2026-04-29',
    estimatedCost: 400000,
  },
  {
    id: '6',
    brand: 'Apple',
    model: 'iPhone 14',
    customerName: 'Laura Torres',
    phone: '319-555-0006',
    issue: 'Problema con Face ID',
    status: 'completed',
    imageUrl: 'https://m.media-amazon.com/images/I/61bK6PMOC3L._AC_SL1500_.jpg',
    receivedDate: '2026-04-18',
    estimatedCost: 200000,
  },
  {
    id: '7',
    brand: 'Google',
    model: 'Pixel 8 Pro',
    customerName: 'Andres Vargas',
    phone: '317-555-0007',
    issue: 'Sobrecalentamiento',
    status: 'in-progress',
    imageUrl: 'https://m.media-amazon.com/images/I/71o8j7-h-LL._AC_SL1500_.jpg',
    receivedDate: '2026-04-26',
    estimatedCost: 300000,
  },
  {
    id: '8',
    brand: 'Huawei',
    model: 'P60 Pro',
    customerName: 'Diana Castro',
    phone: '314-555-0008',
    issue: 'Parlante distorsionado',
    status: 'pending',
    imageUrl: 'https://m.media-amazon.com/images/I/61N8f6n3aJL._AC_SL1000_.jpg',
    receivedDate: '2026-04-30',
    estimatedCost: 120000,
  },
];

export const getStatusLabel = (status: DeviceStatus): string => {
  const labels: Record<DeviceStatus, string> = {
    pending: 'Pendiente',
    'in-progress': 'En reparacion',
    completed: 'Completado',
  };
  return labels[status];
};

export const getStatusColor = (status: DeviceStatus): string => {
  const colors: Record<DeviceStatus, string> = {
    pending: '#cf4419',
    'in-progress': '#03b421',
    completed: '#122dc9',
  };
  return colors[status];
};

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(value);
};

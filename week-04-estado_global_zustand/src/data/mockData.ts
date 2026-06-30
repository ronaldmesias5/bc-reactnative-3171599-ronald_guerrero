import { Device, DeviceStatus } from '../types';

/**
 * Datos de ejemplo - 12 dispositivos a reparar
 * Tienda de Reparacion de Celulares - Semana 04
 */

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
    imageUrl: 'https://http2.mlstatic.com/D_Q_NP_847451-MLA99403069188_112025-O.webp',
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
    imageUrl: 'data:image/jpeg;base64,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',
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
    imageUrl: 'data:image/jpeg;base64,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',
    receivedDate: '2026-04-30',
    estimatedCost: 120000,
  },
  {
    id: '9',
    brand: 'OnePlus',
    model: '12',
    customerName: 'Jorge Martinez',
    phone: '316-555-0009',
    issue: 'Botones laterales no responden',
    status: 'in-progress',
    imageUrl: 'https://assets.encargomio.com/img/products/OnePlus_12_16_GB_de_/17191213811.jpg',
    receivedDate: '2026-05-02',
    estimatedCost: 180000,
  },
  {
    id: '10',
    brand: 'Realme',
    model: 'GT Neo 5',
    customerName: 'Sofia Jimenez',
    phone: '313-555-0010',
    issue: 'Pantalla con lineas verticales',
    status: 'pending',
    imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_923803-MLA71407909996_092023-O.webp',
    receivedDate: '2026-05-01',
    estimatedCost: 250000,
  },
  {
    id: '11',
    brand: 'Sony',
    model: 'Xperia 1 V',
    customerName: 'Ricardo Moreno',
    phone: '312-555-0011',
    issue: 'Conector de auriculares danado',
    status: 'in-progress',
    imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_806143-MCO52459753144_112022-O.webp',
    receivedDate: '2026-04-24',
    estimatedCost: 100000,
  },
  {
    id: '12',
    brand: 'Nothing',
    model: 'Phone 2',
    customerName: 'Camila Rios',
    phone: '321-555-0012',
    issue: 'Actualizacion fallida - no enciende',
    status: 'completed',
    imageUrl: 'https://http2.mlstatic.com/D_Q_NP_923337-MLA99480292496_112025-O.webp',
    receivedDate: '2026-04-10',
    estimatedCost: 300000,
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

import { Device, DeviceStatus } from '../types';

/**
 * Datos de ejemplo - 10+ dispositivos a reparar
 * Tienda de Reparacion de Celulares - Semana 02
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
    issue: 'No carga - Puerto dañado',
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
    imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_847451-MLA99403069188_112025-O.webp',
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
    imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_749152-MLA99563223740_122025-O.webp',
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
    imageUrl: 'https://img01.huaweifile.com/sg/ms/co/pms/uomcdn/CO_HW_B2C/pms/202304/gbom/6941487293490/800_800_0A72857BAC1FBEFDB6DCF257F66C1493mp.png',
    receivedDate: '2026-04-30',
    estimatedCost: 120000,
  },
  {
    id: '9',
    brand: 'OnePlus',
    model: '12 5G',
    customerName: 'Juan Herrera',
    phone: '316-555-0009',
    issue: 'Boton de encendido suelto',
    status: 'completed',
    imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_818566-MCO76975498422_062024-O.webp',
    receivedDate: '2026-04-15',
    estimatedCost: 80000,
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
    issue: 'Conector de auriculares dañado',
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
    estimatedCost: 180000,
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

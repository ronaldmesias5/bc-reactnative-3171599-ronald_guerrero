import { Device } from '../types';

export const mockDevices: Device[] = [
  {
    id: '1',
    brand: 'Samsung',
    model: 'Galaxy S23 Ultra',
    customerName: 'María García',
    issue: 'Pantalla rota',
    status: 'in-progress',
    imageUrl: 'https://www.clevercel.co/cdn/shop/files/Portadas_SamsungS23Ultra.webp?v=1757093060',
    receivedDate: '2026-04-25',
  },
  {
    id: '2',
    brand: 'Apple',
    model: 'iPhone 15 Pro',
    customerName: 'Carlos Mendoza',
    issue: 'Batería se descarga rápido',
    status: 'pending',
    imageUrl: 'https://cdnx.jumpseller.com/tiquemobile/image/44698418/thumb/960/960?1705870499',
    receivedDate: '2026-04-28',
  },
  {
    id: '3',
    brand: 'Xiaomi',
    model: 'Redmi Note 13',
    customerName: 'Ana López',
    issue: 'No carga - Puerto dañado',
    status: 'completed',
    imageUrl: 'https://i5.walmartimages.com/seo/Xiaomi-Redmi-Note-13-4G-6-67-GSM-Unlocked-T-Mobile-Mint-Tello-Global-Global-ROM-256GB-8GB-Midnight-Black_606d2610-e64e-4133-b3b4-729c19db3691.55afab698a1222d58e12eb9cea5111d9.jpeg',
    receivedDate: '2026-04-20',
  },
  {
    id: '4',
    brand: 'Motorola',
    model: 'Edge 40 Pro',
    customerName: 'Luis Rodríguez',
    issue: 'Cámara trasaria no funciona',
    status: 'in-progress',
    imageUrl: 'https://m.media-amazon.com/images/I/61AVh75q-zL.jpg',
    receivedDate: '2026-04-27',
  },
];

export const getStatusLabel = (status: Device['status']): string => {
  const labels: Record<Device['status'], string> = {
    pending: 'Pendiente',
    'in-progress': 'En reparación',
    completed: 'Completado',
  };
  return labels[status];
};

export const getStatusColor = (status: Device['status']): string => {
  const colors: Record<Device['status'], string> = {
    pending: '#cf4419',
    'in-progress': '#03b421',
    completed: '#122dc9',
  };
  return colors[status];
};

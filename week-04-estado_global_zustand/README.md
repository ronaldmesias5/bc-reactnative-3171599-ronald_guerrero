# J&R Tech - Week 04: Estado Global + Zustand

> **Bootcamp React Native - Semana 04**

Aplicacion movil con navegacion completa y estado global centralizado usando Zustand para la gestion de dispositivos en una tienda de reparacion de celulares.

---

## Dominio Asignado

**Tienda de Reparacion de Celulares**  
Entidades principales: `devices`, `repairs`, `parts`, `customers`.

---

## Stack Tecnologico

| Tecnologia | Version |
|------------|---------|
| React Native | 0.81.5 |
| Expo SDK | 54 |
| React | 19.1.0 |
| TypeScript | 5.9.2 |
| pnpm | 10.x |
| Zustand | 5.0.0 |
| React Navigation | 7.1.6 (native), 7.3.10 (stack, tabs) |

---

## Funcionalidades (Semana 04)

- **Zustand** para estado global con persistencia (savedDevices)
- **Tab Navigator** con 3 pestañas: Dispositivos, Guardados, Ajustes
- **Stack Navigator anidado** en Home para navegacion de lista a detalle
- **Navegacion tipada** con TypeScript (RootStackParamList, MainTabParamList)
- **Params entre pantallas** - paso de id al detalle
- **Iconos Ionicons** en Tab Bar con estado activo/inactivo
- **Header personalizado** con colores del tema
- **Pantalla de detalle** con informacion completa del dispositivo
- **Zustand store** para dispositivos guardados con acciones (addDevice, removeDevice, clearAll, count, isSaved)

---

## Estructura del Proyecto

```
src/
  stores/
    savedStore.ts       # Zustand store para dispositivos guardados
  navigation/
    types.ts            # RootStackParamList, MainTabParamList
    HomeStack.tsx       # Stack Navigator (HomeList -> HomeDetail)
    TabNavigator.tsx    # Tab Navigator (Dispositivos, Guardados, Ajustes)
  screens/
    HomeScreen.tsx      # Lista de dispositivos con FlatList
    DetailScreen.tsx    # Detalle del dispositivo con params
    SavedScreen.tsx     # Dispositivos guardados
    SettingsScreen.tsx  # Pantalla de ajustes
  components/
    ItemCard.tsx        # Tarjeta reutilizable para dispositivos
  data/
    mockData.ts         # 10 dispositivos con helpers
  types/
    index.ts            # Tipos Device y DeviceStatus
  theme/
    index.ts            # COLORS, TYPOGRAPHY, SPACING, RADIUS
```

---

## Instalacion

```bash
npm install --legacy-peer-deps
```

## Ejecucion

### Modo desarrollo (Expo Go)
```bash
npm start
```

### Modo web (navegador)
```bash
npm run web
```

---

## Criterios de Evaluacion Cumplidos

- [x] Zustand store con estado global para dispositivos guardados
- [x] Tab Navigator con 3 pestañas (Dispositivos, Guardados, Ajustes)
- [x] Stack Navigator anidado en Home (HomeList -> HomeDetail)
- [x] Params tipados (id) al navegar al detalle
- [x] Iconos Ionicons en Tab Bar
- [x] TypeScript sin `any` - tipos RootStackParamList y MainTabParamList
- [x] Header personalizado con colores del tema
- [x] Navegacion funcional entre pantallas
- [x] Adaptado al dominio (J&R Tech - Reparacion de Celulares)

---

## Navegacion

- **Dispositivos Tab**: Muestra lista de dispositivos con FlatList
  - Tap en tarjeta --> Navega a DetailScreen con params
  - Back button --> Regresa a HomeList
- **Guardados Tab**: Dispositivos marcados como favoritos con Zustand
- **Ajustes Tab**: Pantalla de configuracion
- **Detail Screen**: Muestra informacion completa del dispositivo
  - Recibe params (id) via route.params
  - Busca dispositivo en mockData por id
  - Muestra detalles del cliente y reparacion

---

## Autor

**Ronal** - Aprendiz SENA, Analisis y Desarrollo de Software.
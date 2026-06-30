# J&R Tech - Week 03: React Navigation 7

> **Bootcamp React Native - Semana 03**

Aplicacion movil con navegacion completa usando React Navigation 7 para la gestion de dispositivos en una tienda de reparacion de celulares.

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
| React Navigation | 7.1.6 (native), 7.3.10 (stack, tabs) |

---

## Funcionalidades (Semana 03)

- **Tab Navigator** con 2 pestañas: Home y Favoritos
- **Stack Navigator anidado** en Home para navegacion de lista a detalle
- **Navegacion tipada** con TypeScript (RootTabParamList, HomeStackParamList)
- **Params entre pantallas** - paso de id, brand y model al detalle
- **Iconos Ionicons** en Tab Bar con estado focused/unfocused
- **Header personalizado** con colores del tema
- **Pantalla de detalle** con informacion completa del dispositivo

---

## Estructura del Proyecto

```
src/
  navigation/
    types.ts          # RootTabParamList, HomeStackParamList
    HomeStack.tsx     # Stack Navigator (HomeList -> HomeDetail)
    TabNavigator.tsx  # Tab Navigator (Home, Favorites)
  screens/
    HomeScreen.tsx    # Lista de dispositivos con FlatList
    DetailScreen.tsx  # Detalle del dispositivo con params
    FavoritesScreen.tsx # Pantalla de favoritos
  components/
    ItemCard.tsx      # Tarjeta reutilizable para dispositivos
  data/
    mockData.ts       # 8 dispositivos con helpers
  types/
    index.ts          # Tipos Device y DeviceStatus
  theme/
    index.ts          # COLORS, TYPOGRAPHY, SPACING, RADIUS
```

---

## Instalacion

```bash
pnpm install
```

## Ejecucion

### Modo desarrollo (Expo Go)
```bash
pnpm start
```

### Modo web (navegador)
```bash
pnpm web
```

---

## Criterios de Evaluacion Cumplidos

- [x] Tab Navigator con 2 pestañas (Home, Favorites)
- [x] Stack Navigator anidado en Home (HomeList -> HomeDetail)
- [x] Params tipados (id, brand, model) al navegar al detalle
- [x] Iconos Ionicons en Tab Bar
- [x] TypeScript sin `any` - tipos RootTabParamList y HomeStackParamList
- [x] Header personalizado con colores del tema
- [x] Navegacion funcional entre pantallas
- [x] Adaptado al dominio (J&R Tech - Reparacion de Celulares)

---

## Navegacion

- **Home Tab**: Muestra lista de dispositivos con FlatList
  - Tap en tarjeta -> Navega a DetailScreen con params
  - Back button -> Regresa a HomeList
- **Favorites Tab**: Pantalla placeholder para favoritos
- **Detail Screen**: Muestra informacion completa del dispositivo
  - Recibe params (id, brand, model) via route.params
  - Busca dispositivo en mockData por id
  - Muestra detalles del cliente y reparacion

---

## Autor

**Ronal** - Aprendiz SENA, Analisis y Desarrollo de Software.

# J&R Tech - Week 02: Listas, Inputs y Estilos

> **Bootcamp React Native - Semana 02**

Aplicacion movil con `FlatList`, `TextInput` y sistema de theming para la gestion de dispositivos en una tienda de reparacion de celulares.

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

---

## Funcionalidades (Semana 02)

- **FlatList** con 12 dispositivos y virtualizacion eficiente
- **Busqueda en tiempo real** con `TextInput` filtrando por marca, modelo, cliente y problema
- **Estado vacio** personalizado cuando la busqueda no encuentra resultados
- **Theming** centralizado con `COLORS`, `TYPOGRAPHY`, `SPACING`, `RADIUS`
- **KeyboardAvoidingView** para gestionar el teclado virtual
- `useMemo` para filtrado optimizado
- `useCallback` para `renderItem` y funciones
- `keyExtractor` usando `id` del item (no indice del array)

---

## Estructura del Proyecto

```
src/
  theme/
    index.ts          # Constantes reutilizables (COLORS, TYPOGRAPHY, SPACING, RADIUS)
  types/
    index.ts          # Tipos TypeScript (Device, DeviceStatus)
  data/
    mockData.ts       # 12 dispositivos con helpers de formato
  components/
    ItemCard.tsx      # Tarjeta reutilizable con 5+ campos
  screens/
    HomeScreen.tsx    # FlatList + TextInput + busqueda + estado vacio
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

- [x] FlatList con `keyExtractor` por ID (no indice)
- [x] TextInput con busqueda funcional en tiempo real
- [x] `useMemo` para filtrado
- [x] `useCallback` para renderItem y funciones
- [x] Componente `ItemCard` con 5+ campos (marca, modelo, cliente, telefono, problema, estado, fecha, costo)
- [x] Estado vacio personalizado con icono y mensaje contextual
- [x] `KeyboardAvoidingView` correcto con `keyboardVerticalOffset`
- [x] Constantes de tema (`COLORS`, `TYPOGRAPHY`, `SPACING`, `RADIUS`)
- [x] TypeScript sin `any`

---

## Autor

**Ronal** - Aprendiz SENA, Analisis y Desarrollo de Software.

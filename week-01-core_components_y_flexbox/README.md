# J&R Tech - Reparacion de Celulares

> **Bootcamp React Native - Semana 01: Core Components y Flexbox**

Aplicacion movil desarrollada con **React Native** y **Expo** para la gestion de dispositivos en una tienda de reparacion de celulares.

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

## Estructura del Proyecto

```
src/
  types/
    index.ts          # Tipos TypeScript (Device)
  data/
    mockData.ts       # Datos de ejemplo y helpers
  components/
    ItemCard.tsx      # Tarjeta reutilizable de dispositivo
  screens/
    HomeScreen.tsx    # Pantalla principal con lista de dispositivos
```

---

## Instalacion

```bash
pnpm install
```

## Ejecucion

### Modo desarrollo (Expo Go en dispositivo)
```bash
pnpm start
```
Escanea el codigo QR con la app **Expo Go**.

### Modo web (navegador)
```bash
pnpm web
```

---

## Funcionalidades (Semana 01)

- Pantalla principal con lista de dispositivos a reparar.
- Tarjetas informativas con imagen, marca, modelo, cliente, problema y estado.
- Estados visualizados con colores distintos: `Pendiente`, `En reparacion`, `Completado`.
- Layout responsivo con **Flexbox** (sin `position: absolute`).
- Estilos centralizados con **StyleSheet.create**.
- Tipado estricto con **TypeScript** (sin `any`).

---

## Datos Mock

| # | Marca | Modelo | Cliente | Problema | Estado |
|---|-------|--------|---------|----------|--------|
| 1 | Samsung | Galaxy S23 Ultra | Maria Garcia | Pantalla rota | En reparacion |
| 2 | Apple | iPhone 15 Pro | Carlos Mendoza | Bateria se descarga rapido | Pendiente |
| 3 | Xiaomi | Redmi Note 13 | Ana Lopez | No carga - Puerto danado | Completado |
| 4 | Motorola | Edge 40 Pro | Luis Rodriguez | Camara trasera no funciona | En reparacion |

---

## Criterios de Evaluacion Cumplidos

- [x] App corriendo en simulador/dispositivo sin errores.
- [x] Minimo 3 tarjetas del dominio (4 implementadas).
- [x] Uso de `StyleSheet.create` (sin estilos inline).
- [x] Layout con Flexbox (`flexDirection`, `justifyContent`, `alignItems`).
- [x] Adaptacion coherente al dominio asignado.
- [x] Codigo tipado con TypeScript (interfaces definidas).

---


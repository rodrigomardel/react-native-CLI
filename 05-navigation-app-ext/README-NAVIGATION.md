# Mi Nuevo Proyecto - React Navigation

## Descripción
Proyecto de React Native 0.73.0 con React Navigation configurado y listo para usar.

## Estructura del Proyecto

```
src/
├── presentation/
│   ├── navigation/
│   │   └── AppNavigator.tsx      # Navegador principal
│   ├── screens/
│   │   ├── HomeScreen.tsx        # Pantalla principal
│   │   ├── ProfileScreen.tsx     # Pantalla de perfil
│   │   ├── SettingsScreen.tsx    # Pantalla de configuración
│   │   └── index.ts              # Exportaciones
│   └── components/               # Componentes reutilizables
└── types/
    └── navigation.ts             # Tipos de TypeScript para navegación
```

## Características Implementadas

### ✅ Navegación Stack
- Navegación entre pantallas con headers personalizados
- Paso de parámetros entre pantallas
- Navegación hacia atrás

### ✅ TypeScript
- Tipos definidos para todas las rutas
- Autocompletado en navegación
- Seguridad de tipos en parámetros

### ✅ Pantallas Incluidas
- **HomeScreen**: Pantalla principal con botones de navegación
- **ProfileScreen**: Pantalla de perfil que recibe parámetros
- **SettingsScreen**: Pantalla de configuración con switches

## Comandos para Ejecutar

### Android
```bash
npx react-native run-android
```

### iOS
```bash
cd ios && pod install && cd ..
npx react-native run-ios
```

## Dependencias Instaladas

- `@react-navigation/native`: Navegación base
- `@react-navigation/native-stack`: Navegación stack
- `@react-navigation/bottom-tabs`: Navegación por pestañas
- `@react-navigation/drawer`: Navegación drawer
- `react-native-screens`: Optimización de rendimiento
- `react-native-safe-area-context`: Manejo de áreas seguras

## Próximos Pasos

1. **Agregar Tab Navigation**: Implementar navegación por pestañas
2. **Agregar Drawer Navigation**: Implementar menú lateral
3. **Personalizar Temas**: Crear sistema de temas
4. **Agregar Animaciones**: Implementar transiciones personalizadas

## Notas Importantes

- El proyecto usa React Native 0.73.0 para máxima estabilidad
- Todas las pantallas están tipadas con TypeScript
- La estructura sigue las mejores prácticas de React Navigation
- Los estilos están optimizados para iOS y Android


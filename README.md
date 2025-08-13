# React Native CLI Workspace

Este es un monorepo que contiene dos proyectos:

## 📁 Estructura del Proyecto

```
react-native-CLI/
├── 01-react-foundation/     # Aplicación web React + TypeScript + Vite
├── 02-my-first-app/         # Aplicación React Native
├── package.json             # Configuración del workspace
├── turbo.json              # Configuración de Turbo
└── README.md               # Este archivo
```

## 🚀 Comandos Disponibles

### Desde la raíz del proyecto:

```bash
# Instalar todas las dependencias
npm run install:all

# Ejecutar aplicaciones
npm run web              # Ejecutar React web (dev)
npm run mobile           # Ejecutar React Native (Android)
npm run mobile:ios       # Ejecutar React Native (iOS)

# Servidores de desarrollo
npm run start:web        # Iniciar servidor web
npm run start:mobile     # Iniciar Metro bundler

# Builds
npm run build:web        # Build de la aplicación web
npm run build:mobile     # Build de la aplicación móvil

# Testing
npm run test:web         # Tests de la aplicación web
npm run test:mobile      # Tests de la aplicación móvil

# Linting
npm run lint             # Lint en todos los proyectos
```

### Desde cada proyecto individual:

```bash
# Navegar al proyecto web
cd 01-react-foundation
npm run dev

# Navegar al proyecto móvil
cd 02-my-first-app
npx react-native run-android
```

## 🔧 Configuración

### Requisitos Previos

- Node.js >= 18.0.0
- npm >= 8.0.0
- Para React Native:
  - Android Studio
  - Xcode (solo para iOS)
  - React Native CLI

### Instalación

1. Clonar el repositorio
2. Instalar dependencias: `npm run install:all`
3. Configurar entorno de desarrollo para React Native

## 📱 Desarrollo

### Aplicación Web (01-react-foundation)
- React 18 + TypeScript
- Vite como bundler
- ESLint + Prettier
- Componentes reutilizables

### Aplicación Móvil (02-my-first-app)
- React Native 0.76
- TypeScript
- Metro bundler
- Soporte para Android e iOS

## 🤝 Compartir Código

Para compartir código entre proyectos, considera:
- Crear un paquete compartido en `/shared/`
- Usar TypeScript interfaces comunes
- Mantener lógica de negocio separada

## 📦 Workspaces

Este proyecto usa npm workspaces para:
- Gestión centralizada de dependencias
- Comandos unificados
- Compartir configuraciones comunes
- Optimización de builds con Turbo

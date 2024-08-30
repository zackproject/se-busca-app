# Se Buca

El jugador tiene que localizar a uno de los piratas en medio de una multitud de personajes, siguiendo el ícono del buscado que aparece en la parte superior del cartel. A medida que el juego progresa, la dificultad aumenta con más personajes, ocultaciones y movimientos de íconos. En la primera ronda, el jugador dispone de 60 segundos y gana 3 segundos adicionales al seleccionar al personaje correcto, pero pierde 10 segundos si elige a otro. El juego finaliza cuando se agota el tiempo, momento en el que se muestra la ubicación del personaje correcto.

## Funcionalidades

- **Modo Oscuro por Defecto**: La aplicación está configurada para utilizar el modo oscuro como estilo predeterminado.
- **Compatibilidad**: Soporta tabletas en iOS y está optimizada para dispositivos Android.
- **Interfaz**: Diseño limpio con soporte para temas oscuros y claros.

## Requisitos

- Node.js (>= 14.x)
- Expo CLI
- EAS CLI (para construcción y despliegue)

## Instalación

1. **Clona el repositorio**:
    ```bash
    git clone https://github.com/zackproject/se-busca-app
    cd se-busca
    ```

2. **Instala las dependencias**:
    ```bash
    npm install
    ```

## Ejecución en Desarrollo

Para iniciar la aplicación en modo de desarrollo:
    ```bash
    npm start 
    ```

## Build

Para construir la aplicación para distribución:


- **Android**:
    ```bash
    eas build -p android
    ```

- **Android APK**:
    ```bash
   eas build -p android --profile preview
    ```

- **iOS**:
    ```bash
    eas build -p ios
    ```

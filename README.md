# Proyecto-TalentoTech-BackEnd-Node.JS

# Proyecto Backend Node.js - TalentoTech

Este proyecto es una entrega inicial para el curso **TalentoTech**. Consiste en una pequeña aplicación de consola en Node.js que permite interactuar con la [Fake Store API](https://fakestoreapi.com/) para gestionar productos.

## Funcionalidades

- Listar todos los productos
- Obtener un producto por ID
- Agregar un nuevo producto
- Eliminar un producto por ID

## Uso

1. Instala las dependencias:

   ```
   npm install
   ```

2. Ejecuta los siguientes comandos según la acción deseada:

- **Listar productos:**

  ```
  npm run start GET products
  ```

- **Obtener producto por ID:**

  ```
  npm run start GET products/1
  ```

- **Agregar producto:**

  ```
  npm run start POST "Nombre del producto" 99.99 "categoría"
  ```

- **Eliminar producto:**
  ```
  npm run start DELETE products/1
  ```

## Estructura

- `index.js`: Entrada principal, interpreta los comandos de consola.
- `fakeStoreAPI.js`: Funciones para interactuar con la API.
- `package.json`: Configuración del proyecto y dependencias.

## Autor

Matias Castillo

---

Entrega para el curso TalentoTech - 2025

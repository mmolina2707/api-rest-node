# API Rest en Node.js

Api Rest en Node.js
Descripción: API REST para gestión de productos desarrollada con Node.js y Express.

## Instalación

```shell
npm install
```

## Configurar variables de entorno:
Copiar el archivo de ejemplo y completar los datos requeridos: 
copiar .env-example como .env
Luego editar el archivo .env con los valores correspondientes para tu entorno.

Ejecutar en modo desarrollo:
```shell
npm run dev
```
## Documentación de la API
### Obtener todos los productos:
GET /api/products
- Devuelve la lista de todos los productos.
Resp. Ej:
```bash
[
  { "id": 1, "name": "Camiseta Deportiva", "price": 150 },
  { "id": 2, "name": "Zapatos Running", "price": 1200 },
  { "id": 3, "name": "Mochila Escolar", "price": 350 }
]
```
### Buscar productos por nombre:
- GET /api/products/search?name=palabra
- Devuelve los productos cuyo nombre contiene la palabra indicada.
- Parámetros:
name (query, requerido): texto a buscar en el nombre del producto.
- Ejemplo de uso: /products/search?name=camiseta
Respuesta ejemplo:
``` bash
[{ "id": 1, "name": "Camiseta Deportiva", "price": 150 }]
```
### Obtener producto por ID.
- GET /api/products/:id
- Devuelve un producto específico por su ID.
- Parámetros:
id (path, requerido): ID del producto.
- Ejemplo de uso: /products/1
Respuesta ejemplo:
``` bash
{ "id": 1, "name": "Camiseta Deportiva", "price": 150 }
```
### Crear un producto
- POST /api/products
- Crea un nuevo producto.
``` bash
Body (JSON):
{ "name": "Nuevo Producto", "price": 999 }
```
Respuesta ejemplo:
``` bash
{ "id": 6, "name": "Nuevo Producto", "price": 999 }
```
### Actualizar un producto (PUT)
- PUT /api/products/:id
- Actualiza completamente un producto existente.
- Parámetros:
id (path, requerido): ID del producto a actualizar.
Body (JSON):
``` bash
{ "name": "Producto Actualizado", "price": 500 }
``` 
Respuesta ejemplo:
``` bash
{ "id": 1, "name": "Producto Actualizado", "price": 500 }
```
### Actualizar parcialmente un producto (PATCH)
- PATCH /api/products/:id
- Actualiza parcialmente un producto existente.
- Parámetros:
id (path, requerido): ID del producto a actualizar.
Body (JSON): Solo los campos que se desean actualizar
{ "price": 600 }
Respuesta ejemplo:
``` bash
{ "id": 1, "name": "Camiseta Deportiva", "price": 600 }
```
### Eliminar un producto
- DELETE /api/products/:id
- Elimina un producto por su ID.
Parámetros:
id (path, requerido): ID del producto a eliminar.
``` bash
Respuesta: 204 No Content
```
### Códigos de estado
200 - OK: Operación exitosa
201 - Created: Recurso creado exitosamente
204 - No Content: Recurso eliminado exitosamente
400 - Bad Request: Datos de entrada inválidos
404 - Not Found: Recurso no encontrado
### Estructura del proyecto
``` bash
src/
├── Controllers/
│   └── products.controller.js
├── Models/
│   └── Product.js
└── Routes/
    └── products.router.js
```
### Tecnologías utilizadas
- Node.js
- Express.js
- ES6 Modules
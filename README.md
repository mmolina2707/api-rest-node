# API Rest en Node.js

Api Rest en Node.js
Descripción
API REST para gestión de productos desarrollada con Node.js y Express.


# Instalación
Clonar el repositorio
Instalar dependencias:

```shell
npm install
```

Configurar variables de entorno:
# Copiar el archivo de ejemplo y completar los datos requeridos
cp .env-example .env
Luego editar el archivo .env con los valores correspondientes para tu entorno.

Ejecutar en modo desarrollo:
```shell
npm run dev
```
## Documentación de la API
Obtener todos los productos
GET /products
Descripción: Devuelve la lista de todos los productos.
Respuesta ejemplo:
[
  { "id": 1, "name": "Camiseta Deportiva", "price": 150 },
  { "id": 2, "name": "Zapatos Running", "price": 1200 },
  { "id": 3, "name": "Mochila Escolar", "price": 350 }
]
Buscar productos por nombre
GET /products/search?name=palabra
Descripción: Devuelve los productos cuyo nombre contiene la palabra indicada.
Parámetros:
name (query, requerido): texto a buscar en el nombre del producto.
Ejemplo de uso: /products/search?name=camiseta
Respuesta ejemplo:
[{ "id": 1, "name": "Camiseta Deportiva", "price": 150 }]
Obtener producto por ID
GET /products/:id
Descripción: Devuelve un producto específico por su ID.
Parámetros:
id (path, requerido): ID del producto.
Ejemplo de uso: /products/1
Respuesta ejemplo:
{ "id": 1, "name": "Camiseta Deportiva", "price": 150 }
Crear un producto
POST /products
Descripción: Crea un nuevo producto.
Body (JSON):
{ "name": "Nuevo Producto", "price": 999 }
Respuesta ejemplo:
{ "id": 6, "name": "Nuevo Producto", "price": 999 }
Actualizar un producto (PUT)
PUT /products/:id
Descripción: Actualiza completamente un producto existente.
Parámetros:
id (path, requerido): ID del producto a actualizar.
Body (JSON):
{ "name": "Producto Actualizado", "price": 500 }
Respuesta ejemplo:
{ "id": 1, "name": "Producto Actualizado", "price": 500 }
Actualizar parcialmente un producto (PATCH)
PATCH /products/:id
Descripción: Actualiza parcialmente un producto existente.
Parámetros:
id (path, requerido): ID del producto a actualizar.
Body (JSON): Solo los campos que se desean actualizar
{ "price": 600 }
Respuesta ejemplo:
{ "id": 1, "name": "Camiseta Deportiva", "price": 600 }
Eliminar un producto
DELETE /products/:id
Descripción: Elimina un producto por su ID.
Parámetros:
id (path, requerido): ID del producto a eliminar.
Respuesta: 204 No Content
Códigos de estado
200 - OK: Operación exitosa
201 - Created: Recurso creado exitosamente
204 - No Content: Recurso eliminado exitosamente
400 - Bad Request: Datos de entrada inválidos
404 - Not Found: Recurso no encontrado
Estructura del proyecto
src/
├── Controllers/
│   └── products.controller.js
├── Models/
│   └── Product.js
└── Routes/
    └── products.router.js
Tecnologías utilizadas
Node.js
Express.js
ES6 Modules
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Mati's Words
To connect:
- git clone https://github.com/Arakito14/bar-app-nxt.git
- Arakito -> Connect to MongoDB "Cluster0"
- yarn
- yarn dev
- connect to [localhost](http://localhost:3000)
- Menu -> seleccionar productos -> agregar -> ver carrito
- Conectar POSTMAN -> Export files -> Use commands to control BD
- Mesa presenta problemas

Tools
- Next JS, CSS, JSX, Yarn, MongoDB, Postman, VSC.
- yarn add @reduxjs/toolkit
- yarn add react-redux
- Exclude /.next, /.git, /node_modules, yarn.lock, .gitignore, mongo.js

Front-end
- Responsivo para  470 x 470  y menores que parece ser un buen rango para celulares acorde al internet.
- Menú de hamburgesa
- Nav Bar responsiva, "el logo se elimina"
- Lista de imagenes en sucesión

Back-end
- Fetch, GET, POST, conectado a la base de datos de mesa y productos.
- Carro responsivo con un contador de cantidad de producto.

Flujo deseado
1. Seleccionar mesas (GET)
2. Al seleccionar -> Paguina de crear pedido (almacena número de mesa “NUMBER”) -> PUT (MESA ORDER)
3. Agregar productos al carro
4. Al seleccionar carro, revisar 
    1. Dos botones
        1. Crear orden -> agregar datos de empleado.
        2. Eliminar elementos del carro.
    2. Al reiniciar la paguina el carro se reinicia también.
5. Al crear orden -> Mesa = false (PUT)
    1. Guardar (Cerrar mesa) -> Mesa = true
    2. Eliminar (DELETE method) -> Mesa = true

Estado mesa
1 = abierta
0 = cerrada
default = 1

Flagged
1 = Si
0 = No
default = 0

TODO
1. Cambiar la visibilidad en las mesas
2. Estilos
    1. Product module
3. Elementos que necesitan ser eliminados/modificados
    1. pages/table.jsx
    2. pages/product/[id]
    3. pages/menu.js
    4. pages/crear.jsx
4. ¿Se necesitan flags?
5. ¿Ir desde las mesas al pedido es lo más optimo?
6. Admin Dashboard.
7. Conectar orden.

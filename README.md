Frontend Books

para ejecutar 
 - npm run dev
- los archivos .ts deben ser .tsx
para evitar errores en compilacion.

para los test se usa Cypress

- npm install cypress -D // solo para development

para abrir cypress
- npx cypress open

abrimos la opcion e2e testing

para configurar la herramienta

elegimos chrome para usar la herramienta
y luego create new empty specs para que nos genere un test vacio.

- se pone la url del backend que tenemos que hacer el test en el archivo config.
- renombramos el archivo .cy.ts a books.
- 
apr.li/do

- promo para digital Ocean 200$

- iniciar sesion en Digital Ocean

se usara servicios en de app, no droplets
el enfoque de las app es de preocuparse por el desarrollo no por el servidor.
- crear -> Apps
luego selecionamos gitHub y elejimos el repositorio,
podria pedirnos permiso.
seleccionamos el backend
luego la rama principal estable Main
opcional el directorio de codigo. lo dejamos con  /
y selecionado el autodeploy.
le damos siguiente y nos muestra la app con un nombre
el webservice ya deberia detectar que es una app de php
verificando los datos podemos ver en la http request en routes
editamos a /backend para que el nombre aleatorio del dominio este https://nombrealeaotrio.ondigialcocean.app/backend. 
cuando subamos el frontend solo lo dejamos con / para diferenciar.
le damos guardar y back
vamos a editar el plan para ver el costo en produccion.
por defecto esta en PRO
elegimos plan basico
en size de 5$ mensual
este tiene un container
esta bien para prototipos.. 
le damos siguente y definimos variables de entorno
la primera keys sera APP_KEY
esa la extraemos del .env de laravel
puede ser la misma o generamos otra:
php artisan key:generate
copiamos nueva clave y generamos otra por si acaso
guardamos y siguente.. podemos generar mas variables pero sera mas adelante
- ahora podemos editar el nombre de la app
guardamos y next

vamos al panel de resources y hay que adicionar una bd
add resource(optional)
configuramos nuestra database, solo hay postgreSql disponible, se muestra el detalle de ram y cpu que usara, esta nos dice que no es recomendable para produccion pero mas adelante se puede actualizar.

podemos colocar el nombre a la bd.
y nos dice el costo mensual para la bd. 7$

le damos crear y agregar - create and attach
 se muestra los dos recursos en la app.
 y le damos next, next, en la region siempre buscamos la mas cercana, por defecto es la mas cercana pero podemos editarla,tambien se crea el cdn y el ssl automaticamente.

 le damos Next
 y nos da el resumen de cuanto se pagara mensualmente.

 ~ 5 + 7 = 12$

le damos create resources
esto no da un servidor activo 24/7, no nos preocupamos por nada mas
se construyen el build. y tardara unos minutos para el deploy.

con la url que nos da no tenemos nada porque no hay nada en nuestro welcome / , no existe
luego errores si le add la ruta libros..
falta configurar la conexion a la bd.

usamos 
- cat storage/logs/laravel.log 
para ver el registro de eventos 

vamos al recurso de la bd.
vemos los parametros de conexion y los copiamos.
volvemos al backend y en las variables de entorno
buscamos el boton de bulk editor que nos despliega un cuadro para texto plano y pegamos la conexion.

vamos a laravel, al .env y pegamos todas las variables de entorno respecto a la bd, que usaremos para rellenarlo, pasamos el valos de cada variable al entorno de laravel.
eliminamos loque no usamos y le damos guardar
abrimos la terminal de Digital ocean , y ejecutamos las migrations.

- php artisan migrate -- =force

muestra vacio la respuesta []

** ahora el frontend

creamos otro recurso para el frontend
elegimos desde github
elegimos la rama. el source /
autodeploy activado
next

en webservice le cambiamos el nombre solo frontend

en la ruta le dejamos que este en /
el mismo plan de 5$ 
next
configuramos variables de entorno de la aplicacion
del .env. de nextJs
el nexpublicbacken url en aprender mas..

key URL values ${APP_url} esta es la manera
pero de momento seguimos con nuestra variable.

copiamos la url del backend generado por digital ocean
url/backend como definimos en el deploy anterior
le damos guardar y podemos editar cuando tengamos otro dominio

le damos siguente y vemos el detalle del costo.

backend  7$
frontend 5$
mensual  12$

le damos create resources..
acaba el deploy y accedemos a la url

vemos que cuando creamos un libro vuelve pero no muestra el nuevo libro.
usamos la consola del backend de DO.
esto ocurre solo en nextJs.

- php artisan tinker

- Book::get()

nos muestra el libro recien creado.

como usamos en pages/index, solo de ejecuta cuando hacemos un build. cuando se hace un cambio en el repositorio y se genera el contenido estatico en el programa
 se hacen cambios en el next js para que se cambie bajo demanda tipo SSR.en el servidor.

se hace auto depoy cuando se hace cambio al codigo

y se ven los cambios al crear un libro.

































This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

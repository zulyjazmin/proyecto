Comienzo del proyecto del lado del servidor 20/9/2023

DEL LADO DEL BACK:

* hacer setup del back en js ✔️
* intalar librerias ✅
* Organizar carpetas ✅
* crear un Repo en GitHub ✅
* Crear en la raiz .gitignore y escribimos:
        node_modues/
        dist/  ✅
* Configura tu servidor: Crea un archivo de servidor en tu directorio backend (por ejemplo, server.js) y configura un servidor Express.js. Este servidor será responsable de recibir y procesar las solicitudes del frontend.✅
* configurar dotenv ✅
*  Define rutas: Define las rutas de tu API en el servidor Express.js para manejar las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) relacionadas con los productos. Por ejemplo, puedes tener rutas como /api/productos para crear y listar productos. !n de los productos. Puedes utilizar una base de datos relacional (como MySQL o PostgreSQL) o una base de datos NoSQL (como MongoDB) según tus necesidades. 
* Crea controladores: Define controladores que manejen las solicitudes para crear, leer, actualizar y eliminar productos en la base de datos. Estos controladores procesarán la información del formulario y realizarán las operaciones correspondientes en la base de datos.
* Conecta el backend a la base de datos: Configura la conexión entre tu servidor Express.js y la base de datos que hayas elegido. Utiliza una biblioteca de manejo de bases de datos como Mongoose (para MongoDB)





DEL LADO DEL FRONT:

* Maneja eventos de formulario: Agrega manejo de eventos al formulario para capturar los datos cuando el usuario lo envíe. Puedes utilizar el estado local de React para almacenar temporalmente los datos del formulario.
* Envía datos al backend: Cuando se envía el formulario, utiliza una solicitud HTTP (por ejemplo, utilizando la función fetch o Axios) para enviar los datos al backend. La solicitud debe apuntar a la ruta correspondiente en el backend (por ejemplo, /api/productos) que manejará la creación del producto.
* Recibe y muestra la respuesta del backend: Una vez que el backend procesa la solicitud y crea el producto en la base de datos, el servidor puede responder con una confirmación o los detalles del producto creado. En el frontend, muestra esta respuesta para que el usuario sepa que el formulario se ha enviado correctamente.
* Maneja errores: Implementa manejo de errores tanto en el frontend como en el backend para tratar situaciones en las que algo salga mal durante el proceso de envío del formulario.

* Prueba y depura: Realiza pruebas exhaustivas para asegurarte de que el formulario funcione correctamente y que los datos se envíen y almacenen de manera adecuada en la base de datos.

* Implementa funcionalidades adicionales: A medida que avances en tu desarrollo, considera agregar funcionalidades adicionales, como la edición y eliminación de productos, la validación del formulario, la autenticación de usuarios, etc., según las necesidades de tu aplicación.
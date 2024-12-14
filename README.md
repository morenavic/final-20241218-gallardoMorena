# Examen final frontend 18/12/2024
- Proyecto generado con [Angular CLI](https://github.com/angular/angular-cli) versión 18.2.2
- Utiliza componentes de [PrimeNG](https://v17.primeng.org/installation) versión 17



## Frontend - development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Backend - mock con json-server
El proyecto tiene un archivo db.json que se puede levantar con json-server para disponer de un set de apis de backend.

### Paquete
https://www.npmjs.com/package/json-server

### Ejecutar el server para levantar las apis (default port: 3000)
```
npx json-server ./src/assets/data/db.json
```

# Enunciado
A partir de este proyecto base, se solicita desarrollar las siguientes funcionalidades

## Funcionalidades requeridas:
- (POST) Crear la página de "Nuevo curso", donde se deberá crear un formulario y hacer el submit del mismo contra el archivo db.json
- (GET) Crear la página de "Mis cursos", donde se deberá visualizar el listado de cursos contenido en el archivo db.json 

## Desarrollo necesario:
- Agregar las rutas a las respectivas páginas/componentes en el archivo correspondiente
- Agregar los links de las páginas al menú lateral
- Crear la interface que representa la estructura del objeto curso
- Crear el servicio para invocar las apis con el método correspondiente en cada caso
- En caso de error al momento de invocar las apis, mostrar los mensajes correspondientes (a través del componente toast o en la misma pantalla)

## Importante:
- Es responsabilidad del alumno (al momento de rendir el examen) contar con el ambiente de desarrollo necesario para levantar el proyecto, crear el código y ejecutar la aplicación correctamente







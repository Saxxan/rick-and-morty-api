# Prueba Frontend

## API

Utilizar la API de Rick y Morty: https://rickandmortyapi.com/

## Objetivo general

Construir una aplicación SPA de React o Vue que acceda al API publica de Rick and Morty
simulando un módulo de gestión de usuarios donde cada uno de los personajes de la serie son
usuarios de un sistema bancario donde:

- Debe tener en cuenta que cada usuario tiene una relación con las siguientes tablas:
- Cuentas bancarias
- Prestamos
- Realizar un proceso de login / logout (Utilice Firestore e incluya redes sociales)
- Los usuarios puede hacer consignaciones y retiros de dinero
- Los usuarios pueden hacer transferencias de dinero a otros usuarios
- Los usuarios pueden pagar sus cuotas mensuales o hacer abonos a sus prestamos
- Se deben disparar notificaciones en tiempo real con cada movimiento que se realice
  en la cuenta.
- Si un usuario esta revisando su estado de cuenta y hay algún movimiento en la misma
  la tabla de datos se debe actualizar sin que el usuario recargue la pagina.
- Toda la información que no este disponible en el API de Rick and Morthy, como
  cuentas bancarias, prestamos, pagos, cuotas y demás deben ser manejadas con
  archivos json perfectamente estructurados y documentados de como utilizar .
- Implementar un diseño sencillo visualmente agradable (Boostrap)
- Implementar buenas practicas de programación.

# React App commands

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Initialize the dependencies to run locally

In the project directory run:

### `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

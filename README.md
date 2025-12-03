## Загрузить папку в рабочую область редактора и открыть во встроенном терминале директорию first-app-react, после чего активировать приложение командой npm install и затем запустить его в браузере командой npm start

## Установка react-router в проект: npm i react-router-dom@5
## Установка redux в проект: npm i redux react-redux
## Установка reduxtoolkit в проект: npm install @reduxjs/toolkit

Слияние веток main и dev, создание новой ветки patan для дальнейшего масштабирования проекта

Для разработки можно выполнить (для проекта на реакт этого не нужно, т.к. скрипт: "start": "react-scripts start" уже запускает проект в режиме разработки):
npm install -D nodemon установка nodemon в режиме dev для автоматического перезапуска приложения при изменении файлов во время разработки (добавление в scripts package.json: "dev": "nodemon index.js"). Для запуска в продакшене нужно удалить папку node_modules, а затем переустановить зависимости командой npm install --only=prod (или npm install --omit=dev). 
Команда npm run build создает оптимизированную версию приложения для продакшна, в процессе сборки используются только те зависимости, которые указаны в секции dependencies. Пакеты из секции devDependencies игнорируются, поэтому такие пакеты, как nodemon, не будут влиять на результат сборки npm run build и соответственно, удалять перед этим папку node_modules, а затем переустановить зависимости командой npm install --only=prod (или npm install --omit=dev) - не требуется! 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

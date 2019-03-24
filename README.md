# Django-React

Creating a 'Lead Manager' app to learn the configuration between django and react for future projects.

_Django configuration_

pipenv shell \*to access python commands

`pipenv install django djangorestframework django-rest-knox`

`django-admin startproject 'name of project'`

ctrl + shift + p > Python: Select Interpreter > select interpreter with project name

`python manage.py startapp 'app name'`

Add all new apps to Installed_Apps in settings.py

`python manage.py makemigrations 'model name'`

`python manage.py migrate` \*Add migrations to database

`python manage.py runserver`

_React configuration_

`pipenv shell`

`python manage.py startapp frontend`

mkdir -p ./frontend/src/components

mkdir -p ./frontend/{static,templates}/frontend

.gitignore > https://gitignore.io/api/django + node_modules

`npm i -D webpack webpack-cli`

`npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react babel-plugin-transform-class-properties`

`npm i react react-dom prop-types`

_In the root dir_

root > touch .babelrc > `{ "presets": ["@babel/preset-env", "@babel/preset-react"], "plugins": ["transform-class-properties"] }`

root > touch webpack.config.js > `module.exports = { module: { rules: [ { test: /\.js$/, exclude: /node_modules/, use: { loader: "babel-loader" } } ] } };`

root > package.json > `"scripts": { "dev": "webpack --mode development --watch ./'project name'/frontend/src/index.js -- output ./'project name'/frontend/static/frontend/main.js", "build": "webpack --mode production ./'project name'/frontend/src/index.js -- output ./'project name'/frontend/static/frontend/main.js" }`

frontend > src > touch index.js > `import App from "./components/App"`

components > touch App.js > `import React, {component} from "react"; import ReactDom from "react-dom";` > create class component named app > `ReactDOM.render(<App />, document.getElementById("app"));`

templates > frontend > touch index.html > generate html boilerplate >

<body>
    <div class="app"></div>
    {% load static %}
    <script src="{% static "frontend/main.js" %}"></script>
</body>

settings.py > add `frontend` to apps

frontend > views.py > `def index(request): return render(request, 'frontend/index.html')`

frontend > urls.py > `from django.urls import path from . import views urlpatterns = [path('', views.index)]`

project folder > urls.py > `path('', include ('frontend.urls')),` \*Add as the first path

root > npm run dev \*Runs the script we created to make our compiled build file

# Fast kit deployment html, css, javascript, scss, sass

Hi ! This is my first project template.
Use this repository to build your new beautiful website or app project !

I made this repository with the write logic of BEM. More info in this [BEM link](https://css-tricks.com/bem-101/)

I try to make the write logic more readable and maintainable as well as.


## 1. Clone this repository

```
$ git clone https://github.com/PierreRtec/fast_kit_deployment
```
## 2. Prerequisites

You'll need to install node.js in your computer.

→ install [node.js](https://nodejs.org/en/)

### 2.1 Windows :<br>
use this shortcut<br>

→ **Win+R**
→ write **"cmd"** and presse **Enter**
→ verify that the node.js installation was successfull with
```
node -v
```
and
```
npm -v
```

If you got another Os, please check the node.js documentation for more information [installing node.js via package manager](https://nodejs.org/en/download/package-manager/)


## 3 Run this commands in your terminal

**example commands for powershell terminal integrated in vscode :**
make sure to be in your project directory ("cd yourprojectpath")
```
npm install sass --silent
npm sass --version
```

### 3.1 Edit the ***package.json*** file

#### 3.1.1 Copy the code below in your package.json

    "scripts": {
        "sass": "sass --watch ./sass/style.scss:./css/style.css --style compressed"
    },

#### 3.1.2 Rename the main script :

      "main": "index.js",

#### 3.1.2 Run the sass live compiler for your style.scss editing
    - npm run sass


ENJOY CODING ! ;-)

<div id="enjoy" align="center">
    <img src="https://media.giphy.com/media/iIqmM5tTjmpOB9mpbn/giphy.gif">
</div

Don't forget to give me star, thanks !
# fast kit deployment html, css, javascript

terminal command : 

    - npm install sass --silent
    - npm sass --version

    copy the code below in your package.json

    "scripts": {
        "sass": "sass --watch ./sass/style.scss:./css/style.css --style compressed"
    },

    and rename the main script with :
      "main": "index.js",


    - npm run sass

sass is the name of your script (that we modified just before in "scripts" list of the package.json)

edit your style.scss file and enjoy coding !
don't forget to run the "npm run" command before editing your style.scss file
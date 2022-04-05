# Animal database

## Description

For templating, ejs engine is used.

This application is aimed to gather information of all pets living in the city. Their owners are responsible for creating account for their pets and indicate information asked in the application.

When accessing to the website, the user sees title and carousel image. Moving down, there is a table with information of currently available users(pets): name, specie, gender and whether the pet is vaccinated.
At the end of the table, there are 2 action buttons in form of icons that allow to edit data or delete the user.

For adding new users, there is a button on top left "New User". It directs to another page for providing information.
All field of form are validated. Therefore, the user cannot save/create blank fields.

## Project Structure

- Animal-database

  - /assets

    - /css
      style.css
    - /img
    - /js
      index.js
    - /node_modules
    - /server

      - /controller

        controller.js

      - /database

        connection.js

      - /model

        model.js

      - /routes

        router.js

      - /services
        render.js

    - /views

      - /include
        \_footer.ejs
        \_form.ejs
        \_header.ejs
        \_show.ejs
        add_user.ejs
        index.ejs
        update_user.ejs
        update_user.ejs

    config.env
    package-lock.json
    package.json
    README.md
    server.js

## Intruction of running the app:

Install the dependencies by
`npm install`

And then, run by
`npm start`
It will host on your localhost:3000

### Here are the list of dependencies:

```
"dependencies": { - **"axios": "^0.26.1", - **"body-parser": "^1.19.2", - **"dotenv": "^16.0.0", - **"ejs": "^3.1.6", - **"express": "^4.17.3", - **"mongoose": "^6.2.9", - **"morgan": "^1.10.0", - **"nodemon": "^2.0.15"
}
```

### Hosted on these links:

- [Github Repository](https://github.com/00011347/animal-database)
- [Deploy on heroku](https://animal-database.herokuapp.com/)

<h2 align="center">This web application was created to fulfill Web Technology module’s requirements and does not represent an actual company or service. ID 00011347</h2>

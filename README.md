# Pokemon!
Application that uses poke api as data source to get information about pokemons to save it in an database, so our api can consume it to display on a grid! This is an study purpose project.

## How to setup the app locally
 - Clone the repository
 - Run **npm install** in backend and in frontend folders
 - Configure your sql database in knexfiles.js and in connection.js files
 - Creates the database as you named in your files in the past step
 - run **npm run knex:migrate** to generate the database structure
 - use **npm run dev** to run the backend
 - use **npm start** to run the frontend
 
## Api Documentation
   - **POST /seedpokemons** to seed the database with a high number of pokemons. This route receive a body with the following structure:
     ```
     {
      "max": 150 
     }
     ```
     where "max" is the number of pokemons to be generated. We don't recommend you to pass numbers bigger than 150 because this can be a slowly request.
  - **GET /pokemon** to get all pokemons. This route can receive an "type" query param to filter the pokemons. The possible type values are: ``bug, dark, dragon, electric, fairy, fighting, fire, flying, ghost, grass, ground, ice, normal, poison, psychic, rock, steel, water``. Currently you can only filter for 1 type.
  - **GET /pokemon/:name** to get an specific pokemon by name.
  - **POST /pokemon/:name** to create a pokemon in database by name.
  - **POST /pokemon/:name** to delete a pokemon from the database by name.

## Screenshots
  ![Screenshot](https://github.com/pxd3v/pokemon/blob/master/project_prints/print1.jpeg)

  ![Screenshot](https://github.com/pxd3v/pokemon/blob/master/project_prints/print2.jpeg)

  ![Screenshot](https://github.com/pxd3v/pokemon/blob/master/project_prints/print3.jpeg)

  ![Screenshot](https://github.com/pxd3v/pokemon/blob/master/project_prints/print4.jpeg)


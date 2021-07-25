# Name: 
PTB

# Description: 
You will use this application to create matches with friends and play with your team on our leagues.

# Installation:
Use ironlauncher
npm install ironlauncher

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

# Endpoints List

| HTTP Method   | URI path                              | Description |
| :------------ |:---------------:                      |       -----:|
| GET           | /index                                |  Indice |
| GET           | /auth/register                        |  Recibir el registro  |
| POST          | /auth/register                        |  Enviar la informacion registro  |
| GET           | /profile/:_id                         |  Recibir el perfil del usuario  |
| POST          | /profile/:_id                         |  Editar el perfil del usuario|
| GET           | /team/create                          |  Recibir el formulario del equipo|
| POST          | /team/create                          |  Enviar informacion equipo  |
| GET           | /team/details/:_id                    |  Recibes detalles del equipo  |
| GET           | /match/create                         |  Recibes formulario partido  |
| POST          | /match/create                         |  Envias formulario partido  |
| GET           | /match/list                           |  Recibes lista de partidos  |
| GET           | /match/details/:_id                   |  Recibes detalles partido  |
| POST          | /match/details/:_id                   |  Envias la informacion del partido  |
| GET           | /league/create                        |  Recibes formulario liga  |
| POST          | /league/create                        |  Envias formulario liga  |
| GET           | /league/list                          |  Recibes una lista de ligas  |
| GET           | /league/details/:_id                  |  Recibes detalles liga  |
| POST          | /league/details/:_id                  |  Editas la informacion de la liga  |
| GET           | /league/details/:_id/table            |  Recibes la informacion de la clasificacion  |
| GET           | /league/details/:_id/matches/list     |  Recibes la informacion de los partidos  |






/index

/auth
/auth/register
/auth/login

/profile
/profile/:_id

/team
/team/create
/team/details/:_id

/match
/match/create
/match/list
/match/details/:_id

/league
/league/create
/league/details/:_id
/league/details/:_id/:table_id
/league/details/:_id/matches/list

# Client components
-Layout
    -Footer
        -Footer.js
    -Navigatin
        -Navigation.js
-Pages
    -Index
        -Index.js
    -Auth
        -Register.js
            name, lastname, nick, position, picture, description
        -Login.js
            name, password
    -Profile
        -profile.js
            name, lastname, nick, position, picture, teams, description
    -Match
        -create.js
            location, name, date, description
        -details.js
            location, name, date, description, teamA, teamB
        -list.js
            name, capacity
    -Team
        -create.js
            name, picture, capacity
        -details.js
            name, picture, capacity
    -League
        -create.js
            Location, Name, Dates, Decription, Teams, Matchs, Picture
        -details.js
            Location, Name, Dates, Decription, Teams, Matchs, Picture
        -table.js
            name, teams, result, point
        -match-list.js
            teamA, teamB
-Routes
    -Index
        -index.js


Jokenpo é uma brincadeira japonesa, onde dois jogadores escolhem um dentre três possíveis itens: Pedra, Papel ou Tesoura.
O objetivo é fazer um juiz de Jokenpo que dada a jogada dos dois jogadores informa o resultado da partida.

### As regras :

- Pedra empata com Pedra e ganha de Tesoura
- Tesoura empata com Tesoura e ganha de Papel
- Papel empata com Papel e ganha de Pedra

### Dependencies

- NodeJS 14.17.3

### Installing / Getting started

Follow the steps to run the project:

- [Clone repository or download it.](https://github.com/MarceloAug/jokenpo.git)
- Go to the folder `cd jokenpo`
- Run `npm install`
- Run server `node server.js`
- Execute with insomnia or postman `http://localhost:3001` 
    or
    - [Clone repository or download it.](https://github.com/MarceloAug/jokenpo-front.git)
    - Go to the folder `cd jokenpo`
    - Run `npm install`
    - Run server `npm start`
    
- post json example: 
    {
        "playerOne": "pedra",
        "playerTwo" : "papel"
    }
- Change the values of playerOne and playerTwo to see the results

### API Documentation
- Routes of API

### POST
json example:
- /jokenpo   
    {
        "playerOne": "pedra",
        "playerTwo" : "papel"
    }

### Creators
- [Marcelo Augusto](https://github.com/MarceloAug)



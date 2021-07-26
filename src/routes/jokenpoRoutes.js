const {jokenpo }= require('../controller');
const { Router } = require('express');
const route = Router();

route.post('/jokenpo', (request, response) => {
    jokenpo.getJokenpo(request.body,response);
});

module.exports = route;

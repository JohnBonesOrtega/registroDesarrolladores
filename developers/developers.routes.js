const Developers = require('./developers.controller');

module.exports = (router) => {
    router.post('/developers', Developers.createDeveloper);
    router.get('/developers', Developers.getDevelopers);
    router.get('/developers/:id', Developers.getDeveloper);
    router.put('/developers/:id' , Developers.updateDeveloper);
    router.delete('/developers/:id', Developers.deleteDeveloper);
}
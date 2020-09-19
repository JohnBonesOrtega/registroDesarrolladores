const { json } = require('body-parser');
const Developers = require('./developers.dao');

exports.createDeveloper = (req, res, next) => {
    const developer = {
        nombres_completos: req.body.nombres_completos,
        link_github: req.body.link_github,
        tecnologias_conocidas: req.body.tecnologias_conocidas
    }
    Developers.create(developer, (error, developer) => {
        error ? res.json({ error }) : res.json({ message: 'Developer created Successfully', developer })
    })
}

exports.getDevelopers = (req, res, next) => {
    Developers.get({}, (error, developers) => {
        error ? res.json({ error }) : res.json({ developers })
    });
}

exports.getDeveloper = (req, res, next) => {
    Developers.get({ _id: req.params.id }, (error, developer) => {
        error ? res.json({ error }) : res.json({ developer })
    })
}

exports.updateDeveloper = (req, res, next) => {
    const developer = {
        nombres_completos: req.body.nombres_completos,
        link_github: req.body.link_github,
        tecnologias_conocidas: req.body.tecnologias_conocidas
    }
    Developers.update({ _id: req.params.id }, developer, (error, developer) => {
        error ? res.json({ error }) : res.json({ developer })
    })
}

exports.deleteDeveloper = (req, res, next) => {
    Developers.delete({ _id: req.params.id }, (error, developer) => {
        error ? res.json({ error }) : res.json({ message: 'Developer deleted successfully', id: developer.id })
    });
}
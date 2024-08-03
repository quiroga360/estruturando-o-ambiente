const express = require('express');

const router = express.Router();

router.get('/', (_, res) => {
    res.render('perfil/index', { userName: "Pablo Quiroga", userAge: 35, userCity: "Porto Alegre", userEstate: "RS" })
})

module.exports = router;
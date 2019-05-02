const router = require('express').Router();

const Dishes = require('./dishes-model');

router.get('/', (req, res) => {
  Dishes.find()
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(error => {
      res.status(500).json({ message: 'We ran into an error retrieving the tracks' });
    });
});

module.exports = router;
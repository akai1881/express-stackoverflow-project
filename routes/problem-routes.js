const auth = require('../middlewares/auth-middleware');
const ProblemController = require('./../controllers/problem-controller');
const router = require('express').Router();

router.post('/create', auth, ProblemController.create);

module.exports = router;

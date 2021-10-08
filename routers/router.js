const Router = require('express');
const router = new Router();
const Controller = require('../controllers/controller');

router.get('/', Controller.renderMain);
router.get('/:code', Controller.redirectUrl);
router.post('/', Controller.renderUrl);

module.exports = router;

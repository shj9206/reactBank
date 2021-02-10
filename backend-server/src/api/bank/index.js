const router = require('express').Router();
const routerCtrl = require('./bank.ctrl');

router.post('/register', routerCtrl.register);
router.get('/bankList', routerCtrl.list);
router.delete('/:bankId', routerCtrl.remove);

module.exports = router;

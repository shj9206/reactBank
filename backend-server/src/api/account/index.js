const router = require('express').Router();
const routerCtrl = require('./account.ctrl');

router.post('/register', routerCtrl.register);
router.get('/accountList', routerCtrl.list);
router.delete('/:accountId', routerCtrl.remove);

module.exports = router;

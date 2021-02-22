const router = require('express').Router();
const routerCtrl = require('./account.ctrl');

router.post('/register', routerCtrl.register);
router.get('/accountList', routerCtrl.list);
router.get('/accountDetail/:accountsid', routerCtrl.detail);
router.delete('/:accountsId', routerCtrl.remove);
router.post('/transfer', routerCtrl.transfer);

module.exports = router;

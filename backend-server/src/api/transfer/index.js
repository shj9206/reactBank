const router = require('express').Router();
const routerCtrl = require('./transfer.ctrl');

router.get('/transferLogList', routerCtrl.transferLogList);


module.exports = router;

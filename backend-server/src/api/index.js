/* route 모듈화 */
const express = require('express');
const router = express.Router();
const auth = require('./auth/index');
const bank = require('./bank');
const account = require('./account');

router.use('/auth', auth);
router.use('/bank', bank);
router.use('/account', account);

/* route export */
module.exports = router;

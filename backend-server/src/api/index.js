/* route 모듈화 */
const express = require('express');
const router = express.Router();
const auth = require('./auth/index');
const bank = require('./bank');

router.use('/auth', auth);
router.use('/bank', bank);

/* route export */
module.exports = router;

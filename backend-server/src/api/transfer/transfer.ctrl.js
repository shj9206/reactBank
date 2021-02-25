/* 은행 등록 관련 API */
const Joi = require('@hapi/joi'); // import Joi from '@hapi/joi';


const TransferLog = require('../../models/transferLog');

        
// 여기서 ID를 가져와서 찾는게 낮겠지?

/* 거래 내역 조회 : GET /api/transfer/transferLogList */
exports.transferLogList = async (req, res) => {

    try {
        const transferLogs = await TransferLog.find({}).lean().exec();
        res.send(transferLogs);
    } catch (e) {
        res.throw(500, e);
    }
};

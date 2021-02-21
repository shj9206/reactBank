/* 은행 등록 관련 API */
const Joi = require('@hapi/joi'); // import Joi from '@hapi/joi';
const Account = require('../../models/account');


exports.register = async (req, res) => {
    // req Body 검증하기
    const schema = Joi.object().keys({
        bankname: Joi.string().required(),
        accountNo: Joi.string().required(),
    });
    const result = schema.validate(req.body);
    if (result.error) {
        res.status(400).end();
        return;
    }

    const { accountNo,bankname} = req.body;
    console.log(accountNo, bankname);
    try {
        // accountNo  이 이미 존재하는지 확인
        const exists = await Account.findByAccountNo(accountNo);
        if (exists) {
            res.status(409).end(); // Conflict(이미 존재하는 계좌)
            return;
        }

        const account = new Account({ accountNo , bankname });
        console.log(accountNo, bankname);
        await account.save(); // 데이터베이스에 저장
        res.status(204).end();
    } catch (e) {
        res.throw(500, e);
    }
};

/* 은행 계좌 조회 : GET /api/account/accountList */
exports.list = async (req, res) => {
    try {
        const accounts = await Account.find({}).lean().exec();
        res.send(accounts);
    } catch (e) {
        res.throw(500, e);
    }
};

exports.detail = async (req, res) => {
    const { accountsId } = req.params;
    try {
        const account = await Account.findById(accountsId).exec();
        res.send(account);
    } catch (e) {
        res.throw(500, e);
    }
};

/* 은행 삭제 : DELETE /api/account/:accountname */
exports.remove = async (req, res) => {
    const { accountsId } = req.params;
    try {
        await Account.findByIdAndDelete(accountsId).exec();
        res.status(204).end();
    } catch (e) {
        res.throw(500, e);
    }
};

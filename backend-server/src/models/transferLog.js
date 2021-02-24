/* TransferLog schema, model 생성 */
const { date } = require('@hapi/joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransferLogSchema = new Schema({
    bankname: String,
    accountNo : String,
    receiveAccountNo : String,
    cash : Number,
    transferDate : Date,
    
    
});

/* static 메서드 - 모델에서 바로 사용할 수 있는 함수 */
TransferLogSchema.statics.findByAccountNo = function (accountNo) {
    return this.findOne({ accountNo: accountNo });
};

const TransferLog = mongoose.model('TransferLog', TransferLogSchema);
module.exports = TransferLog;

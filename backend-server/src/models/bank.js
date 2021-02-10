/* Bank schema, model 생성 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BankSchema = new Schema({
    bankname: String,
});

/* static 메서드 - 모델에서 바로 사용할 수 있는 함수 */
BankSchema.statics.findByBankname = function (bankname) {
    return this.findOne({ bankname: bankname });
};

const Bank = mongoose.model('Bank', BankSchema);
module.exports = Bank;

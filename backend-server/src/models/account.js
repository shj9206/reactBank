/* Bank schema, model 생성 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    bankname: String,
    accountNo : String,
});

/* static 메서드 - 모델에서 바로 사용할 수 있는 함수 */
AccountSchema.statics.findByAccountNo = function (accountNo) {
    return this.findOne({ accountNo: accountNo });
};

const Account = mongoose.model('Account', AccountSchema);
module.exports = Account;

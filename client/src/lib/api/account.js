import client from './client';

/* account 등록 */
export const register = ({ bankname, accountNo }) =>
    client.post('/api/account/register', { bankname, accountNo });

/* account List */
export const listAccounts = () => client.get('/api/account/accountList');

/* account 삭제 */
export const removeAccount = (accountsId) => client.delete(`/api/account/${accountsId}`);

import client from './client';

/* Bank 등록 */
export const register = ({ bankname }) =>
    client.post('/api/bank/register', { bankname });

/* Bank List */
export const listBanks = () => client.get('/api/bank/bankList');

/* Bank 삭제 */
export const removeBank = (bankId) => client.delete(`/api/bank/${bankId}`);

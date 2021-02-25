import client from './client';



/* account List */
export const listTransferLog = (  ) => client.get('/api/transfer/transferLogList');


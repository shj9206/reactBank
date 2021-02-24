import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

import Divider from '@material-ui/core/Divider';


const AccountInforMainBlock = styled.div`
    padding-top: 20px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    
    h2 {
        margin: 0;
        font-size: 24px;
        color: #343a40;
    }
    .day {
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }
    .tasks-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 10px;
        font-weight: bold;
    }
`;

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    dividerFullWidth: {
      margin: `5px 0 0 ${theme.spacing(2)}px`,
    },
    dividerInset: {
      margin: `5px 0 0 ${theme.spacing(9)}px`,
    },
  }));

function AccountInforMain({ accounts, error, loading, onBack, onTransferLog }) {
    const classes = useStyles();
    
    

    return (
        <AccountInforMainBlock>
            {!loading && accounts && (
                <List className={classes.root}>
                <ListItem>
                  <ListItemText primary="은행 이름" secondary={accounts.bankname} />
                </ListItem>
                <Divider component="li" />
               
                <ListItem>
                  <ListItemText primary="계좌 번호" secondary={accounts.accountNo} />
                </ListItem>
                <Divider component="li" />

                <ListItem>
                  <ListItemText primary="계좌 잔액" secondary={accounts.cash+"원"} />
                </ListItem>
                <Divider component="li" />

                <ListItem>
                  <ListItemText primary="신규 일자" secondary={accounts.createDate} />
                </ListItem>
                <Divider component="li" />

                          
              </List>
         
            )}
            <Button color="primary" onClick={onTransferLog}>거래내역</Button>
            {/* <Button color="secondary" onClick={onBack}>뒤로가기</Button> */}
           
        </AccountInforMainBlock>
    );
}

export default React.memo(AccountInforMain);

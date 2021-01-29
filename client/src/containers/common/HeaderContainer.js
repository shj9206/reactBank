import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/common/Header';
import { logout } from '../../modules/user';
import { withRouter } from 'react-router-dom';

const HeaderContainer = ({ history }) => {
    const { user } = useSelector(({ user }) => ({ user: user.user }));
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logout());
        history.push('/');
    };

    return <Header user={user} onLogout={onLogout} />;
};

export default withRouter(HeaderContainer);

import React from 'react';
import UserActions from './actions/UserActions';
import Users from './components/Users';

//reload after every 5 seconds

UserActions.fetchList();

React.render(
    <Users />,
    document.getElementById('app-container')
)
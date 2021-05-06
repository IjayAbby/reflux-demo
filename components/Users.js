import Reflux from 'reflux';
import React from 'react';
import UserStore from '../stores/UserStore';

var Users = React.createClass({
    mixins: [Reflux.connect(UserStore, 'userstore')],

    render: function() {
        if (this.state.userstore) {
          return <div> 
            {
              this.state.userstore.users.map(function (user) {
                return <div className="user">
                  <a href={ user.username }>
                      <img src={ user.name }></img>
                  </a>
                </div>
            })
          }
          </div>
        }
        else {
            return (<p>No users</p>);
        }
    }    
});

module.exports = Users;
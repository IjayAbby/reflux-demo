import Reflux from 'reflux';
import $ from 'jquery';
import UserActions from '../actions/UserActions';

var UserStore = Reflux.createStore({
    listenables: [UserActions],
    users: [],
    sourceUrl: 'https://jsonplaceholder.typicode.com/users',

    init: function() {
        this.fetchList();
    },

    fetchList: function() {
        $.ajax({
            url: this.sourceUrl,
            dataType: 'jsonp',
            jsonpCallback: 'Users',
            cache: false,
            context: this,
            success: function(data) {
                console.log('fetch complete');
                this.users = data.items;
                this.trigger(this.users);
            }
        });
    }
});

export default UserStore;
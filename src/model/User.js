var m = require('mithril')

User = {
    list:[],
    //loadList: () => User.list = [{firstName:"John",lastName:"Doe"},{firstName:"Mary",lastName:"Me"}]
    loadList: function() {
        m.request({
            method: "GET",
            url: "http://rem-rest-api.herokuapp.com/api/users",
            withCredentials: true
        })
        .then(function(result){
            User.list = result.data
        })
    }
}

module.exports = User
var m = require('mithril')
var User = require('../model/User')

var UserList = {
    oninit: User.loadList,
    view: function() {
        return m(".user-list",User.list.map(function(u){
            return m("a.user-list-item",{href:"/edit/" +u.id, oncreate:m.route.link}, "u.firstName"+" "+u.lastName)}))
    }
}

module.exports = UserList
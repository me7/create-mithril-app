let m = require('mithril')
let User = require('../model/User')

let UserList = {
    oninit: User.loadList,
    view: function() {
        return m(".user-list",User.list.map(function(u){
            return m("a.user-list-item",{href:"/edit/" +u.id, oncreate:m.route.link}, `${u.firstName} ${u.lastName}`)}))
    }
}

module.exports = UserList
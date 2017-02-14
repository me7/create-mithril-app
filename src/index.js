let m = require('mithril')
let UserList = require('./view/UserList')
let UserForm = require('./view/UserForm')

m.route(document.body, "/list",{
    "/list": UserList,
    "/edit/:id": UserForm
})
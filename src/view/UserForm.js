var m = require("mithril")

UserForm = {
    view: function(vnode){
        return m("h1",vnode.attrs.id)
    }
}

module.exports = UserForm
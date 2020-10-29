var mongoose = require('mongoose')
var model = mongoose.model('bg', {
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    }
 
        
});
module.exports = model
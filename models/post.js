var moongoose = require('mongoose')
var models = moongoose.model('bala-test',{

    Reg_No:{
        type:String,

    },
    verified:{
        type:Boolean
    },    
    student:[{
        FirstName:{
            type:String
        },
        LastName:{
            type:String
        },
        DOB:{
            type:String
        }, 
        address:{
            addressline1:{
                type:String,
            },
            addressline2:{
                type:String
            },
            City:{
                type:String
            },
            country:{
                type:String
            },
            Pincode:{
                type:Number
            }
        },
        
    }],
    college:{
        department:{
            type:String
        },
        name:{
            type:String
        },
    }
})
module.exports = models
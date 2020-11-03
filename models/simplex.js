var moongose = require('mongoose')
var modelss = moongose.model('simplex',{
    products: [{
        item: {
            label: {
                type: String,
                default: "",
                trim: true
            },
            value: {
                type: String,
                default: "",
                trim: true
            },
        },
        itemValue: {
            label: {
                type: String,
                default: "",
                trim: true
            },
            value: {
                type: String,
                default: "",
                trim: true
            },
        },
        itemUnitType: {
            type: String,
            default: "",
            trim: true
        }
    }],
    specification: [
        {
            label: {
                type: String,
                default: "",
                trim: true
            },
            customLabel: {
                type: String,
                default: "",
                trim: true
            },
            value: {
                type: String,
                default: "",
                trim: true
            }
        }
    ],
    instrumenttype:{
        type: String,
        enum: ['LC', 'SBLC', 'BG', 'PG', 'PB', 'APG']
    }
})

module.exports = modelss
const mongoose = require('mongoose');
const developerSchema = require('./developers.model');

developerSchema.statics = {
    create: function (data, callback) {
        const developer = new this(data);
        developer.save(callback);
    },
    get: function (query, callback) {
        this.find(query, callback)
    },
    update: function (query, developerEdit, callback) {
        this.findOneAndUpdate(query, { $set: developerEdit }, { new: true }, callback)
    },
    delete: function(query, callback){
        this.findOneAndDelete(query, callback)
    }
}

const developersModel = mongoose.model('Developers', developerSchema);
module.exports = developersModel;
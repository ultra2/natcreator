/*
*	It overrides some mongoose functions to be compatible with async module,
*	as it requires the callback to have exactly two parameters err and data;
*/
var mongoose = require('mongoose');

mongoose.Model.prototype._save = mongoose.Model.prototype.save;
mongoose.Model.prototype.save = function(callback) {
    this._save(function(err, data, count){
        callback(err, data);
    });
};

mongoose.Model._update = mongoose.Model.update;
mongoose.Model.update = function(conditions, doc, options, callback) {
    this._update(conditions, doc, options, function(err, count, data){
        callback(err, data);
    });
};

mongoose.Types.Embedded.prototype._remove = mongoose.Types.Embedded.prototype.remove;
mongoose.Types.Embedded.prototype.remove = function (callback) {
    this._remove(function(err){
        callback(err, null);
    });
};

mongoose.Query.prototype._update = mongoose.Query.prototype.update;
mongoose.Query.prototype.update = function (doc, callback) {
    this._update(doc, function(err, count, data){
        callback(err, data);
    });
};

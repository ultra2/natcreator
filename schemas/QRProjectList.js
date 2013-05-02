var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async'),
    db = require('../packages/NAT/db.js');

var QRProjectList = new Schema({ 
		_id: { type: String }
		,_type: { type: String }
		,_created: { type: Date }
		,_deleted: { type: Boolean }
		,_modified: { type: Date }
		,_version: { type: Number }
		,name: { type: String }
		,type: { type: String }
		,version: { type: Number }
		,roleName: { type: String }
});

QRProjectList.statics.read = function(req, res, callback)
{
    var lastModified = new Date(req.query.lastModified);
    var me = this;
    async.waterfall([
        function(cb) {
            global.masterDB.model('PMAccountProject')
                .where('account_id', req.user._id)
                .populate('project_id')
                .populate('role_id', 'name')
                .run(cb);
        },
        function(accountprojects, cb) {
            var result = [];
            for (var i = 0; accountprojects.length > i; i++) {
                var ap = accountprojects[i];
                if (ap.project_id._modified <= lastModified) continue;
                result.push({
                    _id: ap.project_id._id,
                    _type: 'QRProjectList',
                    _created: ap.project_id._created,
                    _modified: ap.project_id._modified,
                    _version: ap.project_id._version,
                    _deleted: ap.project_id._deleted,
                    name: ap.project_id.name,
                    type: ap.project_id.type,
                    version: ap.project_id.version,
                    roleName: ap.role_id.name
                });
            }
            callback(null, result);
        }
    ],callback);
};

exports.QRProjectList = QRProjectList;

var db = require('./db.js');

require('./mongoose.js');

global.masterDB = db.connect(global.masterDbConnection);

require('./dataservice.js');

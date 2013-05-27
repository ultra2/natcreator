var db = require('./db.js');

require('./mongoose.js');

global.masterDB = db.connect(global.masterDbConnection);

require('./service/persistent.js');
require('./service/query.js');
require('./service/lookup.js');
require('./service/request.js');

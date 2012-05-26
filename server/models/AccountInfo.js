var mongoose = require('mongoose');
 
 exports.AccountInfoSchema = new mongoose.Schema({ 
 	 	 _id: { type: String }
 	 	 ,username: { type: String }
 	 	 ,hasGithubToken: { type: Boolean }
 	 ,associations: [
 	 ]
 });
 
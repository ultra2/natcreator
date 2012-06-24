var mongoose = require('mongoose');

exports.CRBaseObject = require('../schemas/CRBaseObject').CRBaseObject;
exports.PersistentMaster = require('../schemas/PersistentMaster').PersistentMaster;
exports.PMAccountProjectRole = require('../schemas/PMAccountProjectRole').PMAccountProjectRole;
exports.PMAccountProject = require('../schemas/PMAccountProject').PMAccountProject;
exports.PMConnection = require('../schemas/PMConnection').PMConnection;
exports.PMProject = require('../schemas/PMProject').PMProject;
exports.PMAccount = require('../schemas/PMAccount').PMAccount;
exports.PMRegistration = require('../schemas/PMRegistration').PMRegistration;
exports.PersistentProject = require('../schemas/PersistentProject').PersistentProject;
exports.PPDataProperty = require('../schemas/PPDataProperty').PPDataProperty;
exports.PPSchema = require('../schemas/PPSchema').PPSchema;
exports.PPStringProperty = require('../schemas/PPStringProperty').PPStringProperty;
exports.PPBooleanProperty = require('../schemas/PPBooleanProperty').PPBooleanProperty;
exports.PPIntProperty = require('../schemas/PPIntProperty').PPIntProperty;
exports.PPDateProperty = require('../schemas/PPDateProperty').PPDateProperty;
exports.PPReferenceProperty = require('../schemas/PPReferenceProperty').PPReferenceProperty;
exports.PPObjectProperty = require('../schemas/PPObjectProperty').PPObjectProperty;
exports.PPAutoProperty = require('../schemas/PPAutoProperty').PPAutoProperty;
exports.PPGenerationStep = require('../schemas/PPGenerationStep').PPGenerationStep;
exports.PPProjectSetting = require('../schemas/PPProjectSetting').PPProjectSetting;
exports.PPMetaProperty = require('../schemas/PPMetaProperty').PPMetaProperty;
exports.PPProjectConfig = require('../schemas/PPProjectConfig').PPProjectConfig;
exports.PPProjectData = require('../schemas/PPProjectData').PPProjectData;
exports.PPGenerator = require('../schemas/PPGenerator').PPGenerator;
exports.ClientDesigner = require('../schemas/ClientDesigner').ClientDesigner;
exports.CDMetaRow = require('../schemas/CDMetaRow').CDMetaRow;
exports.CDMetaCategoryRow = require('../schemas/CDMetaCategoryRow').CDMetaCategoryRow;
exports.CDMetaPropertyRow = require('../schemas/CDMetaPropertyRow').CDMetaPropertyRow;
exports.CDFrameworkItem = require('../schemas/CDFrameworkItem').CDFrameworkItem;
exports.CDManagerMenu = require('../schemas/CDManagerMenu').CDManagerMenu;
exports.ClientWeb = require('../schemas/ClientWeb').ClientWeb;
exports.RequestGet = require('../schemas/RequestGet').RequestGet;
exports.RGResetPassword = require('../schemas/RGResetPassword').RGResetPassword;
exports.RGActivate = require('../schemas/RGActivate').RGActivate;
exports.RGAuthGoogle = require('../schemas/RGAuthGoogle').RGAuthGoogle;
exports.RGAuthGoogleCallback = require('../schemas/RGAuthGoogleCallback').RGAuthGoogleCallback;
exports.RGSetupGithub = require('../schemas/RGSetupGithub').RGSetupGithub;
exports.RGSetupGithubCallback = require('../schemas/RGSetupGithubCallback').RGSetupGithubCallback;
exports.RequestPost = require('../schemas/RequestPost').RequestPost;
exports.RPLogin = require('../schemas/RPLogin').RPLogin;
exports.RPLogout = require('../schemas/RPLogout').RPLogout;
exports.RPRegistration = require('../schemas/RPRegistration').RPRegistration;
exports.RPIsAccountAvailable = require('../schemas/RPIsAccountAvailable').RPIsAccountAvailable;
exports.RPResetPassword = require('../schemas/RPResetPassword').RPResetPassword;
exports.RPResetPasswordRequest = require('../schemas/RPResetPasswordRequest').RPResetPasswordRequest;
exports.RPIsAuthenticated = require('../schemas/RPIsAuthenticated').RPIsAuthenticated;
exports.RPTestConnection = require('../schemas/RPTestConnection').RPTestConnection;
exports.RPOpenProject = require('../schemas/RPOpenProject').RPOpenProject;
exports.RPCloseProject = require('../schemas/RPCloseProject').RPCloseProject;
exports.RequestObject = require('../schemas/RequestObject').RequestObject;
exports.ROFile = require('../schemas/ROFile').ROFile;
exports.RPExportFiles = require('../schemas/RPExportFiles').RPExportFiles;
exports.RPGetGithubInfo = require('../schemas/RPGetGithubInfo').RPGetGithubInfo;
exports.RPResetProjectConfig = require('../schemas/RPResetProjectConfig').RPResetProjectConfig;
exports.ROAccountInfo = require('../schemas/ROAccountInfo').ROAccountInfo;
exports.ROGithubInfo = require('../schemas/ROGithubInfo').ROGithubInfo;
exports.QueryResult = require('../schemas/QueryResult').QueryResult;
exports.QRLookup = require('../schemas/QRLookup').QRLookup;
exports.Models = [
	{name: 'PMAccountProjectRole', schema: exports.PMAccountProjectRole, collection: 'PMAccountProjectRole'}
	,{name: 'PMAccountProject', schema: exports.PMAccountProject, collection: 'PMAccountProject'}
	,{name: 'PMProject', schema: exports.PMProject, collection: 'PMProject'}
	,{name: 'PMAccount', schema: exports.PMAccount, collection: 'PMAccount'}
	,{name: 'PMRegistration', schema: exports.PMRegistration, collection: 'PMRegistration'}
	,{name: 'PPSchema', schema: exports.PPSchema, collection: 'PPSchema'}
	,{name: 'PPProjectSetting', schema: exports.PPProjectSetting, collection: 'PPProjectSetting'}
	,{name: 'PPProjectConfig', schema: exports.PPProjectConfig, collection: 'PPProjectConfig'}
	,{name: 'PPProjectData', schema: exports.PPProjectData, collection: 'PPProjectData'}
	,{name: 'PPGenerator', schema: exports.PPGenerator, collection: 'PPGenerator'}
	,{name: 'RequestGet', schema: exports.RequestGet, collection: 'RequestGet'}
	,{name: 'RGResetPassword', schema: exports.RGResetPassword, collection: 'RequestGet'}
	,{name: 'RGActivate', schema: exports.RGActivate, collection: 'RequestGet'}
	,{name: 'RGAuthGoogle', schema: exports.RGAuthGoogle, collection: 'RequestGet'}
	,{name: 'RGAuthGoogleCallback', schema: exports.RGAuthGoogleCallback, collection: 'RequestGet'}
	,{name: 'RGSetupGithub', schema: exports.RGSetupGithub, collection: 'RequestGet'}
	,{name: 'RGSetupGithubCallback', schema: exports.RGSetupGithubCallback, collection: 'RequestGet'}
	,{name: 'RequestPost', schema: exports.RequestPost, collection: 'RequestPost'}
	,{name: 'RPLogin', schema: exports.RPLogin, collection: 'RequestPost'}
	,{name: 'RPLogout', schema: exports.RPLogout, collection: 'RequestPost'}
	,{name: 'RPRegistration', schema: exports.RPRegistration, collection: 'RequestPost'}
	,{name: 'RPIsAccountAvailable', schema: exports.RPIsAccountAvailable, collection: 'RequestPost'}
	,{name: 'RPResetPassword', schema: exports.RPResetPassword, collection: 'RequestPost'}
	,{name: 'RPResetPasswordRequest', schema: exports.RPResetPasswordRequest, collection: 'RequestPost'}
	,{name: 'RPIsAuthenticated', schema: exports.RPIsAuthenticated, collection: 'RequestPost'}
	,{name: 'RPTestConnection', schema: exports.RPTestConnection, collection: 'RequestPost'}
	,{name: 'RPOpenProject', schema: exports.RPOpenProject, collection: 'RequestPost'}
	,{name: 'RPCloseProject', schema: exports.RPCloseProject, collection: 'RequestPost'}
	,{name: 'RequestObject', schema: exports.RequestObject, collection: 'RequestObject'}
	,{name: 'ROFile', schema: exports.ROFile, collection: 'RequestObject'}
	,{name: 'RPExportFiles', schema: exports.RPExportFiles, collection: 'RequestPost'}
	,{name: 'RPGetGithubInfo', schema: exports.RPGetGithubInfo, collection: 'RequestPost'}
	,{name: 'RPResetProjectConfig', schema: exports.RPResetProjectConfig, collection: 'RequestPost'}
	,{name: 'ROAccountInfo', schema: exports.ROAccountInfo, collection: 'RequestObject'}
	,{name: 'ROGithubInfo', schema: exports.ROGithubInfo, collection: 'RequestObject'}
];

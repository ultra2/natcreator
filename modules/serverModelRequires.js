var mongoose = require('mongoose');

exports.PersistentMaster = require('../schemas/PersistentMaster').PersistentMaster;
exports.PMAccountProjectRole = require('../schemas/PMAccountProjectRole').PMAccountProjectRole;
exports.PMAccountProject = require('../schemas/PMAccountProject').PMAccountProject;
exports.PMProject = require('../schemas/PMProject').PMProject;
exports.PMAccount = require('../schemas/PMAccount').PMAccount;
exports.PMRegistration = require('../schemas/PMRegistration').PMRegistration;
exports.PersistentProject = require('../schemas/PersistentProject').PersistentProject;
exports.PPProjectSetting = require('../schemas/PPProjectSetting').PPProjectSetting;
exports.PPClass = require('../schemas/PPClass').PPClass;
exports.PPProjectData = require('../schemas/PPProjectData').PPProjectData;
exports.PPProjectConfig = require('../schemas/PPProjectConfig').PPProjectConfig;
exports.QRLookup = require('../schemas/QRLookup').QRLookup;
exports.QRProjectList = require('../schemas/QRProjectList').QRProjectList;
exports.RequestGet = require('../schemas/RequestGet').RequestGet;
exports.RGResetPassword = require('../schemas/RGResetPassword').RGResetPassword;
exports.RGActivate = require('../schemas/RGActivate').RGActivate;
exports.RGAuthGoogle = require('../schemas/RGAuthGoogle').RGAuthGoogle;
exports.RGAuthGoogleCallback = require('../schemas/RGAuthGoogleCallback').RGAuthGoogleCallback;
exports.RGSetupGithub = require('../schemas/RGSetupGithub').RGSetupGithub;
exports.RGSetupGithubCallback = require('../schemas/RGSetupGithubCallback').RGSetupGithubCallback;
exports.RGGetTemplateFiles = require('../schemas/RGGetTemplateFiles').RGGetTemplateFiles;
exports.RequestPost = require('../schemas/RequestPost').RequestPost;
exports.RPLogin = require('../schemas/RPLogin').RPLogin;
exports.RPLogout = require('../schemas/RPLogout').RPLogout;
exports.RPRegistration = require('../schemas/RPRegistration').RPRegistration;
exports.RPIsAccountAvailable = require('../schemas/RPIsAccountAvailable').RPIsAccountAvailable;
exports.RPChangePassword = require('../schemas/RPChangePassword').RPChangePassword;
exports.RPIsProjectNameAvailable = require('../schemas/RPIsProjectNameAvailable').RPIsProjectNameAvailable;
exports.RPResetPassword = require('../schemas/RPResetPassword').RPResetPassword;
exports.RPResetPasswordRequest = require('../schemas/RPResetPasswordRequest').RPResetPasswordRequest;
exports.RPTestConnection = require('../schemas/RPTestConnection').RPTestConnection;
exports.RPIsAuthenticated = require('../schemas/RPIsAuthenticated').RPIsAuthenticated;
exports.RPCloseProject = require('../schemas/RPCloseProject').RPCloseProject;
exports.RPOpenProject = require('../schemas/RPOpenProject').RPOpenProject;
exports.RPExportFiles = require('../schemas/RPExportFiles').RPExportFiles;
exports.RPDeleteProject = require('../schemas/RPDeleteProject').RPDeleteProject;
exports.RPGetGithubInfo = require('../schemas/RPGetGithubInfo').RPGetGithubInfo;
exports.RPResetProjectConfig = require('../schemas/RPResetProjectConfig').RPResetProjectConfig;
exports.RPDeployFilesToHeroku = require('../schemas/RPDeployFilesToHeroku').RPDeployFilesToHeroku;
exports.RPGetTemplateProjectGithubZipUrl = require('../schemas/RPGetTemplateProjectGithubZipUrl').RPGetTemplateProjectGithubZipUrl;
exports.RPSetHerokuApiKey = require('../schemas/RPSetHerokuApiKey').RPSetHerokuApiKey;
exports.RPCreateClassConfig = require('../schemas/RPCreateClassConfig').RPCreateClassConfig;
exports.RPSendQuestion = require('../schemas/RPSendQuestion').RPSendQuestion;
exports.RPUpdateClassConfig = require('../schemas/RPUpdateClassConfig').RPUpdateClassConfig;
exports.RPCreateHerokuApp = require('../schemas/RPCreateHerokuApp').RPCreateHerokuApp;
exports.RPPollLongTask = require('../schemas/RPPollLongTask').RPPollLongTask;
exports.RPGetResourceFile = require('../schemas/RPGetResourceFile').RPGetResourceFile;
exports.RPDeleteClassConfig = require('../schemas/RPDeleteClassConfig').RPDeleteClassConfig;
exports.RPChangeType = require('../schemas/RPChangeType').RPChangeType;
exports.RequestObject = require('../schemas/RequestObject').RequestObject;
exports.ROFile = require('../schemas/ROFile').ROFile;
exports.ROAccountInfo = require('../schemas/ROAccountInfo').ROAccountInfo;
exports.ROGithubInfo = require('../schemas/ROGithubInfo').ROGithubInfo;
exports.Models = [
	{name: 'PMAccountProjectRole', schema: exports.PMAccountProjectRole, collection: 'PMAccountProjectRole'}
	,{name: 'PMAccountProject', schema: exports.PMAccountProject, collection: 'PMAccountProject'}
	,{name: 'PMProject', schema: exports.PMProject, collection: 'PMProject'}
	,{name: 'PMAccount', schema: exports.PMAccount, collection: 'PMAccount'}
	,{name: 'PMRegistration', schema: exports.PMRegistration, collection: 'PMRegistration'}
	,{name: 'PPProjectSetting', schema: exports.PPProjectSetting, collection: 'PPProjectSetting'}
	,{name: 'PPClass', schema: exports.PPClass, collection: 'PPClass'}
	,{name: 'PPProjectData', schema: exports.PPProjectData, collection: 'PPProjectData'}
	,{name: 'PPProjectConfig', schema: exports.PPProjectConfig, collection: 'PPProjectConfig'}
	,{name: 'RequestGet', schema: exports.RequestGet, collection: 'RequestGet'}
	,{name: 'RGResetPassword', schema: exports.RGResetPassword, collection: 'RequestGet'}
	,{name: 'RGActivate', schema: exports.RGActivate, collection: 'RequestGet'}
	,{name: 'RGAuthGoogle', schema: exports.RGAuthGoogle, collection: 'RequestGet'}
	,{name: 'RGAuthGoogleCallback', schema: exports.RGAuthGoogleCallback, collection: 'RequestGet'}
	,{name: 'RGSetupGithub', schema: exports.RGSetupGithub, collection: 'RequestGet'}
	,{name: 'RGSetupGithubCallback', schema: exports.RGSetupGithubCallback, collection: 'RequestGet'}
	,{name: 'RGGetTemplateFiles', schema: exports.RGGetTemplateFiles, collection: 'RequestGet'}
	,{name: 'RequestPost', schema: exports.RequestPost, collection: 'RequestPost'}
	,{name: 'RPLogin', schema: exports.RPLogin, collection: 'RequestPost'}
	,{name: 'RPLogout', schema: exports.RPLogout, collection: 'RequestPost'}
	,{name: 'RPRegistration', schema: exports.RPRegistration, collection: 'RequestPost'}
	,{name: 'RPIsAccountAvailable', schema: exports.RPIsAccountAvailable, collection: 'RequestPost'}
	,{name: 'RPChangePassword', schema: exports.RPChangePassword, collection: 'RequestPost'}
	,{name: 'RPIsProjectNameAvailable', schema: exports.RPIsProjectNameAvailable, collection: 'RequestPost'}
	,{name: 'RPResetPassword', schema: exports.RPResetPassword, collection: 'RequestPost'}
	,{name: 'RPResetPasswordRequest', schema: exports.RPResetPasswordRequest, collection: 'RequestPost'}
	,{name: 'RPTestConnection', schema: exports.RPTestConnection, collection: 'RequestPost'}
	,{name: 'RPIsAuthenticated', schema: exports.RPIsAuthenticated, collection: 'RequestPost'}
	,{name: 'RPCloseProject', schema: exports.RPCloseProject, collection: 'RequestPost'}
	,{name: 'RPOpenProject', schema: exports.RPOpenProject, collection: 'RequestPost'}
	,{name: 'RPExportFiles', schema: exports.RPExportFiles, collection: 'RequestPost'}
	,{name: 'RPDeleteProject', schema: exports.RPDeleteProject, collection: 'RequestPost'}
	,{name: 'RPGetGithubInfo', schema: exports.RPGetGithubInfo, collection: 'RequestPost'}
	,{name: 'RPResetProjectConfig', schema: exports.RPResetProjectConfig, collection: 'RequestPost'}
	,{name: 'RPDeployFilesToHeroku', schema: exports.RPDeployFilesToHeroku, collection: 'RequestPost'}
	,{name: 'RPGetTemplateProjectGithubZipUrl', schema: exports.RPGetTemplateProjectGithubZipUrl, collection: 'RequestPost'}
	,{name: 'RPSetHerokuApiKey', schema: exports.RPSetHerokuApiKey, collection: 'RequestPost'}
	,{name: 'RPCreateClassConfig', schema: exports.RPCreateClassConfig, collection: 'RequestPost'}
	,{name: 'RPSendQuestion', schema: exports.RPSendQuestion, collection: 'RequestPost'}
	,{name: 'RPUpdateClassConfig', schema: exports.RPUpdateClassConfig, collection: 'RequestPost'}
	,{name: 'RPCreateHerokuApp', schema: exports.RPCreateHerokuApp, collection: 'RequestPost'}
	,{name: 'RPPollLongTask', schema: exports.RPPollLongTask, collection: 'RequestPost'}
	,{name: 'RPGetResourceFile', schema: exports.RPGetResourceFile, collection: 'RequestPost'}
	,{name: 'RPDeleteClassConfig', schema: exports.RPDeleteClassConfig, collection: 'RequestPost'}
	,{name: 'RPChangeType', schema: exports.RPChangeType, collection: 'RequestPost'}
	,{name: 'RequestObject', schema: exports.RequestObject, collection: 'RequestObject'}
	,{name: 'ROFile', schema: exports.ROFile, collection: 'RequestObject'}
	,{name: 'ROAccountInfo', schema: exports.ROAccountInfo, collection: 'RequestObject'}
	,{name: 'ROGithubInfo', schema: exports.ROGithubInfo, collection: 'RequestObject'}
];

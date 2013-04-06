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
exports.auto_00000000-50bc-e9dc-6cf2-b0e016000008 = require('../schemas/auto_00000000-50bc-e9dc-6cf2-b0e016000008').auto_00000000-50bc-e9dc-6cf2-b0e016000008;
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
	{name: 'PersistentMaster', schema: exports.PersistentMaster}
	,{name: 'PMAccountProjectRole', schema: exports.PMAccountProjectRole, collection: 'PMAccountProjectRole'}
	,{name: 'PMAccountProject', schema: exports.PMAccountProject, collection: 'PMAccountProject'}
	,{name: 'PMProject', schema: exports.PMProject, collection: 'PMProject'}
	,{name: 'PMAccount', schema: exports.PMAccount, collection: 'PMAccount'}
	,{name: 'PMRegistration', schema: exports.PMRegistration, collection: 'PMRegistration'}
	,{name: 'PersistentProject', schema: exports.PersistentProject}
	,{name: 'PPProjectSetting', schema: exports.PPProjectSetting, collection: 'PPProjectSetting'}
	,{name: 'PPClass', schema: exports.PPClass, collection: 'PPClass'}
	,{name: 'PPProjectData', schema: exports.PPProjectData, collection: 'PPProjectData'}
	,{name: 'PPProjectConfig', schema: exports.PPProjectConfig, collection: 'PPProjectConfig'}
	,{name: 'QRLookup', schema: exports.QRLookup}
	,{name: 'QRProjectList', schema: exports.QRProjectList}
	,{name: 'auto_00000000-50bc-e9dc-6cf2-b0e016000008', schema: exports.auto_00000000-50bc-e9dc-6cf2-b0e016000008}
	,{name: 'RequestGet', schema: exports.RequestGet}
	,{name: 'RGResetPassword', schema: exports.RGResetPassword}
	,{name: 'RGActivate', schema: exports.RGActivate}
	,{name: 'RGAuthGoogle', schema: exports.RGAuthGoogle}
	,{name: 'RGAuthGoogleCallback', schema: exports.RGAuthGoogleCallback}
	,{name: 'RGSetupGithub', schema: exports.RGSetupGithub}
	,{name: 'RGSetupGithubCallback', schema: exports.RGSetupGithubCallback}
	,{name: 'RGGetTemplateFiles', schema: exports.RGGetTemplateFiles}
	,{name: 'RequestPost', schema: exports.RequestPost}
	,{name: 'RPLogin', schema: exports.RPLogin}
	,{name: 'RPLogout', schema: exports.RPLogout}
	,{name: 'RPRegistration', schema: exports.RPRegistration}
	,{name: 'RPIsAccountAvailable', schema: exports.RPIsAccountAvailable}
	,{name: 'RPChangePassword', schema: exports.RPChangePassword}
	,{name: 'RPIsProjectNameAvailable', schema: exports.RPIsProjectNameAvailable}
	,{name: 'RPResetPassword', schema: exports.RPResetPassword}
	,{name: 'RPResetPasswordRequest', schema: exports.RPResetPasswordRequest}
	,{name: 'RPTestConnection', schema: exports.RPTestConnection}
	,{name: 'RPIsAuthenticated', schema: exports.RPIsAuthenticated}
	,{name: 'RPCloseProject', schema: exports.RPCloseProject}
	,{name: 'RPOpenProject', schema: exports.RPOpenProject}
	,{name: 'RPExportFiles', schema: exports.RPExportFiles}
	,{name: 'RPDeleteProject', schema: exports.RPDeleteProject}
	,{name: 'RPGetGithubInfo', schema: exports.RPGetGithubInfo}
	,{name: 'RPResetProjectConfig', schema: exports.RPResetProjectConfig}
	,{name: 'RPDeployFilesToHeroku', schema: exports.RPDeployFilesToHeroku}
	,{name: 'RPGetTemplateProjectGithubZipUrl', schema: exports.RPGetTemplateProjectGithubZipUrl}
	,{name: 'RPSetHerokuApiKey', schema: exports.RPSetHerokuApiKey}
	,{name: 'RPCreateClassConfig', schema: exports.RPCreateClassConfig}
	,{name: 'RPSendQuestion', schema: exports.RPSendQuestion}
	,{name: 'RPUpdateClassConfig', schema: exports.RPUpdateClassConfig}
	,{name: 'RPCreateHerokuApp', schema: exports.RPCreateHerokuApp}
	,{name: 'RPPollLongTask', schema: exports.RPPollLongTask}
	,{name: 'RPGetResourceFile', schema: exports.RPGetResourceFile}
	,{name: 'RPDeleteClassConfig', schema: exports.RPDeleteClassConfig}
	,{name: 'RPChangeType', schema: exports.RPChangeType}
	,{name: 'RequestObject', schema: exports.RequestObject}
	,{name: 'ROFile', schema: exports.ROFile}
	,{name: 'ROAccountInfo', schema: exports.ROAccountInfo}
	,{name: 'ROGithubInfo', schema: exports.ROGithubInfo}
];

var mongoose = require('mongoose');

exports.CRBaseObject = require('../schemas/CRBaseObject').CRBaseObject;
exports.PersistentMaster = require('../schemas/PersistentMaster').PersistentMaster;
exports.PMAccountProjectRole = require('../schemas/PMAccountProjectRole').PMAccountProjectRole;
exports.PMAccountProject = require('../schemas/PMAccountProject').PMAccountProject;
exports.PMProject = require('../schemas/PMProject').PMProject;
exports.PMAccount = require('../schemas/PMAccount').PMAccount;
exports.PMRegistration = require('../schemas/PMRegistration').PMRegistration;
exports.PMSharedGenerator = require('../schemas/PMSharedGenerator').PMSharedGenerator;
exports.PersistentProject = require('../schemas/PersistentProject').PersistentProject;
exports.PPProjectItem = require('../schemas/PPProjectItem').PPProjectItem;
exports.PPDataProperty = require('../schemas/PPDataProperty').PPDataProperty;
exports.PPSchema = require('../schemas/PPSchema').PPSchema;
exports.PPStringProperty = require('../schemas/PPStringProperty').PPStringProperty;
exports.PPBooleanProperty = require('../schemas/PPBooleanProperty').PPBooleanProperty;
exports.PPIntProperty = require('../schemas/PPIntProperty').PPIntProperty;
exports.PPDateProperty = require('../schemas/PPDateProperty').PPDateProperty;
exports.PPReferenceProperty = require('../schemas/PPReferenceProperty').PPReferenceProperty;
exports.PPObjectProperty = require('../schemas/PPObjectProperty').PPObjectProperty;
exports.PPAutoProperty = require('../schemas/PPAutoProperty').PPAutoProperty;
exports.PPObjectIdProperty = require('../schemas/PPObjectIdProperty').PPObjectIdProperty;
exports.PPStore = require('../schemas/PPStore').PPStore;
exports.PPView = require('../schemas/PPView').PPView;
exports.PPClass = require('../schemas/PPClass').PPClass;
exports.PPGenerationStep = require('../schemas/PPGenerationStep').PPGenerationStep;
exports.PPProjectSetting = require('../schemas/PPProjectSetting').PPProjectSetting;
exports.PPProjectData = require('../schemas/PPProjectData').PPProjectData;
exports.PPCustomProperty = require('../schemas/PPCustomProperty').PPCustomProperty;
exports.PPProjectConfig = require('../schemas/PPProjectConfig').PPProjectConfig;
exports.PPGenerator = require('../schemas/PPGenerator').PPGenerator;
exports.ClientDesigner = require('../schemas/ClientDesigner').ClientDesigner;
exports.CDConnection = require('../schemas/CDConnection').CDConnection;
exports.CDProjectItem = require('../schemas/CDProjectItem').CDProjectItem;
exports.CDManagerMenu = require('../schemas/CDManagerMenu').CDManagerMenu;
exports.CDFile = require('../schemas/CDFile').CDFile;
exports.CDClassConfig = require('../schemas/CDClassConfig').CDClassConfig;
exports.CDClass = require('../schemas/CDClass').CDClass;
exports.CDPropertyNode = require('../schemas/CDPropertyNode').CDPropertyNode;
exports.CDClassMetaNode = require('../schemas/CDClassMetaNode').CDClassMetaNode;
exports.CDDataType = require('../schemas/CDDataType').CDDataType;
exports.CDInspectorNode = require('../schemas/CDInspectorNode').CDInspectorNode;
exports.CDEditToolboxNode = require('../schemas/CDEditToolboxNode').CDEditToolboxNode;
exports.ClientWeb = require('../schemas/ClientWeb').ClientWeb;
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
exports.RPOpenProject = require('../schemas/RPOpenProject').RPOpenProject;
exports.RPCloseProject = require('../schemas/RPCloseProject').RPCloseProject;
exports.RequestObject = require('../schemas/RequestObject').RequestObject;
exports.ROFile = require('../schemas/ROFile').ROFile;
exports.RPExportFiles = require('../schemas/RPExportFiles').RPExportFiles;
exports.RPDeleteProject = require('../schemas/RPDeleteProject').RPDeleteProject;
exports.RPGetGithubInfo = require('../schemas/RPGetGithubInfo').RPGetGithubInfo;
exports.RPResetProjectConfig = require('../schemas/RPResetProjectConfig').RPResetProjectConfig;
exports.RPInstallGenerator = require('../schemas/RPInstallGenerator').RPInstallGenerator;
exports.RPUpdateGenerator = require('../schemas/RPUpdateGenerator').RPUpdateGenerator;
exports.RPIsGeneratorUpdatable = require('../schemas/RPIsGeneratorUpdatable').RPIsGeneratorUpdatable;
exports.RPCreateGenerator = require('../schemas/RPCreateGenerator').RPCreateGenerator;
exports.RPGetTemplateProjectGithubZipUrl = require('../schemas/RPGetTemplateProjectGithubZipUrl').RPGetTemplateProjectGithubZipUrl;
exports.RPRenameGenerator = require('../schemas/RPRenameGenerator').RPRenameGenerator;
exports.RPAcceptGeneratorSource = require('../schemas/RPAcceptGeneratorSource').RPAcceptGeneratorSource;
exports.RPSendQuestion = require('../schemas/RPSendQuestion').RPSendQuestion;
exports.RPAcquireGenerator = require('../schemas/RPAcquireGenerator').RPAcquireGenerator;
exports.RPCreateCustomProperty = require('../schemas/RPCreateCustomProperty').RPCreateCustomProperty;
exports.RPDeleteCustomProperty = require('../schemas/RPDeleteCustomProperty').RPDeleteCustomProperty;
exports.RPUpdateCustomProperty = require('../schemas/RPUpdateCustomProperty').RPUpdateCustomProperty;
exports.ROAccountInfo = require('../schemas/ROAccountInfo').ROAccountInfo;
exports.ROGithubInfo = require('../schemas/ROGithubInfo').ROGithubInfo;
exports.QueryResult = require('../schemas/QueryResult').QueryResult;
exports.QRLookup = require('../schemas/QRLookup').QRLookup;
exports.QRProjectList = require('../schemas/QRProjectList').QRProjectList;
exports.QRSharedGeneratorList = require('../schemas/QRSharedGeneratorList').QRSharedGeneratorList;
exports.Models = [
	{name: 'PMAccountProjectRole', schema: exports.PMAccountProjectRole, collection: 'PMAccountProjectRole'}
	,{name: 'PMAccountProject', schema: exports.PMAccountProject, collection: 'PMAccountProject'}
	,{name: 'PMProject', schema: exports.PMProject, collection: 'PMProject'}
	,{name: 'PMAccount', schema: exports.PMAccount, collection: 'PMAccount'}
	,{name: 'PMRegistration', schema: exports.PMRegistration, collection: 'PMRegistration'}
	,{name: 'PMSharedGenerator', schema: exports.PMSharedGenerator, collection: 'PMSharedGenerator'}
	,{name: 'PPSchema', schema: exports.PPSchema, collection: 'PPSchema'}
	,{name: 'PPStore', schema: exports.PPStore, collection: 'PPStore'}
	,{name: 'PPView', schema: exports.PPView, collection: 'PPView'}
	,{name: 'PPClass', schema: exports.PPClass, collection: 'PPClass'}
	,{name: 'PPProjectSetting', schema: exports.PPProjectSetting, collection: 'PPProjectSetting'}
	,{name: 'PPProjectData', schema: exports.PPProjectData, collection: 'PPProjectData'}
	,{name: 'PPProjectConfig', schema: exports.PPProjectConfig, collection: 'PPProjectConfig'}
	,{name: 'PPGenerator', schema: exports.PPGenerator, collection: 'PPGenerator'}
	,{name: 'CDInspectorNode', schema: exports.CDInspectorNode, collection: 'CDInspectorNode'}
	,{name: 'CDEditToolboxNode', schema: exports.CDEditToolboxNode, collection: 'CDEditToolboxNode'}
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
	,{name: 'RPOpenProject', schema: exports.RPOpenProject, collection: 'RequestPost'}
	,{name: 'RPCloseProject', schema: exports.RPCloseProject, collection: 'RequestPost'}
	,{name: 'RequestObject', schema: exports.RequestObject, collection: 'RequestObject'}
	,{name: 'ROFile', schema: exports.ROFile, collection: 'RequestObject'}
	,{name: 'RPExportFiles', schema: exports.RPExportFiles, collection: 'RequestPost'}
	,{name: 'RPDeleteProject', schema: exports.RPDeleteProject, collection: 'RequestPost'}
	,{name: 'RPGetGithubInfo', schema: exports.RPGetGithubInfo, collection: 'RequestPost'}
	,{name: 'RPResetProjectConfig', schema: exports.RPResetProjectConfig, collection: 'RequestPost'}
	,{name: 'RPInstallGenerator', schema: exports.RPInstallGenerator, collection: 'RequestPost'}
	,{name: 'RPUpdateGenerator', schema: exports.RPUpdateGenerator, collection: 'RequestPost'}
	,{name: 'RPIsGeneratorUpdatable', schema: exports.RPIsGeneratorUpdatable, collection: 'RequestPost'}
	,{name: 'RPCreateGenerator', schema: exports.RPCreateGenerator, collection: 'RequestPost'}
	,{name: 'RPGetTemplateProjectGithubZipUrl', schema: exports.RPGetTemplateProjectGithubZipUrl, collection: 'RequestPost'}
	,{name: 'RPRenameGenerator', schema: exports.RPRenameGenerator, collection: 'RequestPost'}
	,{name: 'RPAcceptGeneratorSource', schema: exports.RPAcceptGeneratorSource, collection: 'RequestPost'}
	,{name: 'RPSendQuestion', schema: exports.RPSendQuestion, collection: 'RequestPost'}
	,{name: 'RPAcquireGenerator', schema: exports.RPAcquireGenerator, collection: 'RequestPost'}
	,{name: 'RPCreateCustomProperty', schema: exports.RPCreateCustomProperty, collection: 'RequestPost'}
	,{name: 'RPDeleteCustomProperty', schema: exports.RPDeleteCustomProperty, collection: 'RequestPost'}
	,{name: 'RPUpdateCustomProperty', schema: exports.RPUpdateCustomProperty, collection: 'RPUpdateCustomProperty'}
	,{name: 'ROAccountInfo', schema: exports.ROAccountInfo, collection: 'RequestObject'}
	,{name: 'ROGithubInfo', schema: exports.ROGithubInfo, collection: 'RequestObject'}
];

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
exports.PPDateProperty = require('../schemas/PPDateProperty').PPDateProperty;
exports.PPIntProperty = require('../schemas/PPIntProperty').PPIntProperty;
exports.PPReferenceProperty = require('../schemas/PPReferenceProperty').PPReferenceProperty;
exports.PPObjectProperty = require('../schemas/PPObjectProperty').PPObjectProperty;
exports.PPAutoProperty = require('../schemas/PPAutoProperty').PPAutoProperty;
exports.PPGenerationStep = require('../schemas/PPGenerationStep').PPGenerationStep;
exports.PPProjectSetting = require('../schemas/PPProjectSetting').PPProjectSetting;
exports.PPProjectData = require('../schemas/PPProjectData').PPProjectData;
exports.PPGenerator = require('../schemas/PPGenerator').PPGenerator;
exports.PPSchemaGenerator = require('../schemas/PPSchemaGenerator').PPSchemaGenerator;
exports.PPSchemaListGenerator = require('../schemas/PPSchemaListGenerator').PPSchemaListGenerator;
exports.ClientDesigner = require('../schemas/ClientDesigner').ClientDesigner;
exports.CDMetaRow = require('../schemas/CDMetaRow').CDMetaRow;
exports.CDMetaCategoryRow = require('../schemas/CDMetaCategoryRow').CDMetaCategoryRow;
exports.CDMetaPropertyRow = require('../schemas/CDMetaPropertyRow').CDMetaPropertyRow;
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
exports.ROAccountInfo = require('../schemas/ROAccountInfo').ROAccountInfo;
exports.ROGithubInfo = require('../schemas/ROGithubInfo').ROGithubInfo;
{name: 'CRBaseObject', schema: exports.CRBaseObject, collection: 'test'}
{name: 'PersistentMaster', schema: exports.PersistentMaster, collection: 'test'}
{name: 'PMAccountProjectRole', schema: exports.PMAccountProjectRole, collection: 'test'}
{name: 'PMAccountProject', schema: exports.PMAccountProject, collection: 'test'}
{name: 'PMConnection', schema: exports.PMConnection, collection: 'test'}
{name: 'PMProject', schema: exports.PMProject, collection: 'test'}
{name: 'PMAccount', schema: exports.PMAccount, collection: 'test'}
{name: 'PMRegistration', schema: exports.PMRegistration, collection: 'test'}
{name: 'PersistentProject', schema: exports.PersistentProject, collection: 'test'}
{name: 'PPDataProperty', schema: exports.PPDataProperty, collection: 'test'}
{name: 'PPSchema', schema: exports.PPSchema, collection: 'test'}
{name: 'PPStringProperty', schema: exports.PPStringProperty, collection: 'test'}
{name: 'PPBooleanProperty', schema: exports.PPBooleanProperty, collection: 'test'}
{name: 'PPDateProperty', schema: exports.PPDateProperty, collection: 'test'}
{name: 'PPIntProperty', schema: exports.PPIntProperty, collection: 'test'}
{name: 'PPReferenceProperty', schema: exports.PPReferenceProperty, collection: 'test'}
{name: 'PPObjectProperty', schema: exports.PPObjectProperty, collection: 'test'}
{name: 'PPAutoProperty', schema: exports.PPAutoProperty, collection: 'test'}
{name: 'PPGenerationStep', schema: exports.PPGenerationStep, collection: 'test'}
{name: 'PPProjectSetting', schema: exports.PPProjectSetting, collection: 'test'}
{name: 'PPProjectData', schema: exports.PPProjectData, collection: 'test'}
{name: 'PPGenerator', schema: exports.PPGenerator, collection: 'test'}
{name: 'PPSchemaGenerator', schema: exports.PPSchemaGenerator, collection: 'test'}
{name: 'PPSchemaListGenerator', schema: exports.PPSchemaListGenerator, collection: 'test'}
{name: 'ClientDesigner', schema: exports.ClientDesigner, collection: 'test'}
{name: 'CDMetaRow', schema: exports.CDMetaRow, collection: 'test'}
{name: 'CDMetaCategoryRow', schema: exports.CDMetaCategoryRow, collection: 'test'}
{name: 'CDMetaPropertyRow', schema: exports.CDMetaPropertyRow, collection: 'test'}
{name: 'ClientWeb', schema: exports.ClientWeb, collection: 'test'}
{name: 'RequestGet', schema: exports.RequestGet, collection: 'test'}
{name: 'RGResetPassword', schema: exports.RGResetPassword, collection: 'test'}
{name: 'RGActivate', schema: exports.RGActivate, collection: 'test'}
{name: 'RGAuthGoogle', schema: exports.RGAuthGoogle, collection: 'test'}
{name: 'RGAuthGoogleCallback', schema: exports.RGAuthGoogleCallback, collection: 'test'}
{name: 'RGSetupGithub', schema: exports.RGSetupGithub, collection: 'test'}
{name: 'RGSetupGithubCallback', schema: exports.RGSetupGithubCallback, collection: 'test'}
{name: 'RequestPost', schema: exports.RequestPost, collection: 'test'}
{name: 'RPLogin', schema: exports.RPLogin, collection: 'test'}
{name: 'RPLogout', schema: exports.RPLogout, collection: 'test'}
{name: 'RPRegistration', schema: exports.RPRegistration, collection: 'test'}
{name: 'RPIsAccountAvailable', schema: exports.RPIsAccountAvailable, collection: 'test'}
{name: 'RPResetPassword', schema: exports.RPResetPassword, collection: 'test'}
{name: 'RPResetPasswordRequest', schema: exports.RPResetPasswordRequest, collection: 'test'}
{name: 'RPIsAuthenticated', schema: exports.RPIsAuthenticated, collection: 'test'}
{name: 'RPTestConnection', schema: exports.RPTestConnection, collection: 'test'}
{name: 'RPOpenProject', schema: exports.RPOpenProject, collection: 'test'}
{name: 'RPCloseProject', schema: exports.RPCloseProject, collection: 'test'}
{name: 'RequestObject', schema: exports.RequestObject, collection: 'test'}
{name: 'ROFile', schema: exports.ROFile, collection: 'test'}
{name: 'RPExportFiles', schema: exports.RPExportFiles, collection: 'test'}
{name: 'RPGetGithubInfo', schema: exports.RPGetGithubInfo, collection: 'test'}
{name: 'ROAccountInfo', schema: exports.ROAccountInfo, collection: 'test'}
{name: 'ROGithubInfo', schema: exports.ROGithubInfo, collection: 'test'}

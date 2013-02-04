Ext.define('designer.ExtjsModelRequires', {
	Download: function() {
		Ext.syncRequire('designer.model.CRBaseObject');
		Ext.syncRequire('designer.model.PersistentMaster');
		Ext.syncRequire('designer.model.PMAccountProjectRole');
		Ext.syncRequire('designer.model.PMAccountProject');
		Ext.syncRequire('designer.model.PMProject');
		Ext.syncRequire('designer.model.PMAccount');
		Ext.syncRequire('designer.model.PMRegistration');
		Ext.syncRequire('designer.model.PersistentProject');
		Ext.syncRequire('designer.model.PPProjectSetting');
		Ext.syncRequire('designer.model.PPClass');
		Ext.syncRequire('designer.model.PPProjectData');
		Ext.syncRequire('designer.model.PPProjectConfig');
		Ext.syncRequire('designer.model.ClientDesigner');
		Ext.syncRequire('designer.model.CDConnection');
		Ext.syncRequire('designer.model.CDManagerMenu');
		Ext.syncRequire('designer.model.CDFile');
		Ext.syncRequire('designer.model.CDPropertyNode');
		Ext.syncRequire('designer.model.CDClassConfig');
		Ext.syncRequire('designer.model.CDClassMetaNode');
		Ext.syncRequire('designer.model.CDInspectorNode');
		Ext.syncRequire('designer.model.CDDataType');
		Ext.syncRequire('designer.model.CDEditToolboxNode');
		Ext.syncRequire('designer.model.ClientWeb');
		Ext.syncRequire('designer.model.RequestGet');
		Ext.syncRequire('designer.model.RGResetPassword');
		Ext.syncRequire('designer.model.RGActivate');
		Ext.syncRequire('designer.model.RGAuthGoogle');
		Ext.syncRequire('designer.model.RGAuthGoogleCallback');
		Ext.syncRequire('designer.model.RGSetupGithub');
		Ext.syncRequire('designer.model.RGSetupGithubCallback');
		Ext.syncRequire('designer.model.RGGetTemplateFiles');
		Ext.syncRequire('designer.model.RequestPost');
		Ext.syncRequire('designer.model.RPLogin');
		Ext.syncRequire('designer.model.RPLogout');
		Ext.syncRequire('designer.model.RPRegistration');
		Ext.syncRequire('designer.model.RPIsAccountAvailable');
		Ext.syncRequire('designer.model.RPChangePassword');
		Ext.syncRequire('designer.model.RPIsProjectNameAvailable');
		Ext.syncRequire('designer.model.RPResetPassword');
		Ext.syncRequire('designer.model.RPResetPasswordRequest');
		Ext.syncRequire('designer.model.RPTestConnection');
		Ext.syncRequire('designer.model.RPIsAuthenticated');
		Ext.syncRequire('designer.model.RPCloseProject');
		Ext.syncRequire('designer.model.RPOpenProject');
		Ext.syncRequire('designer.model.RequestObject');
		Ext.syncRequire('designer.model.ROFile');
		Ext.syncRequire('designer.model.RPExportFiles');
		Ext.syncRequire('designer.model.RPDeleteProject');
		Ext.syncRequire('designer.model.RPGetGithubInfo');
		Ext.syncRequire('designer.model.RPResetProjectConfig');
		Ext.syncRequire('designer.model.RPDeployFilesToHeroku');
		Ext.syncRequire('designer.model.RPGetTemplateProjectGithubZipUrl');
		Ext.syncRequire('designer.model.RPSetHerokuApiKey');
		Ext.syncRequire('designer.model.RPSendQuestion');
		Ext.syncRequire('designer.model.RPCreateHerokuApp');
		Ext.syncRequire('designer.model.RPCreateClassConfig');
		Ext.syncRequire('designer.model.RPDeleteClassConfig');
		Ext.syncRequire('designer.model.RPUpdateClassConfig');
		Ext.syncRequire('designer.model.RPChangeType');
		Ext.syncRequire('designer.model.RPPollLongTask');
		Ext.syncRequire('designer.model.ROAccountInfo');
		Ext.syncRequire('designer.model.ROGithubInfo');
		Ext.syncRequire('designer.model.QueryResult');
		Ext.syncRequire('designer.model.QRLookup');
		Ext.syncRequire('designer.model.QRProjectList');
	}
});

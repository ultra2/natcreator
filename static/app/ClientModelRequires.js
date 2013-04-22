Ext.define('natcreator.ClientModelRequires', {
	Download: function() {
		Ext.syncRequire('natcreator.model.PersistentMaster');
		Ext.syncRequire('natcreator.model.PMAccountProjectRole');
		Ext.syncRequire('natcreator.model.PMAccountProject');
		Ext.syncRequire('natcreator.model.PMProject');
		Ext.syncRequire('natcreator.model.PMAccount');
		Ext.syncRequire('natcreator.model.PMRegistration');
		Ext.syncRequire('natcreator.model.PersistentProject');
		Ext.syncRequire('natcreator.model.PPSetting');
		Ext.syncRequire('natcreator.model.PPClass');
		Ext.syncRequire('natcreator.model.PPData');
		Ext.syncRequire('natcreator.model.PPConfig');
		Ext.syncRequire('natcreator.model.PPFile');
		Ext.syncRequire('natcreator.model.QRInstalledPackage');
		Ext.syncRequire('natcreator.model.QRProjectList');
		Ext.syncRequire('natcreator.model.QRAvailablePackage');
		Ext.syncRequire('natcreator.model.RequestGet');
		Ext.syncRequire('natcreator.model.RGResetPassword');
		Ext.syncRequire('natcreator.model.RGActivate');
		Ext.syncRequire('natcreator.model.RGAuthGoogle');
		Ext.syncRequire('natcreator.model.RGAuthGoogleCallback');
		Ext.syncRequire('natcreator.model.RGSetupGithub');
		Ext.syncRequire('natcreator.model.RGSetupGithubCallback');
		Ext.syncRequire('natcreator.model.RGGetTemplateFiles');
		Ext.syncRequire('natcreator.model.RequestPost');
		Ext.syncRequire('natcreator.model.RPLogin');
		Ext.syncRequire('natcreator.model.RPLogout');
		Ext.syncRequire('natcreator.model.RPRegistration');
		Ext.syncRequire('natcreator.model.RPIsAccountAvailable');
		Ext.syncRequire('natcreator.model.RPChangePassword');
		Ext.syncRequire('natcreator.model.RPIsProjectNameAvailable');
		Ext.syncRequire('natcreator.model.RPResetPassword');
		Ext.syncRequire('natcreator.model.RPResetPasswordRequest');
		Ext.syncRequire('natcreator.model.RPTestConnection');
		Ext.syncRequire('natcreator.model.RPIsAuthenticated');
		Ext.syncRequire('natcreator.model.RPCloseProject');
		Ext.syncRequire('natcreator.model.RPOpenProject');
		Ext.syncRequire('natcreator.model.RPExportFiles');
		Ext.syncRequire('natcreator.model.RPDeleteProject');
		Ext.syncRequire('natcreator.model.RPGetGithubInfo');
		Ext.syncRequire('natcreator.model.RPResetProjectConfig');
		Ext.syncRequire('natcreator.model.RPDeployFilesToHeroku');
		Ext.syncRequire('natcreator.model.RPGetTemplateProjectGithubZipUrl');
		Ext.syncRequire('natcreator.model.RPSetHerokuApiKey');
		Ext.syncRequire('natcreator.model.RPCreateClassConfig');
		Ext.syncRequire('natcreator.model.RPSendQuestion');
		Ext.syncRequire('natcreator.model.RPUpdateClassConfig');
		Ext.syncRequire('natcreator.model.RPCreateHerokuApp');
		Ext.syncRequire('natcreator.model.RPPollLongTask');
		Ext.syncRequire('natcreator.model.RPGetResourceFile');
		Ext.syncRequire('natcreator.model.RPDeleteClassConfig');
		Ext.syncRequire('natcreator.model.RPChangeType');
		Ext.syncRequire('natcreator.model.RPInstallPackage');
		Ext.syncRequire('natcreator.model.RPUninstallPackage');
		Ext.syncRequire('natcreator.model.RPUpdatePackage');
		Ext.syncRequire('natcreator.model.RPDeployFiles');
		Ext.syncRequire('natcreator.model.RequestObject');
		Ext.syncRequire('natcreator.model.ROAccountInfo');
		Ext.syncRequire('natcreator.model.ROGithubInfo');
		Ext.syncRequire('natcreator.model.ClientDesigner');
		Ext.syncRequire('natcreator.model.CDConnection');
		Ext.syncRequire('natcreator.model.CDManagerMenu');
		Ext.syncRequire('natcreator.model.CDFile');
		Ext.syncRequire('natcreator.model.CDPropertyNode');
		Ext.syncRequire('natcreator.model.CDClassConfig');
		Ext.syncRequire('natcreator.model.CDClassMetaNode');
		Ext.syncRequire('natcreator.model.CDInspectorNode');
		Ext.syncRequire('natcreator.model.CDDataType');
		Ext.syncRequire('natcreator.model.CDEditToolboxNode');
		Ext.syncRequire('natcreator.model.ClientWeb');
	}
});
